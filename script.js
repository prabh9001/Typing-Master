
const lessons = [
    {
        id: 1,
        title: "Introduction to Typing",
        steps: [
            { type: 'instruction', text: "Type the f key using your left index finger.", key: 'f', hand: 'left', finger: 'index' },
            { type: 'practice', text: "ffff jjjj" },
            { type: 'instruction', text: "Type the j key using your right index finger.", key: 'j', hand: 'right', finger: 'index' },
            { type: 'practice', text: "jjjj ffff" },
            { type: 'practice', text: "ffjj jjff fffj jjjf" },
            { type: 'practice', text: "jfjf fjfj jfjf fjfj" }
        ]
    },
    {
        id: 2,
        title: "F & J Practice",
        steps: [
            { type: 'practice', text: "ffff jjjj ffff jjjj" },
            { type: 'practice', text: "ffjj jjff ffjj jjff" },
            { type: 'practice', text: "fjfj jfjf fjfj jfjf" },
            { type: 'practice', text: "jfjf fjfj fff jjj" }
        ]
    },
    {
        id: 3,
        title: "D & K Keys",
        steps: [
            { type: 'instruction', text: "Type the d key using your left middle finger.", key: 'd', hand: 'left', finger: 'middle' },
            { type: 'practice', text: "dddd kkkk" },
            { type: 'instruction', text: "Type the k key using your right middle finger.", key: 'k', hand: 'right', finger: 'middle' },
            { type: 'practice', text: "kkkk dddd" },
            { type: 'practice', text: "ddkk kkdd ddkk kkdd" },
            { type: 'practice', text: "dkdk kdkd dkdk kdkd" },
            { type: 'practice', text: "dad kad fad jak" } // Simple words
        ]
    },
    {
        id: 4,
        title: "S & L Keys",
        steps: [
            { type: 'instruction', text: "Type the s key using your left ring finger.", key: 's', hand: 'left', finger: 'ring' },
            { type: 'practice', text: "ssss llll" },
            { type: 'instruction', text: "Type the l key using your right ring finger.", key: 'l', hand: 'right', finger: 'ring' },
            { type: 'practice', text: "llll ssss" },
            { type: 'practice', text: "ssll llss ssll llss" },
            { type: 'practice', text: "slsl lsls slsl lsls" },
            { type: 'practice', text: "sad lad lass sals" },
            { type: 'practice', text: "dad has a salad" } // Sentence
        ]
    },
    {
        id: 5,
        title: "Home Row Review",
        steps: [
            { type: 'practice', text: "asdf jkl;" },
            { type: 'practice', text: "fdsa ;lkj" },
            { type: 'practice', text: "dad has a lad" },
            { type: 'practice', text: "ask for a flask" },
            { type: 'practice', text: "a sad lad falls" },
            { type: 'practice', text: "all dads had a salad" }
        ]
    },
    {
        id: 6,
        title: "Top Row (QWERTYUIOP)",
        steps: [
            { type: 'instruction', text: "Type the r and u keys.", key: 'r', hand: 'left', finger: 'index' },
            { type: 'practice', text: "frfr juju frfr juju" },
            { type: 'instruction', text: "Type the e and i keys.", key: 'e', hand: 'left', finger: 'middle' },
            { type: 'practice', text: "dede kiki dede kiki" },
            { type: 'practice', text: "red kite" },
            { type: 'practice', text: "quit power" },
            { type: 'practice', text: "try to read the tree top" }
        ]
    },
    {
        id: 7,
        title: "Bottom Row (ZXCVBNM)",
        steps: [
            { type: 'instruction', text: "Type the v and m keys.", key: 'v', hand: 'left', finger: 'index' },
            { type: 'practice', text: "fvfv jmjm fvfv jmjm" },
            { type: 'practice', text: "van man" },
            { type: 'practice', text: "zxc vbn m,." },
            { type: 'practice', text: "can you move the van" },
            { type: 'practice', text: "mix the vat of jam" }
        ]
    },
    {
        id: 8,
        title: "Full Keyboard Practice",
        steps: [
            { type: 'practice', text: "the quick brown fox jumps over the lazy dog" },
            { type: 'practice', text: "pack my box with five dozen liquor jugs" },
            { type: 'practice', text: "sphinx of black quartz judge my vow" },
            { type: 'practice', text: "typing is a skill that improves with daily practice" }
        ]
    },
    {
        id: 9,
        title: "Paragraph Practice 1",
        steps: [
            { type: 'practice', text: "The quick brown fox jumps over the lazy dog." },
            { type: 'practice', text: "Practice makes perfect. Keep typing every day." },
            { type: 'practice', text: "Learning to type fast takes time and patience." }
        ]
    },
    {
        id: 10,
        title: "Paragraph Practice 2",
        steps: [
            { type: 'practice', text: "The sun rises in the east and sets in the west." },
            { type: 'practice', text: "Birds sing in the morning. Flowers bloom in spring." },
            { type: 'practice', text: "Reading books helps you learn new things every day." }
        ]
    },
    {
        id: 11,
        title: "Short Stories",
        steps: [
            { type: 'practice', text: "Once upon a time, there was a small village by the sea." },
            { type: 'practice', text: "The children played on the beach every summer afternoon." },
            { type: 'practice', text: "They built sandcastles and collected colorful shells." }
        ]
    },
    {
        id: 12,
        title: "Daily Practice",
        steps: [
            { type: 'practice', text: "Today is a good day to practice typing skills." },
            { type: 'practice', text: "Start slowly and increase your speed over time." },
            { type: 'practice', text: "Focus on accuracy first, then work on speed." },
            { type: 'practice', text: "Remember to take breaks and stretch your fingers." }
        ]
    },
    {
        id: 13,
        title: "Numbers 1-5",
        steps: [
            { type: 'practice', text: "111 222 333 444 555" },
            { type: 'practice', text: "12 23 34 45 51" },
            { type: 'practice', text: "123 234 345 451 512" }
        ]
    },
    {
        id: 14,
        title: "Numbers 6-0",
        steps: [
            { type: 'practice', text: "666 777 888 999 000" },
            { type: 'practice', text: "67 78 89 90 06" },
            { type: 'practice', text: "678 789 890 901 012" }
        ]
    },
    {
        id: 15,
        title: "Full Number Practice",
        steps: [
            { type: 'practice', text: "1234567890 0987654321" },
            { type: 'practice', text: "Call me at 555-1234" },
            { type: 'practice', text: "The year 2024 is here" }
        ]
    },
    {
        id: 16,
        title: "Basic Punctuation",
        steps: [
            { type: 'practice', text: "Hello, how are you?" },
            { type: 'practice', text: "Yes! That's great." },
            { type: 'practice', text: "Wait... I think so." }
        ]
    },
    {
        id: 17,
        title: "Email & Web",
        steps: [
            { type: 'practice', text: "user@email.com" },
            { type: 'practice', text: "www.example.com" },
            { type: 'practice', text: "Send me an email at hello@website.org" }
        ]
    },
    {
        id: 18,
        title: "Common Words 1",
        steps: [
            { type: 'practice', text: "the and for you that with this" },
            { type: 'practice', text: "have from they will what been more" },
            { type: 'practice', text: "when there time which their" }
        ]
    },
    {
        id: 19,
        title: "Common Words 2",
        steps: [
            { type: 'practice', text: "about know than call find give" },
            { type: 'practice', text: "work first over such because" },
            { type: 'practice', text: "through just where most also people" }
        ]
    },
    {
        id: 20,
        title: "Greetings",
        steps: [
            { type: 'practice', text: "Hello! How are you today?" },
            { type: 'practice', text: "Good morning! Have a great day." },
            { type: 'practice', text: "Nice to meet you. Welcome!" }
        ]
    },
    {
        id: 21,
        title: "Questions",
        steps: [
            { type: 'practice', text: "What is your name?" },
            { type: 'practice', text: "Where do you live?" },
            { type: 'practice', text: "How can I help you?" }
        ]
    },
    {
        id: 22,
        title: "Short Answers",
        steps: [
            { type: 'practice', text: "Yes, I agree." },
            { type: 'practice', text: "No, thank you." },
            { type: 'practice', text: "Maybe later." }
        ]
    },
    {
        id: 23,
        title: "Days of Week",
        steps: [
            { type: 'practice', text: "Monday Tuesday Wednesday" },
            { type: 'practice', text: "Thursday Friday Saturday Sunday" },
            { type: 'practice', text: "See you on Monday!" }
        ]
    },
    {
        id: 24,
        title: "Months",
        steps: [
            { type: 'practice', text: "January February March April" },
            { type: 'practice', text: "May June July August" },
            { type: 'practice', text: "September October November December" }
        ]
    },
    {
        id: 25,
        title: "Colors",
        steps: [
            { type: 'practice', text: "red blue green yellow orange" },
            { type: 'practice', text: "purple pink brown black white" },
            { type: 'practice', text: "The blue sky and green grass" }
        ]
    },
    {
        id: 26,
        title: "Food Words",
        steps: [
            { type: 'practice', text: "apple banana orange grape" },
            { type: 'practice', text: "bread cheese milk water coffee" },
            { type: 'practice', text: "I love pizza and ice cream" }
        ]
    },
    {
        id: 27,
        title: "Animals",
        steps: [
            { type: 'practice', text: "dog cat bird fish horse" },
            { type: 'practice', text: "lion tiger elephant monkey" },
            { type: 'practice', text: "The cat sleeps on the bed" }
        ]
    },
    {
        id: 28,
        title: "Family Words",
        steps: [
            { type: 'practice', text: "mother father sister brother" },
            { type: 'practice', text: "grandmother grandfather aunt uncle" },
            { type: 'practice', text: "My family is very important to me" }
        ]
    },
    {
        id: 29,
        title: "Weather",
        steps: [
            { type: 'practice', text: "sunny cloudy rainy windy snowy" },
            { type: 'practice', text: "The weather is nice today" },
            { type: 'practice', text: "It might rain tomorrow afternoon" }
        ]
    },
    {
        id: 30,
        title: "Office Terms",
        steps: [
            { type: 'practice', text: "meeting report deadline project" },
            { type: 'practice', text: "email schedule conference client" },
            { type: 'practice', text: "Please send the report by Friday" }
        ]
    },
    {
        id: 31,
        title: "Travel Words",
        steps: [
            { type: 'practice', text: "airport hotel ticket passport" },
            { type: 'practice', text: "flight train bus car taxi" },
            { type: 'practice', text: "I need to pack my suitcase" }
        ]
    },
    {
        id: 32,
        title: "Technology",
        steps: [
            { type: 'practice', text: "computer mouse keyboard screen" },
            { type: 'practice', text: "phone tablet internet wifi" },
            { type: 'practice', text: "Download the app on your smartphone" }
        ]
    },
    {
        id: 33,
        title: "Education",
        steps: [
            { type: 'practice', text: "school teacher student homework" },
            { type: 'practice', text: "book test grade class subject" },
            { type: 'practice', text: "Study hard and you will succeed" }
        ]
    },
    {
        id: 34,
        title: "Sports",
        steps: [
            { type: 'practice', text: "football basketball tennis soccer" },
            { type: 'practice', text: "swimming running cycling" },
            { type: 'practice', text: "Exercise is good for your health" }
        ]
    },
    {
        id: 35,
        title: "Shopping",
        steps: [
            { type: 'practice', text: "store shop buy sell price" },
            { type: 'practice', text: "money cash card receipt" },
            { type: 'practice', text: "How much does this cost?" }
        ]
    },
    {
        id: 36,
        title: "Cooking",
        steps: [
            { type: 'practice', text: "cook bake fry boil mix" },
            { type: 'practice', text: "knife spoon fork plate bowl" },
            { type: 'practice', text: "Add salt and pepper to taste" }
        ]
    },
    {
        id: 37,
        title: "Health",
        steps: [
            { type: 'practice', text: "doctor hospital medicine healthy" },
            { type: 'practice', text: "exercise sleep diet vitamins" },
            { type: 'practice', text: "Take care of your body and mind" }
        ]
    },
    {
        id: 38,
        title: "Nature",
        steps: [
            { type: 'practice', text: "tree flower garden forest mountain" },
            { type: 'practice', text: "river lake ocean beach island" },
            { type: 'practice', text: "Nature is beautiful and peaceful" }
        ]
    },
    {
        id: 39,
        title: "Time Expressions",
        steps: [
            { type: 'practice', text: "today tomorrow yesterday now" },
            { type: 'practice', text: "morning afternoon evening night" },
            { type: 'practice', text: "See you at three o'clock" }
        ]
    },
    {
        id: 40,
        title: "Directions",
        steps: [
            { type: 'practice', text: "left right forward backward" },
            { type: 'practice', text: "north south east west" },
            { type: 'practice', text: "Turn left at the next corner" }
        ]
    },
    {
        id: 41,
        title: "Emotions",
        steps: [
            { type: 'practice', text: "happy sad angry excited worried" },
            { type: 'practice', text: "tired proud nervous confident" },
            { type: 'practice', text: "I feel great today!" }
        ]
    },
    {
        id: 42,
        title: "Actions",
        steps: [
            { type: 'practice', text: "walk run jump sit stand" },
            { type: 'practice', text: "read write speak listen think" },
            { type: 'practice', text: "Please sit down and relax" }
        ]
    },
    {
        id: 43,
        title: "Descriptions",
        steps: [
            { type: 'practice', text: "big small tall short wide" },
            { type: 'practice', text: "fast slow hot cold new old" },
            { type: 'practice', text: "The old tree is very tall" }
        ]
    },
    {
        id: 44,
        title: "Social Media",
        steps: [
            { type: 'practice', text: "post like share comment follow" },
            { type: 'practice', text: "hashtag mention profile story" },
            { type: 'practice', text: "Check your notifications" }
        ]
    },
    {
        id: 45,
        title: "Music",
        steps: [
            { type: 'practice', text: "song music play listen dance" },
            { type: 'practice', text: "guitar piano drum voice" },
            { type: 'practice', text: "Music makes life better" }
        ]
    },
    {
        id: 46,
        title: "Books & Reading",
        steps: [
            { type: 'practice', text: "book novel story chapter page" },
            { type: 'practice', text: "read write author library" },
            { type: 'practice', text: "Reading is a great habit" }
        ]
    },
    {
        id: 47,
        title: "Movies & TV",
        steps: [
            { type: 'practice', text: "movie film show series episode" },
            { type: 'practice', text: "watch actor director scene" },
            { type: 'practice', text: "Let's watch a movie tonight" }
        ]
    },
    {
        id: 48,
        title: "Hobbies",
        steps: [
            { type: 'practice', text: "hobby painting drawing photography" },
            { type: 'practice', text: "gardening cooking gaming reading" },
            { type: 'practice', text: "What are your hobbies?" }
        ]
    },
    {
        id: 49,
        title: "Relationships",
        steps: [
            { type: 'practice', text: "friend friendship love trust respect" },
            { type: 'practice', text: "help support care understand" },
            { type: 'practice', text: "Good friends are precious" }
        ]
    },
    {
        id: 50,
        title: "Work & Career",
        steps: [
            { type: 'practice', text: "job work career professional" },
            { type: 'practice', text: "salary office employee manager" },
            { type: 'practice', text: "Hard work leads to success" }
        ]
    },
    {
        id: 51,
        title: "Money & Finance",
        steps: [
            { type: 'practice', text: "money budget save invest spend" },
            { type: 'practice', text: "bank account credit payment" },
            { type: 'practice', text: "Save money for the future" }
        ]
    },
    {
        id: 52,
        title: "Geography",
        steps: [
            { type: 'practice', text: "country city town village capital" },
            { type: 'practice', text: "continent ocean desert valley" },
            { type: 'practice', text: "Paris is the capital of France" }
        ]
    },
    {
        id: 53,
        title: "Science",
        steps: [
            { type: 'practice', text: "experiment research discover study" },
            { type: 'practice', text: "atom molecule chemical biology" },
            { type: 'practice', text: "Science explains how things work" }
        ]
    },
    {
        id: 54,
        title: "History",
        steps: [
            { type: 'practice', text: "history past ancient modern century" },
            { type: 'practice', text: "king queen empire battle war" },
            { type: 'practice', text: "Learning history is important" }
        ]
    },
    {
        id: 55,
        title: "Art",
        steps: [
            { type: 'practice', text: "art paint draw sketch color" },
            { type: 'practice', text: "canvas brush museum gallery" },
            { type: 'practice', text: "Art expresses creativity" }
        ]
    },
    {
        id: 56,
        title: "Religion & Culture",
        steps: [
            { type: 'practice', text: "culture tradition festival celebrate" },
            { type: 'practice', text: "belief faith prayer temple church" },
            { type: 'practice', text: "Respect all cultures and beliefs" }
        ]
    },
    {
        id: 57,
        title: "Law & Government",
        steps: [
            { type: 'practice', text: "law rule government president" },
            { type: 'practice', text: "rights freedom justice court" },
            { type: 'practice', text: "Everyone has equal rights" }
        ]
    },
    {
        id: 58,
        title: "Environment",
        steps: [
            { type: 'practice', text: "environment nature pollution climate" },
            { type: 'practice', text: "recycle reduce reuse protect" },
            { type: 'practice', text: "Save the planet for future generations" }
        ]
    },
    {
        id: 59,
        title: "Motivational Quotes",
        steps: [
            { type: 'practice', text: "Believe in yourself and you will succeed." },
            { type: 'practice', text: "Every day is a new opportunity." },
            { type: 'practice', text: "Dream big and work hard." }
        ]
    },
    {
        id: 60,
        title: "Famous Sayings",
        steps: [
            { type: 'practice', text: "Knowledge is power." },
            { type: 'practice', text: "Time is money." },
            { type: 'practice', text: "Practice makes perfect." }
        ]
    },
    {
        id: 61,
        title: "Business Email",
        steps: [
            { type: 'practice', text: "Dear Sir or Madam," },
            { type: 'practice', text: "Thank you for your email." },
            { type: 'practice', text: "Looking forward to hearing from you." },
            { type: 'practice', text: "Best regards," }
        ]
    },
    {
        id: 62,
        title: "Speed Master",
        steps: [
            { type: 'practice', text: "Type as fast as you can without mistakes." },
            { type: 'practice', text: "Speed and accuracy go hand in hand." },
            { type: 'practice', text: "You have completed all lessons! Congratulations!" }
        ]
    }
];

