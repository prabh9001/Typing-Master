import re

# Update lessons_raavi.html
file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_raavi.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace font from Noto Sans Gurmukhi to Raavi
content = content.replace('Noto Sans Gurmukhi', 'Raavi')

# 2. Update title
content = content.replace('ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਸਿੱਖੋ', 'ਰਾਵੀ ਟਾਈਪਿੰਗ ਸਿੱਖੋ')
content = content.replace('TypeMee (Punjabi)', 'TypeMee (Raavi)')

# 3. Update language indicator
content = content.replace('🇮🇳 ਪੰਜਾਬੀ', '🇮🇳 ਰਾਵੀ')

# 4. Update header title
content = content.replace('ਪੰਜਾਬੀ\r\n                ਟਾਈਪਿੰਗ ਪਾਠ', 'ਰਾਵੀ\r\n                ਟਾਈਪਿੰਗ ਪਾਠ')

# 5. Replace all punjabi_ with raavi_ in IDs
content = re.sub(r'punjabi_(\d+)', r'raavi_\1', content)

# 6. Update lesson links to use raavi language parameter
content = content.replace('lesson=raavi_', 'lesson=raavi_')
content = content.replace('&lang=punjabi', '&lang=raavi')

# 7. Update the script section language references
content = content.replace("lang='pa'", "lang='pa-Raavi'")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated lessons_raavi.html")

# Update lessons_data_raavi.js
js_file = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\lessons_data_raavi.js'

with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Replace variable name
js_content = js_content.replace('punjabiLessons', 'raaviLessons')

# Replace all punjabi_ IDs with raavi_
js_content = re.sub(r"id: 'punjabi_", "id: 'raavi_", js_content)

with open(js_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Updated lessons_data_raavi.js")
