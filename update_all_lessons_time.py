import re

# Update Hindi lessons
with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'(<div><strong>Errors:</strong><span id="err-(hindi_\d+)">-</span></div>)\s*(\r?\n\s*</div>)'
replacement = r'\1\r\n                            <div><strong>Time:</strong><span id="time-\2">-</span></div>\3'
updated_content = re.sub(pattern, content, content)

with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

# Also update the JavaScript to display time
js_pattern = r'(errSpan\.textContent = lesson\.mistakes;)'
js_replacement = r'''\1
                    
                    // Display time if available
                    const timeSpan = document.getElementById(`time-${lessonKey}`);
                    if (timeSpan && lesson.time) {
                        timeSpan.textContent = lesson.time;
                    }'''

with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html', 'r', encoding='utf-8') as f:
    content = f.read()

updated_content = re.sub(js_pattern, js_replacement, content)

with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated Hindi lessons page!")

# Update English lessons
with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'(<div><strong>Errors:</strong><span id="err-(\d+)">-</span></div>)\s*(\r?\n\s*</div>)'
replacement = r'\1\r\n                            <div><strong>Time:</strong><span id="time-\2">-</span></div>\3'
updated_content = re.sub(pattern, content, content)

with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

# Update JavaScript
with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html', 'r', encoding='utf-8') as f:
    content = f.read()

js_pattern = r'(errSpan\.textContent = lesson\.mistakes;)'
js_replacement = r'''\1
                    
                    // Display time if available
                    const timeSpan = document.getElementById(`time-${lessonKey}`);
                    if (timeSpan && lesson.time) {
                        timeSpan.textContent = lesson.time;
                    }'''

updated_content = re.sub(js_pattern, js_replacement, content)

with open(r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated English lessons page!")
print("All lesson pages updated with time display!")