let currentLessonId = 1;
let currentStepIndex = 0;
let currentLesson = null;
let currentText = "";
let currentIndex = 0;
let mistakes = 0;
let isTyping = false;
let startTime = null;
let totalKeystrokes = 0;

// DOM Elements
const gameArea = document.getElementById('game-area');
const instructionText = document.getElementById('instruction-text');
const typingArea = document.getElementById('typing-area');
const keyboardContainer = document.getElementById('keyboard-container');
const prevBtn = document.querySelector('.nav-btn:first-child');
const skipBtn = document.querySelector('.nav-btn:last-child');
const wpmDisplay = document.getElementById('wpm-display');
const accuracyDisplay = document.getElementById('accuracy-display');
const mistakesDisplay = document.getElementById('mistakes-display');

function initGame() {
    if (!gameArea) return;

    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    if (lessonParam) {
        currentLessonId = parseInt(lessonParam);
    }

    loadLesson(currentLessonId);
    document.addEventListener('keydown', handleInput);

    if (prevBtn) prevBtn.addEventListener('click', previousStep);
    if (skipBtn) skipBtn.addEventListener('click', skipStep);

    renderKeyboard();
}

function loadLesson(id) {
    currentLesson = lessons.find(l => l.id === id);
    if (!currentLesson) {
        alert("Lesson not found!");
        window.location.href = "../index.html";
        return;
    }
    document.title = `Lesson ${id} - ${currentLesson.title}`;
    currentStepIndex = 0;
    mistakes = 0; // Reset mistakes at lesson start, not step start
    totalKeystrokes = 0;
    loadStep();
}

