import re

# Files to update
files = [
    r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons.html',
    r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_hindi.html',
    r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_punjabi.html'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to find the history display sections
    # We need to add a time field after the Errors field
    pattern = r'(<div class="lesson-history" id="history-(\d+)"[^>]*>[\s\S]*?<div[^>]*>[\s\S]*?<div><strong>Errors:</strong> <span id="err-\2">-</span></div>)'
    
    def add_time_field(match):
        existing_content = match.group(1)
        lesson_id = match.group(2)
        # Add the time field after the errors field
        time_field = f'\n                            <div><strong>Time:</strong> <span id="time-{lesson_id}">-</span></div>'
        return existing_content + time_field
    
    # Replace all occurrences
    updated_content = re.sub(pattern, add_time_field, content)
    
    # Also update the JavaScript to use localStorage instead of sessionStorage
    # and to display the time field
    
    # Update the JavaScript section that loads history
    js_pattern = r"const stored = sessionStorage\.getItem\('lessonHistory'\);"
    updated_content = re.sub(js_pattern, "const stored = localStorage.getItem('lessonHistory');", updated_content)
    
    # Update the part that displays history to include time
    display_pattern = r"(document\.getElementById\('err-' \+ lessonId\)\.textContent = stats\.mistakes;)"
    display_replacement = r"\1\n                            document.getElementById('time-' + lessonId).textContent = stats.time || '-';"
    updated_content = re.sub(display_pattern, display_replacement, updated_content)
    
    # Update clearHistory to clear from localStorage
    clear_pattern = r"sessionStorage\.removeItem\('lessonHistory'\);"
    updated_content = re.sub(clear_pattern, "localStorage.removeItem('lessonHistory');", updated_content)
    
    # Write the updated content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Updated {file_path}")

print("All files updated successfully!")
