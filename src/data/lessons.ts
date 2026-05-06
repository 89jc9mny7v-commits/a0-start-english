export type VocabItem = {
  word: string;
  meaning: string;
  example: string;
};

export type DialogueLine = {
  speaker: string;
  text: string;
};

export type Dialogue = {
  title: string;
  lines: DialogueLine[];
};

export type Lesson = {
  id: string;
  number: number;
  title: string;
  topic: string;
  description: string;
  objectives: string[];
  explanation: string[];
  vocabulary: VocabItem[];
  dialogues: Dialogue[];
  duration: string;
};

export const lessons: Lesson[] = [
  {
    id: "a0-01-hello",
    number: 1,
    title: "Hello & Goodbye",
    topic: "Greetings",
    description: "Learn how to say hello and goodbye in English in formal and informal situations.",
    objectives: ["Greet people at different times of day", "Say goodbye politely", "Respond to common greetings"],
    explanation: [
      "English greetings change with the time of day. Use 'Good morning' before noon, 'Good afternoon' until about 6 p.m., and 'Good evening' after that.",
      "'Hello' works in any situation. 'Hi' and 'Hey' are more casual and used with friends, family, and people your age.",
      "When you leave, 'Goodbye' is neutral. 'Bye' and 'See you later' are friendly. 'Have a nice day' is polite and common in shops and offices.",
    ],
    vocabulary: [
      { word: "Hello", meaning: "A friendly greeting", example: "Hello, how are you today?" },
      { word: "Hi", meaning: "Informal hello", example: "Hi Anna, nice to see you!" },
      { word: "Good morning", meaning: "Greeting before noon", example: "Good morning, everyone. Let's begin." },
      { word: "Goodbye", meaning: "Said when leaving", example: "Goodbye! Have a great weekend." },
      { word: "See you later", meaning: "Casual goodbye", example: "I have to go now. See you later!" },
    ],
    dialogues: [
      {
        title: "At the office in the morning",
        lines: [
          { speaker: "Sara", text: "Good morning, Tom!" },
          { speaker: "Tom", text: "Good morning, Sara. How are you?" },
          { speaker: "Sara", text: "I'm fine, thanks. And you?" },
          { speaker: "Tom", text: "Very well, thank you." },
        ],
      },
      {
        title: "Saying goodbye to a friend",
        lines: [
          { speaker: "Mia", text: "Bye, Leo! See you tomorrow." },
          { speaker: "Leo", text: "Bye Mia. Have a nice evening!" },
        ],
      },
    ],
    duration: "20 min",
  },
  {
    id: "a0-02-name",
    number: 2,
    title: "What's Your Name?",
    topic: "Introductions",
    description: "Introduce yourself and ask others their name.",
    objectives: ["Say your name", "Ask someone's name", "Spell your name"],
    explanation: [
      "To introduce yourself, say 'My name is...' or 'I'm...'. Both are correct; 'I'm' is a little more casual.",
      "To ask someone's name use 'What's your name?' (short for 'What is your name?').",
      "After meeting someone for the first time, say 'Nice to meet you'. The other person usually answers 'Nice to meet you too'.",
    ],
    vocabulary: [
      { word: "My name is...", meaning: "Used to say your name", example: "My name is Carla." },
      { word: "What's your name?", meaning: "Asking someone's name", example: "Hi, what's your name?" },
      { word: "Nice to meet you", meaning: "Polite greeting on first meeting", example: "Nice to meet you, Mr. Brown." },
    ],
    dialogues: [
      {
        title: "First day at class",
        lines: [
          { speaker: "Teacher", text: "Hello! What's your name?" },
          { speaker: "Student", text: "Hi, my name is Pablo." },
          { speaker: "Teacher", text: "Nice to meet you, Pablo." },
          { speaker: "Student", text: "Nice to meet you too." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-03-alphabet",
    number: 3,
    title: "The Alphabet",
    topic: "Letters & Sounds",
    description: "Learn the 26 letters of the English alphabet and their pronunciation.",
    objectives: ["Recognize all 26 letters", "Pronounce each letter", "Spell simple words"],
    explanation: [
      "The English alphabet has 26 letters: 5 vowels (A, E, I, O, U) and 21 consonants.",
      "When you spell a word, you say each letter one by one. 'Cat' is spelled C-A-T.",
      "If you don't understand, ask 'Can you spell that, please?' This is very common when giving names.",
    ],
    vocabulary: [
      { word: "A, B, C", meaning: "First three letters", example: "The alphabet starts with A, B, C." },
      { word: "Vowels", meaning: "A, E, I, O, U", example: "There are five vowels in English." },
      { word: "Consonants", meaning: "All other letters", example: "B, C, and D are consonants." },
    ],
    dialogues: [
      {
        title: "Spelling a name",
        lines: [
          { speaker: "Receptionist", text: "What's your last name?" },
          { speaker: "Guest", text: "Kowalski." },
          { speaker: "Receptionist", text: "Sorry, can you spell that, please?" },
          { speaker: "Guest", text: "K-O-W-A-L-S-K-I." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-04-numbers",
    number: 4,
    title: "Numbers 1–20",
    topic: "Numbers",
    description: "Count from one to twenty and use numbers in basic situations.",
    objectives: ["Count to 20", "Recognize written numbers", "Say your age"],
    explanation: [
      "Numbers 1–12 each have their own word: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve.",
      "From 13 to 19 we add the ending '-teen': thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Twenty is 20.",
      "To say your age, use 'I am' + number + 'years old': 'I am 25 years old.'",
    ],
    vocabulary: [
      { word: "One, two, three", meaning: "1, 2, 3", example: "I have one brother and two sisters." },
      { word: "Ten", meaning: "10", example: "Class starts at ten o'clock." },
      { word: "Twenty", meaning: "20", example: "She is twenty years old." },
    ],
    dialogues: [
      {
        title: "Asking someone's age",
        lines: [
          { speaker: "Ana", text: "How old are you?" },
          { speaker: "Sam", text: "I'm seventeen. And you?" },
          { speaker: "Ana", text: "I'm nineteen years old." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-05-colors",
    number: 5,
    title: "Colors",
    topic: "Vocabulary",
    description: "Learn the names of basic colors and describe objects around you.",
    objectives: ["Name 10 colors", "Describe object colors", "Ask about colors"],
    explanation: [
      "In English, the color comes BEFORE the noun: 'a red car', not 'a car red'.",
      "To ask about color, say: 'What color is it?' Answer with 'It's' + color: 'It's blue.'",
      "Common colors: red, blue, green, yellow, black, white, orange, pink, purple, brown.",
    ],
    vocabulary: [
      { word: "Red", meaning: "Color of fire", example: "I have a red bag." },
      { word: "Blue", meaning: "Color of sky", example: "The sky is blue today." },
      { word: "Green", meaning: "Color of grass", example: "She likes green apples." },
      { word: "Yellow", meaning: "Color of sun", example: "The sun is yellow." },
    ],
    dialogues: [
      {
        title: "In a clothing shop",
        lines: [
          { speaker: "Clerk", text: "Do you like this shirt?" },
          { speaker: "Customer", text: "Yes, but what color is it?" },
          { speaker: "Clerk", text: "It's dark green." },
          { speaker: "Customer", text: "Nice. I'll take it." },
        ],
      },
    ],
    duration: "20 min",
  },
  {
    id: "a0-06-family",
    number: 6,
    title: "My Family",
    topic: "Family",
    description: "Talk about your family members and relationships.",
    objectives: ["Name family members", "Describe family", "Ask about someone's family"],
    explanation: [
      "Use possessive adjectives to talk about family: my mother, your father, his sister, her brother.",
      "'Parents' = mother + father. 'Siblings' = brothers and sisters. 'Grandparents' = grandmother + grandfather.",
      "To ask about family: 'Do you have any brothers or sisters?' Answer: 'Yes, I have one brother.' or 'No, I don't.'",
    ],
    vocabulary: [
      { word: "Mother", meaning: "Female parent", example: "My mother is a doctor." },
      { word: "Father", meaning: "Male parent", example: "His father works in a bank." },
      { word: "Sister", meaning: "Female sibling", example: "I have one older sister." },
      { word: "Brother", meaning: "Male sibling", example: "Her brother is ten years old." },
    ],
    dialogues: [
      {
        title: "Talking about family",
        lines: [
          { speaker: "Lin", text: "Do you have any brothers or sisters?" },
          { speaker: "Omar", text: "Yes, I have one brother and one sister." },
          { speaker: "Lin", text: "How old is your sister?" },
          { speaker: "Omar", text: "She's twelve. My brother is eighteen." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-07-tobe",
    number: 7,
    title: "Verb 'To Be'",
    topic: "Grammar",
    description: "Master the most important verb in English: to be (am, is, are).",
    objectives: ["Use am, is, are correctly", "Form positive sentences", "Form questions"],
    explanation: [
      "The verb 'to be' has three forms in the present: I am, you/we/they are, he/she/it is.",
      "Short forms (contractions) are very common in speech: I'm, you're, he's, she's, it's, we're, they're.",
      "For negatives add 'not': 'I am not (I'm not) tired.' For questions, change the order: 'Are you tired?'",
    ],
    vocabulary: [
      { word: "I am", meaning: "First person", example: "I am a student." },
      { word: "You are", meaning: "Second person", example: "You are very kind." },
      { word: "He / She / It is", meaning: "Third person singular", example: "She is from Spain." },
    ],
    dialogues: [
      {
        title: "Meeting at a party",
        lines: [
          { speaker: "Eva", text: "Hi! I'm Eva. Are you a friend of Mark?" },
          { speaker: "Jay", text: "Yes, I am. We're colleagues at work." },
          { speaker: "Eva", text: "Cool! Is this your first time here?" },
          { speaker: "Jay", text: "No, it isn't. I was here last year." },
        ],
      },
    ],
    duration: "35 min",
  },
  {
    id: "a0-08-countries",
    number: 8,
    title: "Countries & Nationalities",
    topic: "Vocabulary",
    description: "Talk about where you're from and where other people come from.",
    objectives: ["Say your country", "Say your nationality", "Ask others"],
    explanation: [
      "Countries and nationalities are different words: Spain → Spanish, France → French, Japan → Japanese, Brazil → Brazilian.",
      "Use 'I'm from' + country, or 'I'm' + nationality: 'I'm from Italy.' / 'I'm Italian.'",
      "Nationalities are always written with a CAPITAL letter in English.",
    ],
    vocabulary: [
      { word: "I'm from...", meaning: "Your country of origin", example: "I'm from Mexico." },
      { word: "Where are you from?", meaning: "Asking origin", example: "Nice to meet you. Where are you from?" },
      { word: "American, British, French", meaning: "Nationalities", example: "She is French and he is British." },
    ],
    dialogues: [
      {
        title: "At an international event",
        lines: [
          { speaker: "Yuki", text: "Hi, where are you from?" },
          { speaker: "Diego", text: "I'm from Argentina. And you?" },
          { speaker: "Yuki", text: "I'm Japanese, from Tokyo." },
          { speaker: "Diego", text: "Wow, Tokyo is amazing!" },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-09-articles",
    number: 9,
    title: "A, An, The",
    topic: "Grammar",
    description: "Learn when to use the articles a, an, and the.",
    objectives: ["Use a vs an", "Know when to use the", "Recognize zero article"],
    explanation: [
      "Use 'a' before consonant SOUNDS (a book, a car) and 'an' before vowel SOUNDS (an apple, an hour).",
      "Use 'the' when the listener already knows which thing you mean: 'Close the door.' (the specific door here).",
      "We don't use any article with most plural and uncountable nouns when speaking generally: 'I like music.' 'Cats are cute.'",
    ],
    vocabulary: [
      { word: "A book", meaning: "Before consonant sounds", example: "I'm reading a book." },
      { word: "An apple", meaning: "Before vowel sounds", example: "She eats an apple every morning." },
      { word: "The sun", meaning: "Specific things", example: "The sun is very bright today." },
    ],
    dialogues: [
      {
        title: "In the kitchen",
        lines: [
          { speaker: "Mom", text: "Do you want an orange or a banana?" },
          { speaker: "Kid", text: "An orange, please." },
          { speaker: "Mom", text: "Okay, the oranges are on the table." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-10-classroom",
    number: 10,
    title: "In the Classroom",
    topic: "Vocabulary",
    description: "Learn classroom objects and basic instructions.",
    objectives: ["Name classroom objects", "Follow instructions", "Ask questions"],
    explanation: [
      "Common classroom objects: book, notebook, pen, pencil, eraser, desk, chair, board, bag.",
      "Teachers often use imperative sentences (commands): 'Open your book.' 'Listen carefully.' 'Repeat after me.'",
      "If you don't understand, say: 'Sorry, can you repeat, please?' or 'How do you say ___ in English?'",
    ],
    vocabulary: [
      { word: "Book", meaning: "For reading", example: "Open your book to page ten." },
      { word: "Pen", meaning: "For writing", example: "Can I borrow your pen?" },
      { word: "Desk", meaning: "Where you work", example: "Put your bag on the desk." },
      { word: "Open your book", meaning: "Common instruction", example: "Open your book and read." },
    ],
    dialogues: [
      {
        title: "Beginning of class",
        lines: [
          { speaker: "Teacher", text: "Good morning, class. Open your books to page 12." },
          { speaker: "Student", text: "Sorry, can you repeat, please?" },
          { speaker: "Teacher", text: "Sure. Page one-two, page twelve." },
        ],
      },
    ],
    duration: "20 min",
  },
  {
    id: "a0-11-days",
    number: 11,
    title: "Days of the Week",
    topic: "Time",
    description: "Learn the seven days and talk about your weekly schedule.",
    objectives: ["Name 7 days", "Say today / tomorrow", "Talk about weekly plans"],
    explanation: [
      "The seven days are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Days are always capitalized.",
      "We use 'on' with days: 'I have English class on Monday.' 'See you on Friday.'",
      "'Today' = this day. 'Tomorrow' = the next day. 'Yesterday' = the day before today.",
    ],
    vocabulary: [
      { word: "Monday", meaning: "First weekday", example: "I work from Monday to Friday." },
      { word: "Weekend", meaning: "Saturday and Sunday", example: "What do you do on the weekend?" },
      { word: "Today", meaning: "This day", example: "Today is Wednesday." },
    ],
    dialogues: [
      {
        title: "Making weekend plans",
        lines: [
          { speaker: "Ben", text: "What are you doing this weekend?" },
          { speaker: "Lia", text: "On Saturday I'm going to the park. On Sunday I'm staying home." },
          { speaker: "Ben", text: "Cool. See you on Monday at school!" },
        ],
      },
    ],
    duration: "20 min",
  },
  {
    id: "a0-12-months",
    number: 12,
    title: "Months & Seasons",
    topic: "Time",
    description: "Months of the year and the four seasons.",
    objectives: ["Name 12 months", "Name 4 seasons", "Say your birthday"],
    explanation: [
      "The 12 months: January, February, March, April, May, June, July, August, September, October, November, December. They are capitalized.",
      "The four seasons: spring, summer, autumn (US: fall), winter. Seasons are NOT capitalized.",
      "Use 'in' with months and seasons: 'My birthday is in July.' 'It's cold in winter.'",
    ],
    vocabulary: [
      { word: "January", meaning: "First month", example: "The new year begins in January." },
      { word: "Summer", meaning: "Hot season", example: "We go to the beach in summer." },
      { word: "Winter", meaning: "Cold season", example: "It snows a lot in winter." },
    ],
    dialogues: [
      {
        title: "Talking about birthdays",
        lines: [
          { speaker: "Aya", text: "When is your birthday?" },
          { speaker: "Tom", text: "It's in March. And yours?" },
          { speaker: "Aya", text: "Mine is in October, in autumn." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-13-time",
    number: 13,
    title: "Telling the Time",
    topic: "Time",
    description: "Ask and tell the time in English.",
    objectives: ["Tell the time", "Ask the time", "Use o'clock and half past"],
    explanation: [
      "For full hours use 'o'clock': 'It's three o'clock.' (3:00).",
      "Use 'half past' for :30 ('half past four' = 4:30), 'quarter past' for :15, 'quarter to' for :45.",
      "Use 'at' to say WHEN something happens: 'The class starts at nine o'clock.'",
    ],
    vocabulary: [
      { word: "What time is it?", meaning: "Asking the time", example: "Excuse me, what time is it?" },
      { word: "It's three o'clock", meaning: "Telling the hour", example: "It's three o'clock exactly." },
      { word: "Half past", meaning: ":30", example: "I wake up at half past six." },
    ],
    dialogues: [
      {
        title: "Late for the meeting",
        lines: [
          { speaker: "Kira", text: "What time is it?" },
          { speaker: "Mark", text: "It's quarter past nine." },
          { speaker: "Kira", text: "Oh no! The meeting starts at half past nine!" },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-14-this-that",
    number: 14,
    title: "This, That, These, Those",
    topic: "Grammar",
    description: "Use demonstrative pronouns to point out objects.",
    objectives: ["Use this / that", "Use these / those", "Talk about distance"],
    explanation: [
      "Use 'this' (singular) and 'these' (plural) for things NEAR you.",
      "Use 'that' (singular) and 'those' (plural) for things FAR from you.",
      "Examples: 'This book is mine.' 'Those shoes are nice.' 'What is that?'",
    ],
    vocabulary: [
      { word: "This", meaning: "Singular, near", example: "This is my phone." },
      { word: "That", meaning: "Singular, far", example: "That building is the school." },
      { word: "These", meaning: "Plural, near", example: "These cookies are delicious." },
      { word: "Those", meaning: "Plural, far", example: "Those people are my neighbors." },
    ],
    dialogues: [
      {
        title: "Shopping for shoes",
        lines: [
          { speaker: "Customer", text: "Excuse me, how much are these shoes?" },
          { speaker: "Clerk", text: "These ones are $40. Those over there are $60." },
          { speaker: "Customer", text: "I'll take this pair, please." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-15-food",
    number: 15,
    title: "Food & Drinks",
    topic: "Vocabulary",
    description: "Common foods and drinks; ordering simple meals.",
    objectives: ["Name common foods", "Name common drinks", "Order at a café"],
    explanation: [
      "Common foods: bread, rice, pasta, chicken, fish, eggs, cheese, fruit, vegetables.",
      "Common drinks: water, coffee, tea, juice, milk, soda.",
      "To order politely use 'I'd like...' or 'Can I have..., please?': 'I'd like a coffee, please.'",
    ],
    vocabulary: [
      { word: "Bread", meaning: "Common food", example: "I eat bread for breakfast." },
      { word: "Water", meaning: "Common drink", example: "Can I have a glass of water?" },
      { word: "I'd like...", meaning: "Polite ordering", example: "I'd like a sandwich and a tea." },
    ],
    dialogues: [
      {
        title: "At a café",
        lines: [
          { speaker: "Waiter", text: "Hi, what would you like?" },
          { speaker: "Guest", text: "I'd like a coffee and a piece of cake, please." },
          { speaker: "Waiter", text: "Anything to drink besides coffee?" },
          { speaker: "Guest", text: "A glass of water, please." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-16-have",
    number: 16,
    title: "Verb 'To Have'",
    topic: "Grammar",
    description: "Use have / has to talk about possessions and family.",
    objectives: ["Use have / has", "Talk about possessions", "Form negatives"],
    explanation: [
      "Use 'have' with I, you, we, they. Use 'has' with he, she, it.",
      "Negative: 'don't have' / 'doesn't have'. Example: 'I don't have a car.' 'She doesn't have a pet.'",
      "Question: 'Do you have...?' / 'Does he have...?' Answer: 'Yes, I do.' / 'No, he doesn't.'",
    ],
    vocabulary: [
      { word: "I have", meaning: "Possession", example: "I have two brothers." },
      { word: "He has", meaning: "Third person", example: "He has a new bike." },
      { word: "I don't have", meaning: "Negative", example: "I don't have any money today." },
    ],
    dialogues: [
      {
        title: "Talking about pets",
        lines: [
          { speaker: "Ivy", text: "Do you have any pets?" },
          { speaker: "Max", text: "Yes, I have a dog. Do you?" },
          { speaker: "Ivy", text: "No, I don't have any pets, but my sister has a cat." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a0-17-body",
    number: 17,
    title: "Parts of the Body",
    topic: "Vocabulary",
    description: "Learn vocabulary for body parts and describe people.",
    objectives: ["Name body parts", "Describe people", "Talk about feelings"],
    explanation: [
      "Main body parts: head, hair, face, eyes, nose, mouth, ears, neck, shoulders, arms, hands, fingers, legs, feet.",
      "Most body parts come in pairs and use the plural: 'My eyes are blue.' 'My feet are cold.'",
      "To say something hurts: 'My + body part + hurts.' Example: 'My head hurts.'",
    ],
    vocabulary: [
      { word: "Head", meaning: "Top of body", example: "My head hurts a little." },
      { word: "Hand", meaning: "End of arm", example: "Wash your hands before eating." },
      { word: "Eye", meaning: "For seeing", example: "She has beautiful green eyes." },
    ],
    dialogues: [
      {
        title: "At the doctor's",
        lines: [
          { speaker: "Doctor", text: "What's the problem today?" },
          { speaker: "Patient", text: "My head hurts and my eyes are tired." },
          { speaker: "Doctor", text: "Okay. Drink water and rest your eyes." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-18-clothes",
    number: 18,
    title: "Clothes",
    topic: "Vocabulary",
    description: "Talk about clothes and what people are wearing.",
    objectives: ["Name common clothes", "Describe outfits", "Shop for basics"],
    explanation: [
      "Common clothes: shirt, t-shirt, trousers/pants, jeans, dress, skirt, jacket, coat, shoes, socks, hat.",
      "Use the verb 'to wear' to describe clothes: 'She is wearing a blue dress.'",
      "When shopping, ask: 'How much is this?' or 'Do you have this in size M?'",
    ],
    vocabulary: [
      { word: "Shirt", meaning: "Upper body clothing", example: "He's wearing a white shirt." },
      { word: "Trousers / Pants", meaning: "Lower body clothing", example: "These trousers are too long." },
      { word: "Shoes", meaning: "On your feet", example: "I need new shoes for work." },
    ],
    dialogues: [
      {
        title: "In a clothing store",
        lines: [
          { speaker: "Shopper", text: "Excuse me, do you have this shirt in blue?" },
          { speaker: "Clerk", text: "Yes, in small and medium. What size are you?" },
          { speaker: "Shopper", text: "Medium, please. How much is it?" },
          { speaker: "Clerk", text: "It's twenty-five dollars." },
        ],
      },
    ],
    duration: "25 min",
  },
  {
    id: "a0-19-weather",
    number: 19,
    title: "Weather",
    topic: "Vocabulary",
    description: "Talk about today's weather and the seasons.",
    objectives: ["Describe the weather", "Ask about the weather", "Use it's + adjective"],
    explanation: [
      "We usually use 'it' to talk about the weather: 'It's sunny.' 'It's raining.' 'It's cold.'",
      "Common weather words: sunny, cloudy, rainy, snowy, windy, hot, warm, cool, cold.",
      "To ask about the weather: 'What's the weather like today?' or 'How's the weather?'",
    ],
    vocabulary: [
      { word: "Sunny", meaning: "Lots of sun", example: "It's sunny and warm today." },
      { word: "Rainy", meaning: "Lots of rain", example: "Take an umbrella, it's rainy." },
      { word: "Cold", meaning: "Low temperature", example: "It's very cold in January." },
    ],
    dialogues: [
      {
        title: "Talking on the phone",
        lines: [
          { speaker: "Nina", text: "Hi! How's the weather in London?" },
          { speaker: "Theo", text: "It's cloudy and a bit cold. And in Madrid?" },
          { speaker: "Nina", text: "It's sunny and 25 degrees!" },
        ],
      },
    ],
    duration: "20 min",
  },
  {
    id: "a0-20-routine",
    number: 20,
    title: "Daily Routine",
    topic: "Conversation",
    description: "Talk about your daily activities using simple present.",
    objectives: ["Describe daily routine", "Use simple present", "Ask about routines"],
    explanation: [
      "Use the simple present for daily routines and habits: 'I wake up at 7.' 'She works at a hospital.'",
      "With he/she/it, add '-s' to the verb: 'He eats breakfast at 8.' 'She goes to school.'",
      "Useful time expressions: in the morning, in the afternoon, in the evening, at night, every day.",
    ],
    vocabulary: [
      { word: "I wake up", meaning: "Start of day", example: "I wake up at 7 a.m. every day." },
      { word: "I go to work", meaning: "Daily activity", example: "I go to work by bus." },
      { word: "I go to bed", meaning: "End of day", example: "I go to bed at 11 p.m." },
    ],
    dialogues: [
      {
        title: "Comparing routines",
        lines: [
          { speaker: "Ravi", text: "What time do you wake up?" },
          { speaker: "Sue", text: "I wake up at 6:30. I have breakfast and go to work at 8." },
          { speaker: "Ravi", text: "Wow, early! I wake up at 9 because I work in the evening." },
        ],
      },
    ],
    duration: "35 min",
  },
];