function loadStep() {
    if (currentStepIndex >= currentLesson.steps.length) {
        showLessonComplete();
        return;
    }

    const step = currentLesson.steps[currentStepIndex];
    currentIndex = 0;
    startTime = null;
    isTyping = true;
    updateStatsDisplay();

    // Reset UI
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active', 'guide'));

    if (step.type === 'instruction') {
        instructionText.style.display = 'block';
        typingArea.style.display = 'none';

        instructionText.innerHTML = step.text.replace(
            ` ${step.key} `,
            ` <span class="highlight">${step.key}</span> `
        );

        currentText = step.key;
        highlightKey(step.key);
        if (skipBtn) skipBtn.textContent = "Skip";

    } else if (step.type === 'practice') {
        instructionText.style.display = 'none';
        typingArea.style.display = 'flex';
        currentText = step.text;
        renderTypingArea();
        highlightKey(currentText[0]);
        if (skipBtn) skipBtn.textContent = "Next";
    }
}

function previousStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        loadStep();
    }
}

function skipStep() {
    currentStepIndex++;
    loadStep();
}

function calculateStats() {
    if (!startTime) return { wpm: 0, accuracy: 100 };

    const timeInMinutes = (new Date() - startTime) / 60000;
    const wpm = Math.round((currentIndex / 5) / timeInMinutes) || 0;

    const accuracy = totalKeystrokes > 0
        ? Math.round(((totalKeystrokes - mistakes) / totalKeystrokes) * 100)
        : 100;

    return { wpm, accuracy };
}

