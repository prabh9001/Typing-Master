import re

# Read the file
with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_punjabi.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find and replace - add time field after errors field
pattern = r'(<div><strong>Errors:</strong><span id="err-(punjabi_\d+)">-</span></div>)\s*(\r?\n\s*</div>)'
replacement = r'\1\r\n                            <div><strong>Time:</strong><span id="time-\2">-</span></div>\3'

# Apply the replacement
updated_content = re.sub(pattern, content, content)

# Write back
with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_punjabi.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated Punjabi lessons page with time fields!")
