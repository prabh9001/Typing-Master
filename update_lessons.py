
html_start = """<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>TypingClub - Learn Touch Typing</title>
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
            <h1 style='color: #202124; margin-bottom: 30px;'>Typing Jungle</h1>
            <div class='lesson-grid'>"""

lessons = [
    (1, 'Introduction to Typing', 'Learn the home row keys F and J.'),
    (2, 'F & J Practice', ''),
    (3, 'D, K & A Keys', ''),
    (4, 'S, L & ; Keys', ''),
    (5, 'Home Row Sentences', ''),
    (6, 'Top Row (QWERTY)', ''),
    (7, 'Bottom Row (ZXCV)', ''),
    (8, 'Full Keyboard', ''),
    (9, 'Paragraph Practice 1', 'Type full sentences and paragraphs.'),
    (10, 'Paragraph Practice 2', 'More complex paragraph typing.'),
    (11, 'Famous Quotes', 'Type famous inspirational quotes.'),
    (12, 'Speed Challenge', 'Test your speed with longer texts.'),
    (13, 'Numbers 1-5', ''),
    (14, 'Numbers 6-0', ''),
    (15, 'Full Number Practice', ''),
    (16, 'Basic Punctuation', ''),
    (17, 'Email & Web', ''),
    (18, 'Common Words 1', ''),
    (19, 'Common Words 2', ''),
    (20, 'Greetings', ''),
    (21, 'Questions', ''),
    (22, 'Short Answers', ''),
    (23, 'Days of Week', ''),
    (24, 'Months', ''),
    (25, 'Colors', ''),
    (26, 'Food Words', ''),
    (27, 'Animals', ''),
    (28, 'Family Words', ''),
    (29, 'Weather', ''),
    (30, 'Office Terms', ''),
    (31, 'Travel Words', ''),
    (32, 'Technology', ''),
    (33, 'Education', ''),
    (34, 'Sports', ''),
    (35, 'Shopping', ''),
    (36, 'Cooking', ''),
    (37, 'Health', ''),
    (38, 'Nature', ''),
    (39, 'Time Expressions', ''),
    (40, 'Directions', ''),
    (41, 'Emotions', ''),
    (42, 'Actions', ''),
    (43, 'Descriptions', ''),
    (44, 'Social Media', ''),
    (45, 'Music', ''),
    (46, 'Books & Reading', ''),
    (47, 'Movies & TV', ''),
    (48, 'Hobbies', ''),
    (49, 'Relationships', ''),
    (50, 'Work & Career', ''),
    (51, 'Money & Finance', ''),
    (52, 'Geography', ''),
    (53, 'Science', ''),
    (54, 'History', ''),
    (55, 'Art', ''),
    (56, 'Religion & Culture', ''),
    (57, 'Law & Government', ''),
    (58, 'Environment', ''),
    (59, 'Motivational Quotes', ''),
    (60, 'Famous Sayings', ''),
    (61, 'Business Email', ''),
    (62, 'Speed Master', '')
]

cards_html = ''
for num, title, desc in lessons:
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