function updateStatsDisplay() {
    if (!wpmDisplay) return;
    const stats = calculateStats();
    wpmDisplay.textContent = stats.wpm;
    accuracyDisplay.textContent = `${stats.accuracy}%`;
    mistakesDisplay.textContent = mistakes;
}

function showLessonComplete() {
    isTyping = false;
    const stats = calculateStats();

    instructionText.style.display = 'block';
    typingArea.style.display = 'none';
    instructionText.innerHTML = `
        <div style="font-size: 2rem; color: var(--success-color); margin-bottom: 20px;">Lesson Complete!</div>
        
        <div style="display: flex; justify-content: center; gap: 40px; margin-bottom: 30px;">
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">${stats.wpm}</div>
                <div style="color: var(--text-secondary);">WPM</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">${stats.accuracy}%</div>
                <div style="color: var(--text-secondary);">Accuracy</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--error-color);">${mistakes}</div>
                <div style="color: var(--text-secondary);">Mistakes</div>
            </div>
        </div>

        <button onclick="window.location.href='../index.html'" class="nav-btn" style="margin-top: 20px;">Back to Menu</button>
        <button onclick="nextLesson()" class="nav-btn" style="margin-top: 20px; background: var(--primary-color); color: white;">Next Lesson</button>
    `;
}

