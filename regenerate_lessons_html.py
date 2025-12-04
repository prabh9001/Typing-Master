
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
        <div class='header-controls'>
        </div>
    </header>
    <main style='background-color: #f1f3f4; align-items: flex-start; justify-content: flex-start; overflow-y: auto; flex: 1;'>
        <div style='width: 100%; padding: 40px 10%; box-sizing: border-box;'>
            <h1 style='color: #202124; margin-bottom: 30px;'>Typing Lessons</h1>
            <div class='lesson-grid'>"""

# Lessons 1-7 (Home Row)
lessons_list = [
    (1, 'Introduction to Typing', 'Learn the home row keys F and J.'),
    (2, 'F & J Practice', ''),
    (3, 'D & K Keys', ''),
    (4, 'S & L Keys', ''),
    (5, 'A & ; Keys', ''),
    (6, 'G & H Keys', ''),
    (7, 'Home Row Complete', '')
]

# Lessons 8-13 (Top Row)
lessons_list.extend([
    (8, 'R & U Keys', ''),
    (9, 'E & I Keys', ''),
    (10, 'W & O Keys', ''),
    (11, 'Q & P Keys', ''),
    (12, 'T & Y Keys', ''),
    (13, 'Top Row Complete', '')
])

# Lessons 14-19 (Bottom Row)
lessons_list.extend([
    (14, 'V & M Keys', ''),
    (15, 'C & , Keys', ''),
    (16, 'X & . Keys', ''),
    (17, 'Z & / Keys', ''),
    (18, 'B & N Keys', ''),
    (19, 'Bottom Row Complete', '')
])

# Old lessons that were previously 10+ (now 20+)
# Original list from before my last update (where Top Row was 8, Bottom 9, Full 10)
# Wait, in the previous step, I had:
# 8: Top Row (Old)
# 9: Bottom Row (Old)
# 10: Full Keyboard
# ...
# So I need the list starting from "Full Keyboard".

old_lessons_10_plus = [
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
current_id = 20
for title, desc in old_lessons_10_plus:
    lessons_list.append((current_id, title, desc))
    current_id += 1

cards_html = ''
for num, title, desc in lessons_list:
    desc_html = f'<p style="color: #5f6368; font-size: 0.9rem;">{desc}</p>' if desc else ''
    cards_html += f'''
                <div class="lesson-card" onclick="window.location.href='home/home.html?lesson={num}'">
                    <div class="lesson-number">Lesson {num}</div>
                    <div class="lesson-title">{title}</div>
                    <div class="lesson-stars">☆☆☆☆☆</div>
                    {desc_html}
                </div>'''

html_end = """
            </div>
        </div>
    </main>
    <footer style='text-align:center; padding:20px 0; font-size:14px; color:#666; background-color: #f1f3f4;'>
        © 2025 Prabhjeet Singh. All rights reserved.
    </footer>
</body>
</html>"""

with open('c:/Users/WAHEGURU JI/Desktop/New folder (2)/lessons.html', 'w', encoding='utf-8') as f:
    f.write(html_start + cards_html + html_end)
