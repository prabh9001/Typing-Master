import re

# Fix Punjabi file - add time field to ALL lessons
file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_punjabi.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find history sections that DON'T have a time field
# We'll look for sections that end with Errors but don't have Time after
pattern = r'(<div><strong>Errors:</strong>\s*<span id="err-(punjabi_\d+)">-</span></div>)\s*</div>\s*</div>'

def add_time_field(match):
    errors_div = match.group(1)
    lesson_id = match.group(2)
    # Add the time field after the errors field
    time_field = f'\n                            <div><strong>Time:</strong> <span id="time-{lesson_id}">-</span></div>'
    return errors_div + time_field + '\n                        </div>\n                    </div>'

# Replace all occurrences
updated_content = re.sub(pattern, add_time_field, content)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print(f"Fixed Punjabi file - added time fields to all lessons")
