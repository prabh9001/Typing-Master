
// Lessons data - use window.lessons if already set (for Hindi/Punjabi), otherwise default to English
let lessons = window.lessons || [
    {
        id: 1,
        title: "Hand Positioning",
        steps: [
            { type: 'instruction', text: "Place your left fingers on A S D F and right fingers on J K L ;. These are the home row keys.", key: 'f', hand: 'left', finger: 'index' },
            { type: 'instruction', text: "Your index fingers should rest on F and J. Feel the small bumps on these keys.", key: 'j', hand: 'right', finger: 'index' },
            { type: 'instruction', text: "Keep your fingers curved and wrists straight. Return to home row after each key press.", key: 'f', hand: 'left', finger: 'index' },
            { type: 'practice', text: "f j f j f j" }
        ]
    },
    {
        id: 2,
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
        id: 3,
        title: "F & J Practice",
        steps: [
            { type: 'practice', text: "ffff jjjj ffff jjjj" },
            { type: 'practice', text: "ffjj jjff ffjj jjff" },
            { type: 'practice', text: "fjfj jfjf fjfj jfjf" },
            { type: 'practice', text: "jfjf fjfj fff jjj" }
        ]
    },
    {
        id: 4,
        title: "D & K Keys",
        steps: [
            { type: 'instruction', text: "Type the d key (left middle) and k key (right middle).", key: 'd', hand: 'left', finger: 'middle' },
            { type: 'practice', text: "dddd kkkk" },
            { type: 'practice', text: "dkdk kdkd" },
            { type: 'practice', text: "ddkk kkdd" }
        ]
    },
    {
        id: 5,
        title: "S & L Keys",
        steps: [
            { type: 'instruction', text: "Type the s key (left ring) and l key (right ring).", key: 's', hand: 'left', finger: 'ring' },
            { type: 'practice', text: "ssss llll" },
            { type: 'practice', text: "slsl lsls" },
            { type: 'practice', text: "ssll llss" }
        ]
    },
    {
        id: 6,
        title: "A & ; Keys",
        steps: [
            { type: 'instruction', text: "Type the a key (left pinky) and ; key (right pinky).", key: 'a', hand: 'left', finger: 'pinky' },
            { type: 'practice', text: "aaaa ;;;;" },
            { type: 'practice', text: "a;a; ;a;a" },
            { type: 'practice', text: "aa;; ;;aa" }
        ]
    },
    {
        id: 7,
        title: "G & H Keys",
        steps: [
            { type: 'instruction', text: "Reach with your index fingers to type g (left) and h (right).", key: 'g', hand: 'left', finger: 'index' },
            { type: 'practice', text: "gggg hhhh" },
            { type: 'practice', text: "ghgh hghg" },
            { type: 'practice', text: "fghj jhgf" }
        ]
    },
    {
        id: 8,
        title: "Home Row Complete",
        steps: [
            { type: 'practice', text: "asdfghjkl;" },
            { type: 'practice', text: "dad has a salad" },
            { type: 'practice', text: "ask a sad lad" },
            { type: 'practice', text: "all fall" }
        ]
    },
    {
        id: 9,
        title: "R & U Keys",
        steps: [
            { type: 'instruction', text: "Reach up with your index fingers: R (left) and U (right).", key: 'r', hand: 'left', finger: 'index' },
            { type: 'practice', text: "rrrr uuuu" },
            { type: 'practice', text: "ruru urur" },
            { type: 'practice', text: "run rug urn" }
        ]
    },
    {
        id: 10,
        title: "E & I Keys",
        steps: [
            { type: 'instruction', text: "Reach up with your middle fingers: E (left) and I (right).", key: 'e', hand: 'left', finger: 'middle' },
            { type: 'practice', text: "eeee iiii" },
            { type: 'practice', text: "eiei ieie" },
            { type: 'practice', text: "did kid lie" }
        ]
    },
    {
        id: 11,
        title: "W & O Keys",
        steps: [
            { type: 'instruction', text: "Reach up with your ring fingers: W (left) and O (right).", key: 'w', hand: 'left', finger: 'ring' },
            { type: 'practice', text: "wwww oooo" },
            { type: 'practice', text: "wowo owow" },
            { type: 'practice', text: "wow owl low" }
        ]
    },
    {
        id: 12,
        title: "Q & P Keys",
        steps: [
            { type: 'instruction', text: "Reach up with your pinky fingers: Q (left) and P (right).", key: 'q', hand: 'left', finger: 'pinky' },
            { type: 'practice', text: "qqqq pppp" },
            { type: 'practice', text: "qpqp pqpq" },
            { type: 'practice', text: "quit pop up" }
        ]
    },
    {
        id: 13,
        title: "T & Y Keys",
        steps: [
            { type: 'instruction', text: "Stretch your index fingers to reach T (left) and Y (right).", key: 't', hand: 'left', finger: 'index' },
            { type: 'practice', text: "tttt yyyy" },
            { type: 'practice', text: "tyty ytyt" },
            { type: 'practice', text: "try toy yet" }
        ]
    },
    {
        id: 14,
        title: "Top Row Complete",
        steps: [
            { type: 'practice', text: "qwertyuiop" },
            { type: 'practice', text: "poiuytrewq" },
            { type: 'practice', text: "the quick brown fox" },
            { type: 'practice', text: "write your report" }
        ]
    },
    {
        id: 15,
        title: "V & M Keys",
        steps: [
            { type: 'instruction', text: "Reach down with your index fingers: V (left) and M (right).", key: 'v', hand: 'left', finger: 'index' },
            { type: 'practice', text: "vvvv mmmm" },
            { type: 'practice', text: "vmvm mvmv" },
            { type: 'practice', text: "van man mom" }
        ]
    },
    {
        id: 16,
        title: "C & , Keys",
        steps: [
            { type: 'instruction', text: "Reach down with your middle fingers: C (left) and , (right).", key: 'c', hand: 'left', finger: 'middle' },
            { type: 'practice', text: "cccc ,,,," },
            { type: 'practice', text: "c,c, ,c,c" },
            { type: 'practice', text: "car, cat, cut," }
        ]
    },
    {
        id: 17,
        title: "X & . Keys",
        steps: [
            { type: 'instruction', text: "Reach down with your ring fingers: X (left) and . (right).", key: 'x', hand: 'left', finger: 'ring' },
            { type: 'practice', text: "xxxx ...." },
            { type: 'practice', text: "x.x. .x.x" },
            { type: 'practice', text: "six. box. fox." }
        ]
    },
    {
        id: 18,
        title: "Z & / Keys",
        steps: [
            { type: 'instruction', text: "Reach down with your pinky fingers: Z (left) and / (right).", key: 'z', hand: 'left', finger: 'pinky' },
            { type: 'practice', text: "zzzz ////" },
            { type: 'practice', text: "z/z/ /z/z" },
            { type: 'practice', text: "zoo/ zip/ zap/" }
        ]
    },
    {
        id: 19,
        title: "B & N Keys",
        steps: [
            { type: 'instruction', text: "Stretch your index fingers down to reach B (left) and N (right).", key: 'b', hand: 'left', finger: 'index' },
            { type: 'practice', text: "bbbb nnnn" },
            { type: 'practice', text: "bnbn nbnb" },
            { type: 'practice', text: "ban bun nun" }
        ]
    },
    {
        id: 20,
        title: "Bottom Row Complete",
        steps: [
            { type: 'practice', text: "zxcvbnm,./" },
            { type: 'practice', text: "man can van" },
            { type: 'practice', text: "mix six box" },
            { type: 'practice', text: "zip zap zoo" }
        ]
    },
    {
        id: 21,
        title: "Full Keyboard Practice",
        steps: [
            { type: 'practice', text: "the quick brown fox jumps over the lazy dog" },
            { type: 'practice', text: "pack my box with five dozen liquor jugs" },
            { type: 'practice', text: "sphinx of black quartz judge my vow" },
            { type: 'practice', text: "typing is a skill that improves with daily practice" }
        ]
    },
    {
        id: 22,
        title: "Paragraph Practice 1",
        steps: [
            { type: 'practice', text: "The quick brown fox jumps over the lazy dog." },
            { type: 'practice', text: "Practice makes perfect. Keep typing every day." },
            { type: 'practice', text: "Learning to type fast takes time and patience." }
        ]
    },
    {
        id: 23,
        title: "Paragraph Practice 2",
        steps: [
            { type: 'practice', text: "The sun rises in the east and sets in the west." },
            { type: 'practice', text: "Birds sing in the morning. Flowers bloom in spring." },
            { type: 'practice', text: "Reading books helps you learn new things every day." }
        ]
    },
    {
        id: 24,
        title: "Short Stories",
        steps: [
            { type: 'practice', text: "Once upon a time, there was a small village by the sea." },
            { type: 'practice', text: "The children played on the beach every summer afternoon." },
            { type: 'practice', text: "They built sandcastles and collected colorful shells." }
        ]
    },
    {
        id: 25,
        title: "Daily Practice",
        steps: [
            { type: 'practice', text: "Today is a good day to practice typing skills." },
            { type: 'practice', text: "Start slowly and increase your speed over time." },
            { type: 'practice', text: "Focus on accuracy first, then work on speed." },
            { type: 'practice', text: "Remember to take breaks and stretch your fingers." }
        ]
    },
    {
        id: 26,
        title: "Numbers 1-5",
        steps: [
            { type: 'practice', text: "111 222 333 444 555" },
            { type: 'practice', text: "12 23 34 45 51" },
            { type: 'practice', text: "123 234 345 451 512" }
        ]
    },
    {
        id: 27,
        title: "Numbers 6-0",
        steps: [
            { type: 'practice', text: "666 777 888 999 000" },
            { type: 'practice', text: "67 78 89 90 06" },
            { type: 'practice', text: "678 789 890 901 012" }
        ]
    },
    {
        id: 28,
        title: "Full Number Practice",
        steps: [
            { type: 'practice', text: "1234567890 0987654321" },
            { type: 'practice', text: "Call me at 555-1234" },
            { type: 'practice', text: "The year 2024 is here" }
        ]
    },
    {
        id: 29,
        title: "Basic Punctuation",
        steps: [
            { type: 'practice', text: "Hello, how are you?" },
            { type: 'practice', text: "Yes! That's great." },
            { type: 'practice', text: "Wait... I think so." }
        ]
    },
    {
        id: 30,
        title: "Email & Web",
        steps: [
            { type: 'practice', text: "user@email.com" },
            { type: 'practice', text: "www.example.com" },
            { type: 'practice', text: "Send me an email at hello@website.org" }
        ]
    },
    {
        id: 31,
        title: "Common Words 1",
        steps: [
            { type: 'practice', text: "the and for you that with this" },
            { type: 'practice', text: "have from they will what been more" },
            { type: 'practice', text: "when there time which their" }
        ]
    },
    {
        id: 32,
        title: "Common Words 2",
        steps: [
            { type: 'practice', text: "about know than call find give" },
            { type: 'practice', text: "work first over such because" },
            { type: 'practice', text: "through just where most also people" }
        ]
    },
    {
        id: 33,
        title: "Greetings",
        steps: [
            { type: 'practice', text: "Hello! How are you today?" },
            { type: 'practice', text: "Good morning! Have a great day." },
            { type: 'practice', text: "Nice to meet you. Welcome!" }
        ]
    },
    {
        id: 34,
        title: "Questions",
        steps: [
            { type: 'practice', text: "What is your name?" },
            { type: 'practice', text: "Where do you live?" },
            { type: 'practice', text: "How can I help you?" }
        ]
    },
    {
        id: 35,
        title: "Short Answers",
        steps: [
            { type: 'practice', text: "Yes, I agree." },
            { type: 'practice', text: "No, thank you." },
            { type: 'practice', text: "Maybe later." }
        ]
    },
    {
        id: 36,
        title: "Days of Week",
        steps: [
            { type: 'practice', text: "Monday Tuesday Wednesday" },
            { type: 'practice', text: "Thursday Friday Saturday Sunday" },
            { type: 'practice', text: "See you on Monday!" }
        ]
    },
    {
        id: 37,
        title: "Months",
        steps: [
            { type: 'practice', text: "January February March April" },
            { type: 'practice', text: "May June July August" },
            { type: 'practice', text: "September October November December" }
        ]
    },
    {
        id: 38,
        title: "Colors",
        steps: [
            { type: 'practice', text: "red blue green yellow orange" },
            { type: 'practice', text: "purple pink brown black white" },
            { type: 'practice', text: "The blue sky and green grass" }
        ]
    },
    {
        id: 39,
        title: "Food Words",
        steps: [
            { type: 'practice', text: "apple banana orange grape" },
            { type: 'practice', text: "bread cheese milk water coffee" },
            { type: 'practice', text: "I love pizza and ice cream" }
        ]
    },
    {
        id: 40,
        title: "Animals",
        steps: [
            { type: 'practice', text: "dog cat bird fish horse" },
            { type: 'practice', text: "lion tiger elephant monkey" },
            { type: 'practice', text: "The cat sleeps on the bed" }
        ]
    },
    {
        id: 41,
        title: "Family Words",
        steps: [
            { type: 'practice', text: "mother father sister brother" },
            { type: 'practice', text: "grandmother grandfather aunt uncle" },
            { type: 'practice', text: "My family is very important to me" }
        ]
    },
    {
        id: 42,
        title: "Weather",
        steps: [
            { type: 'practice', text: "sunny cloudy rainy windy snowy" },
            { type: 'practice', text: "The weather is nice today" },
            { type: 'practice', text: "It might rain tomorrow afternoon" }
        ]
    },
    {
        id: 43,
        title: "Office Terms",
        steps: [
            { type: 'practice', text: "meeting report deadline project" },
            { type: 'practice', text: "email schedule conference client" },
            { type: 'practice', text: "Please send the report by Friday" }
        ]
    },
    {
        id: 44,
        title: "Travel Words",
        steps: [
            { type: 'practice', text: "airport hotel ticket passport" },
            { type: 'practice', text: "flight train bus car taxi" },
            { type: 'practice', text: "I need to pack my suitcase" }
        ]
    },
    {
        id: 45,
        title: "Technology",
        steps: [
            { type: 'practice', text: "computer mouse keyboard screen" },
            { type: 'practice', text: "phone tablet internet wifi" },
            { type: 'practice', text: "Download the app on your smartphone" }
        ]
    },
    {
        id: 46,
        title: "Education",
        steps: [
            { type: 'practice', text: "school teacher student homework" },
            { type: 'practice', text: "book test grade class subject" },
            { type: 'practice', text: "Study hard and you will succeed" }
        ]
    },
    {
        id: 47,
        title: "Sports",
        steps: [
            { type: 'practice', text: "football basketball tennis soccer" },
            { type: 'practice', text: "swimming running cycling" },
            { type: 'practice', text: "Exercise is good for your health" }
        ]
    },
    {
        id: 48,
        title: "Shopping",
        steps: [
            { type: 'practice', text: "store shop buy sell price" },
            { type: 'practice', text: "money cash card receipt" },
            { type: 'practice', text: "How much does this cost?" }
        ]
    },
    {
        id: 49,
        title: "Cooking",
        steps: [
            { type: 'practice', text: "cook bake fry boil mix" },
            { type: 'practice', text: "knife spoon fork plate bowl" },
            { type: 'practice', text: "Add salt and pepper to taste" }
        ]
    },
    {
        id: 50,
        title: "Health",
        steps: [
            { type: 'practice', text: "doctor hospital medicine healthy" },
            { type: 'practice', text: "exercise sleep diet vitamins" },
            { type: 'practice', text: "Take care of your body and mind" }
        ]
    },
    {
        id: 51,
        title: "Nature",
        steps: [
            { type: 'practice', text: "tree flower garden forest mountain" },
            { type: 'practice', text: "river lake ocean beach island" },
            { type: 'practice', text: "Nature is beautiful and peaceful" }
        ]
    },
    {
        id: 52,
        title: "Time Expressions",
        steps: [
            { type: 'practice', text: "today tomorrow yesterday now" },
            { type: 'practice', text: "morning afternoon evening night" },
            { type: 'practice', text: "See you at three o'clock" }
        ]
    },
    {
        id: 53,
        title: "Directions",
        steps: [
            { type: 'practice', text: "left right forward backward" },
            { type: 'practice', text: "north south east west" },
            { type: 'practice', text: "Turn left at the next corner" }
        ]
    },
    {
        id: 54,
        title: "Emotions",
        steps: [
            { type: 'practice', text: "happy sad angry excited worried" },
            { type: 'practice', text: "tired proud nervous confident" },
            { type: 'practice', text: "I feel great today!" }
        ]
    },
    {
        id: 55,
        title: "Actions",
        steps: [
            { type: 'practice', text: "walk run jump sit stand" },
            { type: 'practice', text: "read write speak listen think" },
            { type: 'practice', text: "Please sit down and relax" }
        ]
    },
    {
        id: 56,
        title: "Descriptions",
        steps: [
            { type: 'practice', text: "big small tall short wide" },
            { type: 'practice', text: "fast slow hot cold new old" },
            { type: 'practice', text: "The old tree is very tall" }
        ]
    },
    {
        id: 57,
        title: "Social Media",
        steps: [
            { type: 'practice', text: "post like share comment follow" },
            { type: 'practice', text: "hashtag mention profile story" },
            { type: 'practice', text: "Check your notifications" }
        ]
    },
    {
        id: 58,
        title: "Music",
        steps: [
            { type: 'practice', text: "song music play listen dance" },
            { type: 'practice', text: "guitar piano drum voice" },
            { type: 'practice', text: "Music makes life better" }
        ]
    },
    {
        id: 59,
        title: "Books & Reading",
        steps: [
            { type: 'practice', text: "book novel story chapter page" },
            { type: 'practice', text: "read write author library" },
            { type: 'practice', text: "Reading is a great habit" }
        ]
    },
    {
        id: 60,
        title: "Movies & TV",
        steps: [
            { type: 'practice', text: "movie film show series episode" },
            { type: 'practice', text: "watch actor director scene" },
            { type: 'practice', text: "Let's watch a movie tonight" }
        ]
    },
    {
        id: 61,
        title: "Hobbies",
        steps: [
            { type: 'practice', text: "hobby painting drawing photography" },
            { type: 'practice', text: "gardening cooking gaming reading" },
            { type: 'practice', text: "What are your hobbies?" }
        ]
    },
    {
        id: 62,
        title: "Relationships",
        steps: [
            { type: 'practice', text: "friend friendship love trust respect" },
            { type: 'practice', text: "help support care understand" },
            { type: 'practice', text: "Good friends are precious" }
        ]
    },
    {
        id: 63,
        title: "Work & Career",
        steps: [
            { type: 'practice', text: "job work career professional" },
            { type: 'practice', text: "salary office employee manager" },
            { type: 'practice', text: "Hard work leads to success" }
        ]
    },
    {
        id: 64,
        title: "Money & Finance",
        steps: [
            { type: 'practice', text: "money budget save invest spend" },
            { type: 'practice', text: "bank account credit payment" },
            { type: 'practice', text: "Save money for the future" }
        ]
    },
    {
        id: 65,
        title: "Geography",
        steps: [
            { type: 'practice', text: "country city town village capital" },
            { type: 'practice', text: "continent ocean desert valley" },
            { type: 'practice', text: "Paris is the capital of France" }
        ]
    },
    {
        id: 66,
        title: "Science",
        steps: [
            { type: 'practice', text: "experiment research discover study" },
            { type: 'practice', text: "atom molecule chemical biology" },
            { type: 'practice', text: "Science explains how things work" }
        ]
    },
    {
        id: 67,
        title: "History",
        steps: [
            { type: 'practice', text: "history past ancient modern century" },
            { type: 'practice', text: "king queen empire battle war" },
            { type: 'practice', text: "Learning history is important" }
        ]
    },
    {
        id: 68,
        title: "Art",
        steps: [
            { type: 'practice', text: "art paint draw sketch color" },
            { type: 'practice', text: "canvas brush museum gallery" },
            { type: 'practice', text: "Art expresses creativity" }
        ]
    },
    {
        id: 69,
        title: "Religion & Culture",
        steps: [
            { type: 'practice', text: "culture tradition festival celebrate" },
            { type: 'practice', text: "belief faith prayer temple church" },
            { type: 'practice', text: "Respect all cultures and beliefs" }
        ]
    },
    {
        id: 70,
        title: "Law & Government",
        steps: [
            { type: 'practice', text: "law rule government president" },
            { type: 'practice', text: "rights freedom justice court" },
            { type: 'practice', text: "Everyone has equal rights" }
        ]
    },
    {
        id: 71,
        title: "Environment",
        steps: [
            { type: 'practice', text: "environment nature pollution climate" },
            { type: 'practice', text: "recycle reduce reuse protect" },
            { type: 'practice', text: "Save the planet for future generations" }
        ]
    },
    {
        id: 72,
        title: "Motivational Quotes",
        steps: [
            { type: 'practice', text: "Believe in yourself and you will succeed." },
            { type: 'practice', text: "Every day is a new opportunity." },
            { type: 'practice', text: "Dream big and work hard." }
        ]
    },
    {
        id: 73,
        title: "Famous Sayings",
        steps: [
            { type: 'practice', text: "Knowledge is power." },
            { type: 'practice', text: "Time is money." },
            { type: 'practice', text: "Practice makes perfect." }
        ]
    },
    {
        id: 74,
        title: "Business Email",
        steps: [
            { type: 'practice', text: "Dear Sir or Madam," },
            { type: 'practice', text: "Thank you for your email." },
            { type: 'practice', text: "Looking forward to hearing from you." },
            { type: 'practice', text: "Best regards," }
        ]
    },
    {
        id: 75,
        title: "Speed Master",
        steps: [
            { type: 'practice', text: "Type as fast as you can without mistakes." },
            { type: 'practice', text: "Speed and accuracy go hand in hand." },
            { type: 'practice', text: "You have completed all lessons! Congratulations!" }
        ]
    },
    {
        id: 76,
        title: "100 Word Paragraph",
        steps: [
            { type: 'practice', text: "Technology has transformed the way we live and work in the modern world. The internet connects people from all over the globe, allowing instant communication and access to vast amounts of information. Smartphones have become essential tools for daily life, helping us navigate, shop, and stay in touch with friends and family. Education has also evolved significantly, with online courses making learning accessible to everyone regardless of their location. However, it is important to balance screen time with outdoor activities to maintain physical health. Nature offers a peaceful escape from the digital world, allowing us to recharge. Reading books, exercising, and spending quality time with loved ones are valuable ways to disconnect. Embracing technology while maintaining a healthy lifestyle is key to a balanced future." }
        ]
    },
    {
        id: 77,
        title: "200 Word Paragraph",
        steps: [
            { type: 'practice', text: "The importance of environmental conservation cannot be overstated in today's rapidly changing world. Our planet provides us with essential resources like air, water, and food, which are the foundation of all life. However, human activities such as deforestation, industrial pollution, and overconsumption are threatening these vital resources. Climate change is a major global issue, leading to extreme weather events, rising sea levels, and the loss of biodiversity. It is crucial for individuals, communities, and governments to take immediate action to mitigate these effects. Recycling, reducing plastic waste, and transitioning to renewable energy sources like solar and wind power are effective ways to protect the environment. Planting trees and supporting wildlife conservation efforts also play a significant role in restoring ecological balance. Education is vital in raising awareness about environmental issues and inspiring the younger generation to become stewards of the earth. Schools and communities should promote sustainable practices such as composting and water conservation. Simple changes in our daily habits, such as using public transport, conserving electricity, and reducing food waste, can make a collective difference. We must act now to ensure a healthy and habitable planet for future generations. Protecting nature is not just a responsibility; it is a necessity for our survival." }
        ]
    },
    {
        id: 78,
        title: "300 Word Paragraph",
        steps: [
            { type: 'practice', text: "Reading is one of the most beneficial habits a person can develop, offering a multitude of advantages for the mind and soul. It opens up new worlds and expands our understanding of life, allowing us to travel to distant lands, explore different cultures, and experience history without leaving our chairs. Reading improves vocabulary and language skills, making us better communicators and more articulate speakers. It also enhances concentration and focus, which are essential skills in today's fast-paced, distraction-filled world. Fiction books stimulate imagination and empathy, allowing us to step into the shoes of different characters and understand their emotions and perspectives. Non-fiction books provide valuable knowledge and insights into various subjects, from science and history to philosophy and self-improvement. In addition to mental benefits, reading is a great way to relax and reduce stress. Getting lost in a good story can be a wonderful escape from daily worries and a source of comfort. It is important to encourage children to read from a young age, as it fosters a lifelong love for learning and curiosity. Bedtime stories and regular visits to the library can create cherished memories and instill a reading habit. In the digital age, e-books and audiobooks have made reading more accessible and convenient than ever before. However, the tactile experience of holding a physical book and turning the pages remains special for many readers. Whether you prefer mystery, romance, science fiction, or biography, there is a book out there for everyone. Setting aside a few minutes each day to read can have a profound positive impact on your mental well-being. It keeps the brain active, healthy, and engaged. So, pick up a book today and start a new adventure. The knowledge, wisdom, and joy gained from reading are truly priceless treasures that stay with us forever." }
        ]
    },
    {
        id: 79,
        title: "500 Word Paragraph",
        steps: [
            { type: 'practice', text: "Success is a multifaceted concept that means different things to different people. For some, it is measured by material wealth, professional achievements, and social status, while for others, it is defined by happiness, good health, and strong, loving relationships. Regardless of the personal definition, achieving success typically requires a combination of dedication, hard work, resilience, and a positive mindset. Setting clear, achievable goals is the first and most critical step towards success. When you have a clear vision of what you want to achieve, you can create a roadmap and take consistent, purposeful action. It is important to stay focused and motivated, even when facing inevitable challenges and setbacks. Failure is often an integral part of the journey to success, serving as a powerful teacher. Instead of being discouraged by failures, successful people view them as valuable learning opportunities and stepping stones to growth. Resilience and perseverance are key qualities that distinguish successful individuals. They do not give up easily and keep pushing forward despite obstacles and rejection. Continuous learning and self-improvement are also essential components of success. The world is constantly evolving, and acquiring new skills and knowledge helps you stay relevant, adaptable, and competitive. Networking and building strong professional relationships can open doors to new opportunities and collaborations. Surrounding yourself with supportive, positive, and inspiring people can boost your confidence and keep you motivated during difficult times. Time management is another crucial factor in achieving success. Prioritizing tasks, setting deadlines, and using time effectively allows you to be more productive and achieve more in less time. However, maintaining a healthy work-life balance is equally important to prevent burnout and ensure long-term well-being. Taking care of your physical and mental health ensures that you have the energy and clarity to pursue your goals with vigor. Success is not a destination but a continuous journey of growth and self-discovery. It is about striving to become the best version of yourself and making a positive impact on the world. Celebrating small victories along the way keeps you motivated and reinforces your progress. It is also important to practice gratitude and appreciate what you have while striving for more. Helping others and giving back to the community can bring a deep sense of fulfillment and purpose that material success alone cannot provide. True success is holistic, encompassing professional achievements, personal happiness, and contribution to society. Everyone has the potential to be successful in their own unique way. It starts with believing in yourself and your abilities. With passion, discipline, and determination, you can turn your dreams into reality. Remember that success is a personal journey, so define it on your own terms, stay true to your values, and enjoy the process of becoming the person you aspire to be. Your unique path to success is waiting for you to explore and conquer." }
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
let lastKeystrokeTime = null;
let activeTypingTime = 0; // Accumulated time in milliseconds when actively typing
let statsUpdateInterval = null; // For real-time WPM updates

// WPM Smoothing variables
let smoothedWPM = 0; // Current smoothed WPM value
let rawWPM = 0; // Current raw WPM calculation
const WPM_SMOOTHING_FACTOR = 0.15; // Lower = more stable, Higher = more responsive (0.1-0.3 recommended)

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
const timerDisplay = document.getElementById('timer-display');

function initGame() {
    if (!gameArea) return;

    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    if (lessonParam) {
        // Support both numeric and string IDs (for Hindi/Punjabi lessons)
        if (isNaN(lessonParam)) {
            currentLessonId = lessonParam; // String ID like 'hindi_1'
        } else {
            currentLessonId = parseInt(lessonParam); // Numeric ID like 1
        }
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

    // Reset timer for new lesson
    startTime = null;
    lastKeystrokeTime = null;
    activeTypingTime = 0;

    loadStep();
}

function loadStep() {
    if (currentStepIndex >= currentLesson.steps.length) {
        showLessonComplete();
        return;
    }

    const step = currentLesson.steps[currentStepIndex];
    currentIndex = 0;
    // Don't reset timer - it continues across steps in the same lesson
    isTyping = true;

    // Reset WPM smoothing for new step
    smoothedWPM = 0;
    rawWPM = 0;

    // Clear any existing interval
    if (statsUpdateInterval) {
        clearInterval(statsUpdateInterval);
    }

    // Start real-time stats update (updates every 10ms for instant response)
    statsUpdateInterval = setInterval(updateStatsDisplay, 10);

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
        // Normalize text to NFD (Canonical Decomposition) for consistent Unicode handling
        // This splits precomposed characters (like 'क़') into Base + Mark, requiring user to type both keys
        currentText = step.text.normalize('NFD');
        renderTypingArea();
        highlightKey(currentText[0]);
        if (skipBtn) skipBtn.textContent = "Next";

        // Start timer when practice typing begins (only if not already started)
        if (!startTime) {
            const now = new Date();
            startTime = now;
            lastKeystrokeTime = now;
        }
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

    const now = new Date();
    let effectiveTypingTime = activeTypingTime; // Start with accumulated active typing time

    // If user is currently in a gap (not typing), add the current idle time
    // This makes WPM decrease in real-time when user stops
    if (lastKeystrokeTime) {
        const timeSinceLastKeystroke = now - lastKeystrokeTime;
        const maxGapBeforePenalty = 2000; // 2 seconds grace period

        // Add idle time beyond grace period to effective typing time
        // This increases the denominator, reducing WPM
        if (timeSinceLastKeystroke > maxGapBeforePenalty) {
            effectiveTypingTime += timeSinceLastKeystroke;
        } else {
            // Within grace period, only add the actual time elapsed
            effectiveTypingTime += timeSinceLastKeystroke;
        }
    }

    // Calculate WPM based on TOTAL characters typed (not just correct ones)
    // Formula: WPM = (Total characters typed / 5) ÷ Time in minutes
    const timeInMinutes = effectiveTypingTime / 60000;

    // Use currentIndex which represents total characters typed
    rawWPM = timeInMinutes > 0
        ? Math.round((currentIndex / 5) / timeInMinutes)
        : 0;

    // Apply exponential smoothing to WPM for stability
    // Formula: smoothed = (alpha * raw) + ((1 - alpha) * previousSmoothed)
    // This prevents wild fluctuations while still being responsive
    if (smoothedWPM === 0) {
        // First calculation, use raw value
        smoothedWPM = rawWPM;
    } else {
        // Apply smoothing
        smoothedWPM = (WPM_SMOOTHING_FACTOR * rawWPM) + ((1 - WPM_SMOOTHING_FACTOR) * smoothedWPM);
    }

    // Calculate accuracy based on correct vs total characters attempted
    // This is more accurate than keystroke-based calculation
    const accuracy = currentIndex > 0
        ? Math.round(((currentIndex - mistakes) / currentIndex) * 100)
        : 100;

    return { wpm: Math.max(0, Math.round(smoothedWPM)), accuracy: Math.max(0, accuracy) };
}

function updateStatsDisplay() {
    if (!wpmDisplay) return;
    const stats = calculateStats();
    wpmDisplay.textContent = stats.wpm;
    accuracyDisplay.textContent = `${stats.accuracy}%`;
    mistakesDisplay.textContent = mistakes;

    // Update timer display
    if (timerDisplay && startTime) {
        const now = new Date();
        const elapsedMs = now - startTime;
        const elapsedSeconds = Math.floor(elapsedMs / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else if (timerDisplay) {
        timerDisplay.textContent = '0:00';
    }
}

function showLessonComplete() {
    isTyping = false;

    // Clear the stats update interval
    if (statsUpdateInterval) {
        clearInterval(statsUpdateInterval);
        statsUpdateInterval = null;
    }

    const stats = calculateStats();

    // Calculate total time
    let timeText = '0:00';
    if (startTime) {
        const elapsedMs = new Date() - startTime;
        const elapsedSeconds = Math.floor(elapsedMs / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        timeText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Save stats to sessionStorage
    saveLessonHistory(currentLessonId, stats.wpm, stats.accuracy, mistakes);

    // Get username
    const userName = sessionStorage.getItem('userName') || 'Guest';

    // Generate compliment based on performance
    let compliment = '';
    if (stats.accuracy >= 95 && stats.wpm >= 40) {
        compliment = `Outstanding, ${userName}! You're a typing master! 🌟`;
    } else if (stats.accuracy >= 90 && stats.wpm >= 30) {
        compliment = `Excellent work, ${userName}! Keep it up! 🎯`;
    } else if (stats.accuracy >= 80) {
        compliment = `Great job, ${userName}! You're improving! 👏`;
    } else if (stats.accuracy >= 70) {
        compliment = `Good effort, ${userName}! Practice makes perfect! 💪`;
    } else {
        compliment = `Nice try, ${userName}! You'll get better with practice! 🚀`;
    }

    instructionText.style.display = 'block';
    typingArea.style.display = 'none';
    instructionText.innerHTML = `
        <div style="font-size: 2rem; color: var(--success-color); margin-bottom: 10px;">Lesson ${currentLessonId} Complete!</div>
        
        <div style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 30px; font-weight: 500;">${compliment}</div>
        
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
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">${timeText}</div>
                <div style="color: var(--text-secondary);">Time</div>
            </div>
        </div>

        <button onclick="goBackToLessons()" class="nav-btn" style="margin-top: 20px;">Back to Menu</button>
        <button onclick="nextLesson()" class="nav-btn" style="margin-top: 20px; background: var(--primary-color); color: white;">Next Lesson</button>
    `;
}

// Save lesson history to sessionStorage
function saveLessonHistory(lessonId, wpm, accuracy, mistakes) {
    let history = {};
    try {
        const stored = sessionStorage.getItem('lessonHistory');
        if (stored) {
            history = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Error reading lesson history:', e);
    }

    history[lessonId] = {
        wpm: wpm,
        accuracy: accuracy,
        mistakes: mistakes,
        date: new Date().toISOString()
    };

    try {
        sessionStorage.setItem('lessonHistory', JSON.stringify(history));
    } catch (e) {
        console.error('Error saving lesson history:', e);
    }
}

// Get lesson history from sessionStorage
function getLessonHistory(lessonId) {
    try {
        const stored = sessionStorage.getItem('lessonHistory');
        if (stored) {
            const history = JSON.parse(stored);
            return history[lessonId] || null;
        }
    } catch (e) {
        console.error('Error reading lesson history:', e);
    }
    return null;
}

function nextLesson() {
    // Handle both numeric and string IDs (for Hindi/Punjabi)
    let nextId;
    if (typeof currentLessonId === 'string') {
        // For Hindi/Punjabi: extract number and increment
        const match = currentLessonId.match(/(\w+)_(\d+)/);
        if (match) {
            const prefix = match[1]; // 'hindi' or 'punjabi'
            const num = parseInt(match[2]);
            nextId = `${prefix}_${num + 1}`;
        }
    } else {
        // For English: simple increment
        nextId = currentLessonId + 1;
    }

    const nextLessonExists = lessons.find(l => l.id === nextId);
    if (nextLessonExists) {
        currentLessonId = nextId;
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lesson', nextId);
        window.history.pushState({}, '', newUrl);
        loadLesson(nextId);
    } else {
        alert("You have completed all available lessons!");
        goBackToLessons();
    }
}

function goBackToLessons() {
    // Determine which lessons page to return to based on current lesson ID
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('lang') || 'english';

    if (language === 'hindi') {
        window.location.href = '../lessons_hindi.html';
    } else if (language === 'punjabi') {
        window.location.href = '../lessons_punjabi.html';
    } else {
        window.location.href = '../lessons.html';
    }
}


// Header Controls
const settingsBtn = document.querySelector('.header-controls .icon-btn:nth-child(1)'); // Updated since Home button removed

let soundEnabled = false; // Disabled by default since removed from UI

// Settings Modal Logic
const settingsModal = document.getElementById('settings-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Get setting buttons (removed sound, theme, and text size)
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

        // Identify combining marks
        if (/[\u093A-\u094F\u0901-\u0903\u093C\u0A3C-\u0A4D\u0A01-\u0A03\u0A70\u0A71]/.test(currentText[i])) {
            span.classList.add('combining-mark');
        }

        if (i === 0) span.classList.add('current');
        typingArea.appendChild(span);
    }
}

function handleInput(e) {
    // Keyboard Navigation
    if (e.key === 'Enter') {
        skipStep();
        return;
    }
    if (e.key === 'Shift') {
        previousStep();
        return;
    }

    if (!isTyping) return;
    if (['Control', 'Alt', 'CapsLock', 'Tab'].includes(e.key)) return;

    const now = new Date();

    // Track active typing time (timer already started when practice began)
    if (lastKeystrokeTime) {
        // Calculate time since last keystroke
        const timeSinceLastKey = now - lastKeystrokeTime;

        // Only add time to active typing if gap is reasonable (max 2 seconds)
        // This prevents long pauses from being counted as active typing time
        const maxGapToCount = 2000; // 2 seconds
        const timeToAdd = Math.min(timeSinceLastKey, maxGapToCount);

        activeTypingTime += timeToAdd;
    }
    lastKeystrokeTime = now;

    totalKeystrokes++;

    const targetChar = currentText[currentIndex];
    let typedChar = e.key;

    // KEYBOARD MAPPING LOGIC
    // If we are in a non-English mode, we map the English keystroke to the target language char
    // regardless of whether the user sent 'q' or 'औ'.
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'english';

    if (lang !== 'english' && languageMaps[lang]) {
        if (languageMaps[lang][e.key]) {
            // User typed English key (e.g. 'q'), we map it to 'औ'
            typedChar = languageMaps[lang][e.key];
        }
    }

    animateKey(e.key); // Animate the PHYSICAL key pressed (English key)

    // Normalize both characters to NFD (Decomposition) to ensure component-wise matching
    // This allows users to type components (Base + Nukta) and match against Precomposed targets which are decomposed here
    const normalizedTarget = targetChar.normalize('NFD');
    const normalizedTyped = typedChar.normalize('NFD');

    if (normalizedTyped === normalizedTarget) {
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

// Keyboard layouts for different languages
const keyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Space']
];

// Complete Inscript Mappings (Input & Visual)
const languageMaps = {
    hindi: {
        // Unshifted (Row 1)
        '`': 'ॆ', '1': '१', '2': '२', '3': '३', '4': '४', '5': '५', '6': '६', '7': '७', '8': '८', '9': '९', '0': '०', '-': '-', '=': 'ृ',
        // Unshifted (Row 2)
        'q': 'ौ', 'w': 'ै', 'e': 'ा', 'r': 'ी', 't': 'ू', 'y': 'ब', 'u': 'ह', 'i': 'ग', 'o': 'द', 'p': 'ज', '[': 'ड', ']': '़', '\\': 'ॊ',
        // Unshifted (Row 3)
        'a': 'ो', 's': 'े', 'd': '्', 'f': 'ि', 'g': 'ु', 'h': 'प', 'j': 'र', 'k': 'क', 'l': 'त', ';': 'च', "'": 'ट',
        // Unshifted (Row 4)
        'z': 'ॆ', 'x': 'ं', 'c': 'म', 'v': 'न', 'b': 'व', 'n': 'ल', 'm': 'स', ',': ',', '.': '.', '/': 'य',

        // Shifted (Row 1)
        '~': 'ॏ', '!': 'ॲ', '@': 'ॅ', '#': '्र', '$': 'र्', '%': 'ज्ञ', '^': 'त्र', '&': 'क्ष', '*': 'श्र', '(': '(', ')': ')', '_': 'ः', '+': 'ऋ',
        // Shifted (Row 2)
        'Q': 'औ', 'W': 'ऐ', 'E': 'आ', 'R': 'ई', 'T': 'ऊ', 'Y': 'भ', 'U': 'ङ', 'I': 'घ', 'O': 'ध', 'P': 'झ', '{': 'ढ', '}': 'ञ', '|': 'ऑ',
        // Shifted (Row 3)
        'A': 'ओ', 'S': 'ए', 'D': 'अ', 'F': 'इ', 'G': 'उ', 'H': 'फ', 'J': 'ऱ', 'K': 'ख', 'L': 'थ', ':': 'छ', '"': 'ठ',
        // Shifted (Row 4)
        'Z': 'सन्', 'X': 'ँ', 'C': 'ण', 'V': 'ऩ', 'B': 'ळ', 'N': 'ള', 'M': 'श', '<': 'ष', '>': '।', '?': 'य़'
    },
    punjabi: {
        // Unshifted (Row 1)
        '`': 'ੋ', '1': '੧', '2': '੨', '3': '੩', '4': '੪', '5': '੫', '6': '੬', '7': '੭', '8': '੮', '9': '੯', '0': '੦', '-': '-', '=': '੍ਰ',
        // Unshifted (Row 2)
        'q': 'ੌ', 'w': 'ੈ', 'e': 'ਾ', 'r': 'ੀ', 't': 'ੂ', 'y': 'ਬ', 'u': 'ਹ', 'i': 'ਗ', 'o': 'ਦ', 'p': 'ਜ', '[': 'ਡ', ']': '਼', '\\': 'ਞ',
        // Unshifted (Row 3)
        'a': 'ੋ', 's': 'ੇ', 'd': '੍', 'f': 'ਿ', 'g': 'ੁ', 'h': 'ਪ', 'j': 'ਰ', 'k': 'ਕ', 'l': 'ਤ', ';': 'ਚ', "'": 'ਟ',
        // Unshifted (Row 4)
        'z': 'ੑ', 'x': 'ੰ', 'c': 'ਮ', 'v': 'ਨ', 'b': 'ਵ', 'n': 'ਲ', 'm': 'ਸ', ',': ',', '.': '.', '/': 'ਯ',

        // Shifted
        'Q': 'ਔ', 'W': 'ਐ', 'E': 'ਆ', 'R': 'ਈ', 'T': 'ਊ', 'Y': 'ਭ', 'U': 'ਙ', 'I': 'ਘ', 'O': 'ਧ', 'P': 'ਝ', '{': 'ਢ', '}': 'ਞ',
        'A': 'ਓ', 'S': 'ਏ', 'D': 'ਅ', 'F': 'ਇ', 'G': 'ਉ', 'H': 'ਫ', 'J': 'ੜ', 'K': 'ਖ', 'L': 'ਥ', ':': 'ਛ', '"': 'ਠ',
        'Z': 'ੵ', 'X': 'ੱ', 'C': 'ਣ', 'V': 'ਨ', 'B': 'ਲ਼', 'N': 'ਲ', 'M': 'ਸ਼', '<': 'ਸ਼', '>': '।', '?': 'ਯ'
    }
};

function renderKeyboard() {
    if (!keyboardContainer) return;
    keyboardContainer.innerHTML = '';

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'english';
    const mapping = languageMaps[lang];

    // Always iterate the English layout to maintain structure
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';

            let keyId = key.toLowerCase();
            let englishLabel = key;
            let langLabel = '';

            // Map special keys
            if (key === 'Space') { keyId = 'space'; englishLabel = 'Space'; }
            else if (key === 'Backspace') { keyId = 'backspace'; englishLabel = '⌫'; }
            else if (key === 'Tab') { keyId = 'tab'; englishLabel = 'Tab'; }
            else if (key === 'Caps') { keyId = 'caps'; englishLabel = 'Caps'; }
            else if (key === 'Enter') { keyId = 'enter'; englishLabel = 'Enter'; }
            else if (key === 'Shift') { keyId = 'shift'; englishLabel = 'Shift'; }
            else if (key === '\\') { keyId = '\\'; }
            else if (key === "'") { keyId = "'"; }
            else if (key === '"') { keyId = '"'; }

            // Determine Label(s)
            if (mapping && !['space', 'backspace', 'tab', 'caps', 'enter', 'shift'].includes(keyId)) {
                // Dual display for Hindi/Punjabi
                // Show Unshifted mapping by default
                const mappedChar = mapping[key] || '';

                const engSpan = document.createElement('span');
                engSpan.className = 'eng-char';
                engSpan.textContent = englishLabel;

                const langSpan = document.createElement('span');
                langSpan.className = 'lang-char';
                langSpan.textContent = mappedChar;

                keyDiv.appendChild(engSpan);
                keyDiv.appendChild(langSpan);
            } else {
                // English only or Special keys
                keyDiv.textContent = englishLabel;
            }

            keyDiv.setAttribute('data-key', keyId);

            // Add classes
            if (['space', 'backspace', 'tab', 'caps', 'enter', 'shift'].includes(keyId)) {
                keyDiv.classList.add(keyId);
                keyDiv.classList.add('special-key');
            }

            rowDiv.appendChild(keyDiv);
        });

        keyboardContainer.appendChild(rowDiv);
    });
}

function highlightKey(char) {
    if (!char) return;

    // Clear existing highlights
    document.querySelectorAll('.key').forEach(k => k.classList.remove('guide'));

    let keySelector = char.toLowerCase();

    // Map common chars to their key IDs if they differ
    if (char === ' ') keySelector = 'space';

    const shiftMap = {
        '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0', '_': '-', '+': '=',
        '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/'
    };

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'english';

    // Logic for mapped languages (Hindi/Punjabi)
    if (lang !== 'english' && languageMaps[lang]) {
        const mapping = languageMaps[lang];
        let found = false;

        // REVERSE LOOKUP: Find which English key maps to the target 'char'
        for (const [engKey, targetVal] of Object.entries(mapping)) {
            if (targetVal === char) {
                // Found the English key (e.g. 'Q' for 'औ' or 'q' for 'ौ')
                // engKey is the key to press.

                // Determine base key for selector (lowercase)
                keySelector = engKey.toLowerCase();

                // Handle shifted special chars (e.g. '>' maps to '.')
                if (shiftMap[engKey]) {
                    keySelector = shiftMap[engKey];
                }

                // Check if Shift is needed
                // If engKey is uppercase (and different from lowercase) -> Shift
                // OR if engKey is in shiftMap (e.g. '{') -> Shift
                if ((engKey !== engKey.toLowerCase() && /[A-Z]/.test(engKey)) || shiftMap[engKey]) {
                    const shiftBtn = document.querySelector('.key[data-key="shift"]');
                    if (shiftBtn) shiftBtn.classList.add('guide');
                }

                found = true;
                break;
            }
        }

        if (!found) {
            // Fallback: maybe char itself is English (common punctuation?)
            // console.log("Could not find key for:", char);
        }

    } else {
        // English Logic
        if (shiftMap[char]) {
            keySelector = shiftMap[char];
            const shiftKey = document.querySelector('.key[data-key="shift"]');
            if (shiftKey) shiftKey.classList.add('guide');
        }

        if (char !== char.toLowerCase() && char.toUpperCase() === char && char.length === 1 && /[A-Z]/.test(char)) {
            const shiftKey = document.querySelector('.key[data-key="shift"]');
            if (shiftKey) shiftKey.classList.add('guide');
        }
    }

    // Highlighting
    let keyDiv = null;
    try {
        const keys = document.querySelectorAll('.key');
        for (const k of keys) {
            if (k.getAttribute('data-key') === keySelector) {
                keyDiv = k;
                break;
            }
        }
    } catch (e) {
        console.error("Error finding key for:", char);
    }

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
}

document.addEventListener('DOMContentLoaded', initGame);
