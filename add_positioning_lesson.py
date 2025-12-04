import re

file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\script.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new Lesson 1 (Hand Positioning)
new_lesson_1 = """    {
        id: 1,
        title: "Hand Positioning",
        steps: [
            { type: 'instruction', text: "Place your left fingers on A S D F and right fingers on J K L ;. These are the home row keys.", key: 'f', hand: 'left', finger: 'index' },
            { type: 'instruction', text: "Your index fingers should rest on F and J. Feel the small bumps on these keys.", key: 'j', hand: 'right', finger: 'index' },
            { type: 'instruction', text: "Keep your fingers curved and wrists straight. Return to home row after each key press.", key: 'f', hand: 'left', finger: 'index' },
            { type: 'practice', text: "f j f j f j" }
        ]
    }"""

# Find where the lessons array starts
lessons_start = content.find("const lessons = [")
if lessons_start == -1:
    print("Could not find lessons array")
    exit(1)

# Find the first lesson object start (should be id: 1)
first_lesson_start = content.find("id: 1,", lessons_start)
if first_lesson_start == -1:
    print("Could not find first lesson")
    exit(1)

# Find the opening brace of the first lesson
first_lesson_obj_start = content.rfind("{", lessons_start, first_lesson_start)

# Part 1: Everything before first lesson
part1 = content[:first_lesson_obj_start]

# Part 2: New Lesson 1
part2 = new_lesson_1

# Part 3: Rest of the file (all existing lessons)
part3 = content[first_lesson_obj_start:]

# Renumber Part 3: increment all lesson IDs by 1
def renumber(match):
    num = int(match.group(1))
    return f"id: {num + 1},"

part3_renumbered = re.sub(r"id:\s*(\d+),", renumber, part3)

# Combine
final_content = part1 + part2 + ",\n" + part3_renumbered

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Updated script.js with new Lesson 1")
