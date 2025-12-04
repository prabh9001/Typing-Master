import re

file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\script.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define new Top Row Lessons
new_top_row = [
    {
        "id": 8,
        "title": "R & U Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach up with your index fingers: R (left) and U (right).\", key: 'r', hand: 'left', finger: 'index' }",
            "{ type: 'practice', text: \"rrrr uuuu\" }",
            "{ type: 'practice', text: \"ruru urur\" }",
            "{ type: 'practice', text: \"run rug urn\" }"
        ]
    },
    {
        "id": 9,
        "title": "E & I Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach up with your middle fingers: E (left) and I (right).\", key: 'e', hand: 'left', finger: 'middle' }",
            "{ type: 'practice', text: \"eeee iiii\" }",
            "{ type: 'practice', text: \"eiei ieie\" }",
            "{ type: 'practice', text: \"did kid lie\" }"
        ]
    },
    {
        "id": 10,
        "title": "W & O Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach up with your ring fingers: W (left) and O (right).\", key: 'w', hand: 'left', finger: 'ring' }",
            "{ type: 'practice', text: \"wwww oooo\" }",
            "{ type: 'practice', text: \"wowo owow\" }",
            "{ type: 'practice', text: \"wow owl low\" }"
        ]
    },
    {
        "id": 11,
        "title": "Q & P Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach up with your pinky fingers: Q (left) and P (right).\", key: 'q', hand: 'left', finger: 'pinky' }",
            "{ type: 'practice', text: \"qqqq pppp\" }",
            "{ type: 'practice', text: \"qpqp pqpq\" }",
            "{ type: 'practice', text: \"quit pop up\" }"
        ]
    },
    {
        "id": 12,
        "title": "T & Y Keys",
        "steps": [
            "{ type: 'instruction', text: \"Stretch your index fingers to reach T (left) and Y (right).\", key: 't', hand: 'left', finger: 'index' }",
            "{ type: 'practice', text: \"tttt yyyy\" }",
            "{ type: 'practice', text: \"tyty ytyt\" }",
            "{ type: 'practice', text: \"try toy yet\" }"
        ]
    },
    {
        "id": 13,
        "title": "Top Row Complete",
        "steps": [
            "{ type: 'practice', text: \"qwertyuiop\" }",
            "{ type: 'practice', text: \"poiuytrewq\" }",
            "{ type: 'practice', text: \"the quick brown fox\" }",
            "{ type: 'practice', text: \"write your report\" }"
        ]
    }
]

# Define new Bottom Row Lessons
new_bottom_row = [
    {
        "id": 14,
        "title": "V & M Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach down with your index fingers: V (left) and M (right).\", key: 'v', hand: 'left', finger: 'index' }",
            "{ type: 'practice', text: \"vvvv mmmm\" }",
            "{ type: 'practice', text: \"vmvm mvmv\" }",
            "{ type: 'practice', text: \"van man mom\" }"
        ]
    },
    {
        "id": 15,
        "title": "C & , Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach down with your middle fingers: C (left) and , (right).\", key: 'c', hand: 'left', finger: 'middle' }",
            "{ type: 'practice', text: \"cccc ,,,,\" }",
            "{ type: 'practice', text: \"c,c, ,c,c\" }",
            "{ type: 'practice', text: \"car, cat, cut,\" }"
        ]
    },
    {
        "id": 16,
        "title": "X & . Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach down with your ring fingers: X (left) and . (right).\", key: 'x', hand: 'left', finger: 'ring' }",
            "{ type: 'practice', text: \"xxxx ....\" }",
            "{ type: 'practice', text: \"x.x. .x.x\" }",
            "{ type: 'practice', text: \"six. box. fox.\" }"
        ]
    },
    {
        "id": 17,
        "title": "Z & / Keys",
        "steps": [
            "{ type: 'instruction', text: \"Reach down with your pinky fingers: Z (left) and / (right).\", key: 'z', hand: 'left', finger: 'pinky' }",
            "{ type: 'practice', text: \"zzzz ////\" }",
            "{ type: 'practice', text: \"z/z/ /z/z\" }",
            "{ type: 'practice', text: \"zoo/ zip/ zap/\" }"
        ]
    },
    {
        "id": 18,
        "title": "B & N Keys",
        "steps": [
            "{ type: 'instruction', text: \"Stretch your index fingers down to reach B (left) and N (right).\", key: 'b', hand: 'left', finger: 'index' }",
            "{ type: 'practice', text: \"bbbb nnnn\" }",
            "{ type: 'practice', text: \"bnbn nbnb\" }",
            "{ type: 'practice', text: \"ban bun nun\" }"
        ]
    },
    {
        "id": 19,
        "title": "Bottom Row Complete",
        "steps": [
            "{ type: 'practice', text: \"zxcvbnm,./\" }",
            "{ type: 'practice', text: \"man can van\" }",
            "{ type: 'practice', text: \"mix six box\" }",
            "{ type: 'practice', text: \"zip zap zoo\" }"
        ]
    }
]

def format_lesson(lesson):
    steps_str = ",\n            ".join(lesson['steps'])
    return f"""    {{
        id: {lesson['id']},
        title: "{lesson['title']}",
        steps: [
            {steps_str}
        ]
    }}"""

# We need to replace Lesson 8 (Top Row) and Lesson 9 (Bottom Row) with these new blocks.
# And renumber everything after.

# Find Lesson 8 start
l8_start = content.find("id: 8,")
if l8_start == -1:
    print("Could not find Lesson 8")
    exit(1)
l8_obj_start = content.rfind("{", 0, l8_start)

# Find Lesson 10 start (Full Keyboard) - This is where the rest begins
l10_start = content.find("id: 10,")
if l10_start == -1:
    print("Could not find Lesson 10")
    exit(1)
l10_obj_start = content.rfind("{", 0, l10_start)

# Construct new sections
new_top_str = ",\n".join([format_lesson(l) for l in new_top_row])
new_bottom_str = ",\n".join([format_lesson(l) for l in new_bottom_row])

part1 = content[:l8_obj_start]
part2 = new_top_str + ",\n" + new_bottom_str
part3 = content[l10_obj_start:]

# Renumber Part 3
# Old Lesson 10 becomes Lesson 20. (Shift +10)
# Because we replaced 2 lessons (8,9) with 12 lessons (8-19).
# Net change: +10 lessons.

def renumber(match):
    num = int(match.group(1))
    return f"id: {num + 10},"

part3_renumbered = re.sub(r"id:\s*(\d+),", renumber, part3)

final_content = part1 + part2 + ",\n" + part3_renumbered

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)