function nextLesson() {
    const nextId = currentLessonId + 1;
    const nextLessonExists = lessons.find(l => l.id === nextId);
    if (nextLessonExists) {
        currentLessonId = nextId;
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lesson', nextId);
        window.history.pushState({}, '', newUrl);
        loadLesson(nextId);
    } else {
        alert("You have completed all available lessons!");
        window.location.href = "../index.html";
    }
}

// Header Controls
const settingsBtn = document.querySelector('.header-controls .icon-btn:nth-child(1)'); // Updated since Home button removed

let soundEnabled = false; // Disabled by default since removed from UI

// Settings Modal Logic
const settingsModal = document.getElementById('settings-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Get setting buttons (removed sound and theme)
const textSmallBtn = document.getElementById('text-small-btn');
const textMediumBtn = document.getElementById('text-medium-btn');
const textLargeBtn = document.getElementById('text-large-btn');
const keyboardToggleBtn = document.getElementById('keyboard-toggle-btn');

if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        if (settingsModal) {
            settingsModal.style.display = 'flex';
        }
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (settingsModal) settingsModal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

// Text size buttons - NOW AFFECTS BOTH INSTRUCTION TEXT AND TYPING AREA
if (textSmallBtn) {
    textSmallBtn.addEventListener('click', () => {
        const typingArea = document.getElementById('typing-area');
        const instructionText = document.getElementById('instruction-text');
        if (typingArea) {
            typingArea.className = 'typing-area text-small';
        }
        if (instructionText) {
            instructionText.className = 'instruction-text text-small';
        }
        textSmallBtn.classList.add('active');
        textMediumBtn.classList.remove('active');
        textLargeBtn.classList.remove('active');
    });
}

if (textMediumBtn) {
    textMediumBtn.addEventListener('click', () => {
        const typingArea = document.getElementById('typing-area');
        const instructionText = document.getElementById('instruction-text');
        if (typingArea) {
            typingArea.className = 'typing-area text-medium';
        }
        if (instructionText) {
            instructionText.className = 'instruction-text text-medium';
        }
        textMediumBtn.classList.add('active');
        textSmallBtn.classList.remove('active');
        textLargeBtn.classList.remove('active');
    });
}

if (textLargeBtn) {
    textLargeBtn.addEventListener('click', () => {
        const typingArea = document.getElementById('typing-area');
        const instructionText = document.getElementById('instruction-text');
        if (typingArea) {
            typingArea.className = 'typing-area text-large';
        }
        if (instructionText) {
            instructionText.className = 'instruction-text text-large';
        }
        textLargeBtn.classList.add('active');
        textSmallBtn.classList.remove('active');
        textMediumBtn.classList.remove('active');
    });
}

// Keyboard display toggle - FIXED: Only toggle visibility, don't re-render
if (keyboardToggleBtn) {
    keyboardToggleBtn.addEventListener('click', () => {
        if (keyboardContainer) {
            const isVisible = keyboardContainer.style.display !== 'none';
            keyboardContainer.style.display = isVisible ? 'none' : 'block';
            keyboardToggleBtn.textContent = isVisible ? 'OFF' : 'ON';
            keyboardToggleBtn.classList.toggle('off', isVisible);
            // Don't call renderKeyboard() here - that was causing the bug!
        }
    });
}

function renderTypingArea() {
    typingArea.innerHTML = '';
    for (let i = 0; i < currentText.length; i++) {
        const span = document.createElement('span');
        span.textContent = currentText[i];
        span.className = 'char';
        if (currentText[i] === ' ') {
            span.classList.add('space');
        }
        if (i === 0) span.classList.add('current');
        typingArea.appendChild(span);
    }
}

function handleInput(e) {
    if (!isTyping) return;
    if (['Shift', 'Control', 'Alt', 'CapsLock', 'Tab'].includes(e.key)) return;

    if (!startTime) startTime = new Date();
    totalKeystrokes++;

    const targetChar = currentText[currentIndex];
    const typedChar = e.key;

    animateKey(typedChar);

    if (typedChar === targetChar) {
        if (typingArea.style.display !== 'none') {
            const charSpan = typingArea.children[currentIndex];
            charSpan.classList.remove('current', 'incorrect');
            charSpan.classList.add('correct');
        }
        if (soundEnabled) playSound('click');
    } else {
        if (typingArea.style.display !== 'none') {
            const charSpan = typingArea.children[currentIndex];
            charSpan.classList.remove('current'); // Remove cursor from current
            charSpan.classList.add('incorrect');
        }
        if (soundEnabled) playSound('error');
        mistakes++;
    }

    // ALWAYS advance to next character (Non-blocking)
    currentIndex++;
    updateStatsDisplay();

    if (currentIndex >= currentText.length) {
        isTyping = false;
        setTimeout(() => {
            currentStepIndex++;
            loadStep();
        }, 200);
    } else {
        if (typingArea.style.display !== 'none') {
            typingArea.children[currentIndex].classList.add('current');

            // Auto-scroll logic
            const currentSpan = typingArea.children[currentIndex];
            if (currentSpan.offsetTop > typingArea.scrollTop + typingArea.clientHeight - 50) {
                typingArea.scrollTop = currentSpan.offsetTop - 50;
            }
        }
        highlightKey(currentText[currentIndex]);
    }
}

const keyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Space']
];

