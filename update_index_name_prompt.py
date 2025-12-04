import re

file_path = r'c:\Users\WAHEGURU JI\Desktop\New folder (2)\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Change the button onclick
content = content.replace(
    'onclick="window.location.href=\'lessons.html\'"',
    'onclick="startApp()"'
)

# Add the script before </body>
script = '''    <script>
        function startApp() {
            let userName = sessionStorage.getItem('userName');
            if (!userName) {
                userName = prompt('Welcome to TypeMee! Please enter your name:');
                if (userName && userName.trim()) {
                    sessionStorage.setItem('userName', userName.trim());
                } else {
                    sessionStorage.setItem('userName', 'Guest');
                }
            }
            window.location.href = 'lessons.html';
        }
    </script>
'''

content = content.replace('</body>', script + '</body>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html with name prompt")
