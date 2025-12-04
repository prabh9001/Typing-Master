import re

file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\script.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new Home Row lessons (IDs 3-7)
new_home_row_lessons = [
    {
        "id": 3,
        "title": "D & K Keys",
        "steps": [
            "{ type: 'instruction', text: \"Type the d key (left middle) and k key (right middle).\", key: 'd', hand: 'left', finger: 'middle' }",
            "{ type: 'practice', text: \"dddd kkkk\" }",
            "{ type: 'practice', text: \"dkdk kdkd\" }",
            "{ type: 'practice', text: \"ddkk kkdd\" }"
        ]
    },
    {
        "id": 4,
        "title": "S & L Keys",
        "steps": [
            "{ type: 'instruction', text: \"Type the s key (left ring) and l key (right ring).\", key: 's', hand: 'left', finger: 'ring' }",
            "{ type: 'practice', text: \"ssss llll\" }",
            "{ type: 'practice', text: \"slsl lsls\" }",
            "{ type: 'practice', text: \"ssll llss\" }"
        ]
    },
    {
        "id": 5,
        "title": "A & ; Keys",
        "steps": [
            "{ type: 'instruction', text: \"Type the a key (left pinky) and ; key (right pinky).\", key: 'a', hand: 'left', finger: 'pinky' }",
            "{ type: 'practice', text: \"aaaa ;;;;\" }",
            "{ type: 'practice', text: \"a;a; ;a;a\" }",
            "{ type: 'practice', text: \"aa;; ;;aa\" }"
        ]
    },
    {
        "id": 6,
        "title": "G & H Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach with your index fingers to type g (left) and h (right).\", key: 'g', hand: 'left', finger: 'index' }",
            "{ type: 'practice', text: \"gggg hhhh\" }",
            "{ type: 'practice', text: \"ghgh hghg\" }",
            "{ type: 'practice', text: \"fghj jhgf\" }"
        ]
    },
    {
        "id": 7,
        "title": "Home Row Complete",
        "steps": [
            "{ type: 'practice', text: \"asdfghjkl;\" }",
            "{ type: 'practice', text: \"dad has a salad\" }",
            "{ type: 'practice', text: \"ask a sad lad\" }",
            "{ type: 'practice', text: \"all fall\" }"
        ]
    }
]

# Function to format a lesson object string
def format_lesson(lesson):
    steps_str = ",\n            ".join(lesson['steps'])
    return f"""    {{
        id: {lesson['id']},
        title: "{lesson['title']}",
        steps: [
            {steps_str}
        ]
    }}"""

# Regex to find the lessons array content
# We look for "const lessons = [" and the closing "];"
# This is tricky with nested brackets. We'll assume standard formatting.
start_marker = "const lessons = ["
end_marker = "];"

start_idx = content.find(start_marker)
end_idx = content.rfind(end_marker) # Find the last ]; which might be the end of lessons array if it's at top level

if start_idx == -1:
    print("Could not find lessons array")
    exit(1)

# Extract existing lessons to preserve 1, 2 and 8+ (which need renumbering)
# Actually, easier to just replace the whole block if we can parse it.
# Let's read the file line by line to handle the structure better.

lines = content.splitlines()
new_lines = []
in_lessons = False
lesson_block = []
current_lesson_lines = []
brace_count = 0

# We will reconstruct the file.
# 1. Keep lines before `const lessons = [`
# 2. Add Lesson 1, 2 (keep as is or reconstruct)
# 3. Add new Lessons 3-7
# 4. Parse remaining lessons, increment their IDs by 2 (since we added 2 new ones: 5,6 vs old 5. Wait.
# Old: 3,4,5 (3 lessons). New: 3,4,5,6,7 (5 lessons). Net change: +2 lessons.
# So old Lesson 6 becomes 8. Old 7 becomes 9.

# Let's just hardcode the replacement for the top part and regex replace the IDs for the rest?
# No, regex replacing IDs in the rest of the file is safer.

# Strategy:
# 1. Identify where Lesson 6 starts in the original file.
# 2. Replace everything from Lesson 3 start to Lesson 6 start with new Lessons 3-7.
# 3. For the rest of the file (Lesson 6 onwards), increment IDs.

# Find Lesson 3 start
l3_start = content.find("id: 3,")
if l3_start == -1:
    print("Could not find Lesson 3")
    exit(1)
    
# Find start of the object containing id: 3
# Search backwards for '{'
l3_obj_start = content.rfind("{", 0, l3_start)

# Find Lesson 6 start (Old "Top Row")
l6_start = content.find("title: \"Top Row (QWERTY)\"")
if l6_start == -1:
    # Maybe it was renamed? Let's look for id: 6
    l6_start = content.find("id: 6,")

if l6_start == -1:
    print("Could not find Lesson 6")
    exit(1)

l6_obj_start = content.rfind("{", 0, l6_start)

# Construct new lessons string
new_lessons_str = ",\n".join([format_lesson(l) for l in new_home_row_lessons])

# Part 1: Start of file up to Lesson 3
part1 = content[:l3_obj_start]

# Part 2: New lessons
part2 = new_lessons_str

# Part 3: Rest of the file (Old Lesson 6 onwards)
part3 = content[l6_obj_start:]

# Now we need to renumber Part 3.
# We need to find "id: X," and replace with "id: X+2,"
def renumber(match):
    num = int(match.group(1))
    return f"id: {num + 2},"

part3_renumbered = re.sub(r"id:\s*(\d+),", renumber, part3)

# Combine
final_content = part1 + part2 + ",\n" + part3_renumbered

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)