function renderKeyboard() {
    if (!keyboardContainer) return;
    keyboardContainer.innerHTML = '';

    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.textContent = key === 'Space' ? '' : key;
            keyDiv.dataset.key = key.toLowerCase();

            if (key === 'Space') keyDiv.classList.add('space');
            if (key === 'Shift') keyDiv.classList.add('shift');
            if (key === 'Enter') keyDiv.classList.add('enter');
            if (key === 'Backspace') keyDiv.classList.add('backspace');
            if (key === 'Tab') keyDiv.classList.add('tab');
            if (key === 'Caps') keyDiv.classList.add('caps');

            rowDiv.appendChild(keyDiv);
        });

        keyboardContainer.appendChild(rowDiv);
    });
}

function highlightKey(char) {
    document.querySelectorAll('.key').forEach(k => k.classList.remove('guide'));

    let keySelector = char.toLowerCase();
    if (char === ' ') keySelector = 'space';
    if (['.', ',', ';', "'", '/', '[', ']', '\\', '-', '=', '`'].includes(char)) {
        // Handle special chars if needed, for now basic support
    }

    const keyDiv = document.querySelector(`.key[data-key="${keySelector}"]`);
    if (keyDiv) {
        keyDiv.classList.add('guide');
    }
}

function animateKey(char) {
    let keySelector = char.toLowerCase();
    if (char === ' ') keySelector = 'space';

    const keyDiv = document.querySelector(`.key[data-key="${keySelector}"]`);
    if (keyDiv) {
        keyDiv.classList.add('active');
        setTimeout(() => keyDiv.classList.remove('active'), 100);
    }
}

function playSound(type) {
    // Placeholder for sound functionality
    // In a real implementation, this would play audio files
    // console.log(`Playing sound: ${type}`);

    // Optional: Simple beep using AudioContext if desired, but for now just preventing crash is priority.
}

document.addEventListener('DOMContentLoaded', initGame);
