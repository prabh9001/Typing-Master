
# Construct the full file content
html_start = """<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>TypeMee - Learn Touch Typing</title>
    <link rel='stylesheet' href='style.css'>
    <link href='https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap' rel='stylesheet'>
</head>
<body>
    <header>
        <div class='logo'>
            <span>TypeMee</span>
        </div>
        <div style='flex: 1; text-align: center; font-weight: 500; font-size: 1.1rem; color: #202124;' id='user-name-display'></div>
        <div class='header-controls'>
            <button onclick='clearHistory()' style='background: none; border: 1px solid #dadce0; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 0.9rem;'>Clear History</button>
        </div>
    </header>
    <main style='background-color: #f1f3f4; align-items: flex-start; justify-content: flex-start; overflow-y: auto; flex: 1;'>
        <div style='width: 100%; padding: 40px 10%; box-sizing: border-box;'>
            <h1 style='color: #202124; margin-bottom: 30px;'>Typing Lessons</h1>
            <div class='lesson-grid'>"""

# NEW Lesson 1 + Shifted Home Row (2-8)
lessons_list = [
    (1, 'Hand Positioning', 'Learn proper hand placement on the keyboard.'),
    (2, 'Introduction to Typing', 'Learn the home row keys F and J.'),
    (3, 'F & J Practice', ''),
    (4, 'D & K Keys', ''),
    (5, 'S & L Keys', ''),
    (6, 'A & ; Keys', ''),
    (7, 'G & H Keys', ''),
    (8, 'Home Row Complete', '')
]

# Lessons 9-14 (Top Row)
lessons_list.extend([
    (9, 'R & U Keys', ''),
    (10, 'E & I Keys', ''),
    (11, 'W & O Keys', ''),
    (12, 'Q & P Keys', ''),
    (13, 'T & Y Keys', ''),
    (14, 'Top Row Complete', '')
])

# Lessons 15-20 (Bottom Row)
lessons_list.extend([
    (15, 'V & M Keys', ''),
    (16, 'C & , Keys', ''),
    (17, 'X & . Keys', ''),
    (18, 'Z & / Keys', ''),
    (19, 'B & N Keys', ''),
    (20, 'Bottom Row Complete', '')
])

# Old lessons that were previously 20+ (now 21+)
old_lessons_20_plus = [
    ('Full Keyboard', ''),
    ('Paragraph Practice 1', 'Type full sentences and paragraphs.'),
    ('Paragraph Practice 2', 'More complex paragraph typing.'),
    ('Famous Quotes', 'Type famous inspirational quotes.'),
    ('Speed Challenge', 'Test your speed with longer texts.'),
    ('Numbers 1-5', ''),
    ('Numbers 6-0', ''),
    ('Full Number Practice', ''),
    ('Basic Punctuation', ''),
    ('Email & Web', ''),
    ('Common Words 1', ''),
    ('Common Words 2', ''),
    ('Greetings', ''),
    ('Questions', ''),
    ('Short Answers', ''),
    ('Days of Week', ''),
    ('Months', ''),
    ('Colors', ''),
    ('Food Words', ''),
    ('Animals', ''),
    ('Family Words', ''),
    ('Weather', ''),
    ('Office Terms', ''),
    ('Travel Words', ''),
    ('Technology', ''),
    ('Education', ''),
    ('Sports', ''),
    ('Shopping', ''),
    ('Cooking', ''),
    ('Health', ''),
    ('Nature', ''),
    ('Time Expressions', ''),
    ('Directions', ''),
    ('Emotions', ''),
    ('Actions', ''),
    ('Descriptions', ''),
    ('Social Media', ''),
    ('Music', ''),
    ('Books & Reading', ''),
    ('Movies & TV', ''),
    ('Hobbies', ''),
    ('Relationships', ''),
    ('Work & Career', ''),
    ('Money & Finance', ''),
    ('Geography', ''),
    ('Science', ''),
    ('History', ''),
    ('Art', ''),
    ('Religion & Culture', ''),
    ('Law & Government', ''),
    ('Environment', ''),
    ('Motivational Quotes', ''),
    ('Famous Sayings', ''),
    ('Business Email', ''),
    ('Speed Master', '')
]

# Add shifted lessons
current_id = 21
for title, desc in old_lessons_20_plus:
    lessons_list.append((current_id, title, desc))
    current_id += 1

cards_html = ''
for num, title, desc in lessons_list:
    desc_html = f'<p style="color: #5f6368; font-size: 0.9rem;">{desc}</p>' if desc else ''
    cards_html += f'''
                <div class="lesson-card" onclick="window.location.href='home/home.html?lesson={num}'" id="lesson-{num}">
                    <div class="lesson-number">Lesson {num}</div>
                    <div class="lesson-title">{title}</div>
                    <div class="lesson-stars">☆☆☆☆☆</div>
                    {desc_html}
                    <div class="lesson-history" id="history-{num}" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #dadce0; display: none;">
                        <div style="display: flex; justify-content: space-around; font-size: 0.85rem;">
                            <div><strong>WPM:</strong> <span id="wpm-{num}">-</span></div>
                            <div><strong>Acc:</strong> <span id="acc-{num}">-</span>%</div>
                            <div><strong>Errors:</strong> <span id="err-{num}">-</span></div>
                        </div>
                    </div>
                </div>'''

html_end = """
            </div>
        </div>
    </main>
    <footer style='text-align:center; padding:20px 0; font-size:14px; color:#666; background-color: #f1f3f4;'>
        © 2025 Prabhjeet Singh. All rights reserved.
    </footer>
    <script>
        // Load and display lesson history from sessionStorage
        document.addEventListener('DOMContentLoaded', function() {
            // Display username in header (already set from index.html)
            const userName = sessionStorage.getItem('userName') || 'Guest';
            const nameDisplay = document.getElementById('user-name-display');
            if (nameDisplay) {
                nameDisplay.textContent = 'Welcome, ' + userName + '!';
            }

            // Load lesson history
            try {
                const stored = sessionStorage.getItem('lessonHistory');
                if (stored) {
                    const history = JSON.parse(stored);
                    for (const lessonId in history) {
                        const stats = history[lessonId];
                        const historyDiv = document.getElementById('history-' + lessonId);
                        if (historyDiv) {
                            document.getElementById('wpm-' + lessonId).textContent = stats.wpm;
                            document.getElementById('acc-' + lessonId).textContent = stats.accuracy;
                            document.getElementById('err-' + lessonId).textContent = stats.mistakes;
                            historyDiv.style.display = 'block';
                        }
                    }
                }
            } catch (e) {
                console.error('Error loading lesson history:', e);
            }
        });

        // Clear lesson history and username
        function clearHistory() {
            if (confirm('Are you sure you want to clear all lesson history and reset your name?')) {
                sessionStorage.removeItem('lessonHistory');
                sessionStorage.removeItem('userName');
                location.reload();
            }
        }
    </script>
</body>
</html>"""

with open('c:/Users/WAHEGURU JI/Desktop/New folder (2)/lessons.html', 'w', encoding='utf-8') as f:
    f.write(html_start + cards_html + html_end)

print("Updated lessons.html with new Lesson 1")
