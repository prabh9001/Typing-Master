"""
Properly add time display to lesson history in all lesson pages
"""

def add_time_to_lesson_page(filename, lesson_prefix):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    while i < len(lines):
        new_lines.append(lines[i])
        
        # Look for the Errors line in lesson history
        if f'<div><strong>Errors:</strong><span id="err-{lesson_prefix}' in lines[i] or \
           '<div><strong>Errors:</strong><span id="err-' in lines[i]:
            # Add the time line after this
            # Get the indentation
            indent = len(lines[i]) - len(lines[i].lstrip())
            spaces = ' ' * indent
            
            # Extract the lesson ID from the current line
            if 'id="err-' in lines[i]:
                lesson_id = lines[i].split('id="err-')[1].split('"')[0]
                time_line = f'{spaces}<div><strong>Time:</strong><span id="time-{lesson_id}">-</span></div>\r\n'
                # Insert after the next line (which should be </div>)
                i += 1
                new_lines.append(lines[i])  # Add the closing </div>
                # Now check if next line is the outer </div>, if so add before it
                if i + 1 < len(lines) and '</div>' in lines[i + 1]:
                    # Insert time before the outer closing div
                    new_lines.insert(-1, time_line)
        
        i += 1
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"Updated {filename}")

# Process each file
files = [
    (r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_punjabi.html', 'punjabi_'),
    (r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html', 'hindi_'),
    (r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html', '')
]

for filepath, prefix in files:
    try:
        add_time_to_lesson_page(filepath, prefix)
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print("\nAll files processed!")
