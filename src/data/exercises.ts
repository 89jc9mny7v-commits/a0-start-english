export type Exercise =
  | { kind: "fill"; prompt: string; answer: string; hint?: string }
  | { kind: "choice"; prompt: string; options: string[]; answerIndex: number; explanation?: string }
  | { kind: "match"; prompt: string; pairs: { left: string; right: string }[] };

export const exercisesByLesson: Record<string, Exercise[]> = {
  "a0-01-hello": [
    { kind: "choice", prompt: "Which greeting do you use at 9 a.m.?", options: ["Good evening", "Good morning", "Good night"], answerIndex: 1 },
    { kind: "fill", prompt: "It's 3 p.m. — Good ____, everyone.", answer: "afternoon" },
    { kind: "choice", prompt: "A casual way to say goodbye is:", options: ["Goodbye, sir.", "See you later!", "Good morning."], answerIndex: 1 },
    { kind: "match", prompt: "Match the situation to the greeting.", pairs: [
      { left: "Meeting a friend at 8 a.m.", right: "Good morning!" },
      { left: "Leaving the office at 6 p.m.", right: "Have a nice evening!" },
      { left: "Saying bye to a classmate", right: "See you later!" },
    ] },
    { kind: "fill", prompt: "Friendly informal hello: ____ , Anna!", answer: "Hi" },
  ],
  "a0-02-name": [
    { kind: "fill", prompt: "Complete: My ____ is Carla.", answer: "name" },
    { kind: "choice", prompt: "How do you ask someone's name?", options: ["Where are you from?", "What's your name?", "How old are you?"], answerIndex: 1 },
    { kind: "fill", prompt: "Polite reply after 'Nice to meet you': Nice to meet you ____.", answer: "too" },
    { kind: "match", prompt: "Match the question with the best answer.", pairs: [
      { left: "What's your name?", right: "My name is Pablo." },
      { left: "Nice to meet you.", right: "Nice to meet you too." },
      { left: "Hello!", right: "Hi!" },
    ] },
  ],
  "a0-03-alphabet": [
    { kind: "choice", prompt: "How many letters are in the English alphabet?", options: ["24", "26", "28"], answerIndex: 1 },
    { kind: "choice", prompt: "Which group are ALL vowels?", options: ["A, E, I, O, U", "A, B, C, D, E", "E, I, O, U, Y"], answerIndex: 0 },
    { kind: "fill", prompt: "Spell 'cat': ____ ", answer: "C-A-T", hint: "Use dashes between letters." },
    { kind: "fill", prompt: "Polite request: Can you ____ that, please?", answer: "spell" },
    { kind: "match", prompt: "Match each letter to its type.", pairs: [
      { left: "E", right: "Vowel" },
      { left: "K", right: "Consonant" },
      { left: "U", right: "Vowel" },
    ] },
  ],
  "a0-04-numbers": [
    { kind: "fill", prompt: "Write the number in words: 12 = ____", answer: "twelve" },
    { kind: "fill", prompt: "Write the number in words: 17 = ____", answer: "seventeen" },
    { kind: "choice", prompt: "Which is correct?", options: ["I am 25 years old.", "I have 25 years.", "I am 25 year old."], answerIndex: 0 },
    { kind: "match", prompt: "Match the digit to the word.", pairs: [
      { left: "3", right: "three" },
      { left: "10", right: "ten" },
      { left: "20", right: "twenty" },
      { left: "15", right: "fifteen" },
    ] },
  ],
  "a0-05-colors": [
    { kind: "choice", prompt: "Choose the correct order:", options: ["a car red", "a red car", "red a car"], answerIndex: 1 },
    { kind: "fill", prompt: "The sky is ____.", answer: "blue" },
    { kind: "fill", prompt: "Grass is usually ____.", answer: "green" },
    { kind: "match", prompt: "Match the object to its typical color.", pairs: [
      { left: "Sun", right: "Yellow" },
      { left: "Snow", right: "White" },
      { left: "Tomato", right: "Red" },
    ] },
  ],
  "a0-06-family": [
    { kind: "fill", prompt: "Your mother and father are your ____.", answer: "parents" },
    { kind: "choice", prompt: "Brothers and sisters are called:", options: ["Cousins", "Siblings", "Grandparents"], answerIndex: 1 },
    { kind: "fill", prompt: "Complete: His ____ is a doctor. (mom)", answer: "mother" },
    { kind: "match", prompt: "Match the family word to its meaning.", pairs: [
      { left: "Father", right: "Male parent" },
      { left: "Sister", right: "Female sibling" },
      { left: "Grandmother", right: "Mother of your parent" },
    ] },
  ],
  "a0-07-tobe": [
    { kind: "fill", prompt: "I ____ a student.", answer: "am" },
    { kind: "fill", prompt: "She ____ from Spain.", answer: "is" },
    { kind: "fill", prompt: "We ____ tired.", answer: "are" },
    { kind: "choice", prompt: "Form a question: 'You are happy' →", options: ["You are happy?", "Are you happy?", "Do you happy?"], answerIndex: 1 },
    { kind: "match", prompt: "Match the subject to the correct form of 'to be'.", pairs: [
      { left: "I", right: "am" },
      { left: "He / She / It", right: "is" },
      { left: "You / We / They", right: "are" },
    ] },
  ],
  "a0-08-countries": [
    { kind: "fill", prompt: "I'm from Italy. I'm ____.", answer: "Italian" },
    { kind: "fill", prompt: "He's from Japan. He's ____.", answer: "Japanese" },
    { kind: "choice", prompt: "Which is written correctly?", options: ["She is french.", "She is French.", "She is FRENCH."], answerIndex: 1 },
    { kind: "match", prompt: "Match the country to the nationality.", pairs: [
      { left: "Brazil", right: "Brazilian" },
      { left: "Spain", right: "Spanish" },
      { left: "France", right: "French" },
      { left: "Japan", right: "Japanese" },
    ] },
  ],
  "a0-09-articles": [
    { kind: "fill", prompt: "I'd like ____ apple, please.", answer: "an" },
    { kind: "fill", prompt: "She has ____ dog and ____ cat.", answer: "a a", hint: "Two articles separated by a space." },
    { kind: "choice", prompt: "Choose the correct sentence:", options: ["Close a door.", "Close the door.", "Close door."], answerIndex: 1 },
    { kind: "match", prompt: "Match the noun to its article.", pairs: [
      { left: "hour", right: "an" },
      { left: "book", right: "a" },
      { left: "umbrella", right: "an" },
    ] },
  ],
  "a0-10-classroom": [
    { kind: "fill", prompt: "Open your ____ to page 12.", answer: "book" },
    { kind: "choice", prompt: "You write with a:", options: ["desk", "pen", "board"], answerIndex: 1 },
    { kind: "fill", prompt: "If you didn't understand: Sorry, can you ____, please?", answer: "repeat" },
    { kind: "match", prompt: "Match the object to its use.", pairs: [
      { left: "Eraser", right: "Remove pencil marks" },
      { left: "Chair", right: "Sit on it" },
      { left: "Notebook", right: "Write notes" },
    ] },
  ],
  "a0-11-days": [
    { kind: "fill", prompt: "The day after Monday is ____.", answer: "Tuesday" },
    { kind: "fill", prompt: "Saturday and Sunday are the ____.", answer: "weekend" },
    { kind: "choice", prompt: "Choose the correct preposition: I have class ____ Friday.", options: ["in", "on", "at"], answerIndex: 1 },
    { kind: "match", prompt: "Put the days in order.", pairs: [
      { left: "Day 1", right: "Monday" },
      { left: "Day 3", right: "Wednesday" },
      { left: "Day 5", right: "Friday" },
      { left: "Day 7", right: "Sunday" },
    ] },
  ],
  "a0-12-months": [
    { kind: "fill", prompt: "The first month of the year is ____.", answer: "January" },
    { kind: "fill", prompt: "After June comes ____.", answer: "July" },
    { kind: "choice", prompt: "My birthday is ____ October.", options: ["on", "at", "in"], answerIndex: 2 },
    { kind: "match", prompt: "Match the month to its season (Northern Hemisphere).", pairs: [
      { left: "December", right: "winter" },
      { left: "April", right: "spring" },
      { left: "August", right: "summer" },
      { left: "October", right: "autumn" },
    ] },
  ],
  "a0-13-time": [
    { kind: "fill", prompt: "4:30 = half ____ four", answer: "past" },
    { kind: "fill", prompt: "3:00 = three ____", answer: "o'clock" },
    { kind: "choice", prompt: "The class starts ____ nine o'clock.", options: ["in", "at", "on"], answerIndex: 1 },
    { kind: "match", prompt: "Match the time to the expression.", pairs: [
      { left: "6:15", right: "quarter past six" },
      { left: "7:45", right: "quarter to eight" },
      { left: "10:30", right: "half past ten" },
    ] },
  ],
  "a0-14-this-that": [
    { kind: "fill", prompt: "____ book here is mine. (singular, near)", answer: "This" },
    { kind: "fill", prompt: "____ shoes over there are nice. (plural, far)", answer: "Those" },
    { kind: "choice", prompt: "Pick the correct one for one item far away:", options: ["this", "that", "these"], answerIndex: 1 },
    { kind: "match", prompt: "Match each word to its meaning.", pairs: [
      { left: "this", right: "singular, near" },
      { left: "that", right: "singular, far" },
      { left: "these", right: "plural, near" },
      { left: "those", right: "plural, far" },
    ] },
  ],
  "a0-15-food": [
    { kind: "fill", prompt: "Polite ordering: ____ like a coffee, please.", answer: "I'd" },
    { kind: "choice", prompt: "Which one is a drink?", options: ["bread", "rice", "juice"], answerIndex: 2 },
    { kind: "fill", prompt: "Can I ____ a glass of water, please?", answer: "have" },
    { kind: "match", prompt: "Sort foods and drinks.", pairs: [
      { left: "Tea", right: "Drink" },
      { left: "Bread", right: "Food" },
      { left: "Cheese", right: "Food" },
      { left: "Milk", right: "Drink" },
    ] },
  ],
  "a0-16-have": [
    { kind: "fill", prompt: "She ____ a new bike.", answer: "has" },
    { kind: "fill", prompt: "I ____ have any money today.", answer: "don't" },
    { kind: "choice", prompt: "Question form: ____ he have a car?", options: ["Do", "Does", "Is"], answerIndex: 1 },
    { kind: "match", prompt: "Match the subject to the correct form.", pairs: [
      { left: "I / You / We / They", right: "have" },
      { left: "He / She / It", right: "has" },
      { left: "She (negative)", right: "doesn't have" },
    ] },
  ],
  "a0-17-body": [
    { kind: "fill", prompt: "You see with your ____.", answer: "eyes" },
    { kind: "fill", prompt: "Wash your ____ before eating.", answer: "hands" },
    { kind: "choice", prompt: "Which is correct?", options: ["My head hurt.", "My head hurts.", "My head is hurt."], answerIndex: 1 },
    { kind: "match", prompt: "Match the body part to its function.", pairs: [
      { left: "Ears", right: "Hearing" },
      { left: "Mouth", right: "Eating / speaking" },
      { left: "Feet", right: "Walking" },
    ] },
  ],
  "a0-18-clothes": [
    { kind: "fill", prompt: "She is ____ a blue dress. (verb)", answer: "wearing" },
    { kind: "choice", prompt: "Which item goes on your feet?", options: ["hat", "shoes", "jacket"], answerIndex: 1 },
    { kind: "fill", prompt: "Shopping question: ____ much is this?", answer: "How" },
    { kind: "match", prompt: "Match the clothing to the body area.", pairs: [
      { left: "Hat", right: "Head" },
      { left: "Trousers", right: "Legs" },
      { left: "Shirt", right: "Upper body" },
      { left: "Socks", right: "Feet" },
    ] },
  ],
  "a0-19-weather": [
    { kind: "fill", prompt: "____'s sunny today.", answer: "It" },
    { kind: "choice", prompt: "Lots of rain = the weather is:", options: ["sunny", "rainy", "windy"], answerIndex: 1 },
    { kind: "fill", prompt: "Question: What's the weather ____ today?", answer: "like" },
    { kind: "match", prompt: "Match the weather to the action.", pairs: [
      { left: "Rainy", right: "Take an umbrella" },
      { left: "Cold", right: "Wear a coat" },
      { left: "Sunny", right: "Wear sunglasses" },
    ] },
  ],
  "a0-20-routine": [
    { kind: "fill", prompt: "He ____ breakfast at 8. (eat)", answer: "eats" },
    { kind: "fill", prompt: "She ____ to school every day. (go)", answer: "goes" },
    { kind: "choice", prompt: "Choose the correct preposition: I work ____ the morning.", options: ["on", "in", "at"], answerIndex: 1 },
    { kind: "match", prompt: "Order the daily routine.", pairs: [
      { left: "Step 1", right: "I wake up" },
      { left: "Step 2", right: "I have breakfast" },
      { left: "Step 3", right: "I go to work" },
      { left: "Step 4", right: "I go to bed" },
    ] },
  ],
};
