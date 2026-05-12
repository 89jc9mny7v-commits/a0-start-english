export type Phrase = {
  en: string;
  meaning: string;
  example?: string;
};

export type PhraseCategory = {
  id: string;
  title: string;
  description: string;
  phrases: Phrase[];
};

export type PhraseSection = {
  level: "A0" | "A1";
  title: string;
  description: string;
  categories: PhraseCategory[];
};

export const phraseSections: PhraseSection[] = [
  {
    level: "A0",
    title: "A0 · Survival expressions",
    description: "The first phrases you need to greet people, be polite and handle simple situations.",
    categories: [
      {
        id: "greetings",
        title: "Greetings & goodbyes",
        description: "Say hello and goodbye at any time of day.",
        phrases: [
          { en: "Hello / Hi", meaning: "Standard greeting", example: "Hi! How are you?" },
          { en: "Good morning", meaning: "Before 12:00", example: "Good morning, Anna." },
          { en: "Good afternoon", meaning: "12:00 – 18:00" },
          { en: "Good evening", meaning: "After 18:00" },
          { en: "Goodbye / Bye", meaning: "When leaving" },
          { en: "See you later", meaning: "See you soon" },
          { en: "See you tomorrow", meaning: "Until tomorrow" },
          { en: "Good night", meaning: "Before going to bed" },
        ],
      },
      {
        id: "politeness",
        title: "Please, thanks & sorry",
        description: "Basic polite expressions.",
        phrases: [
          { en: "Please", meaning: "Polite request", example: "A coffee, please." },
          { en: "Thank you / Thanks", meaning: "Show gratitude" },
          { en: "Thank you very much", meaning: "Strong thanks" },
          { en: "You're welcome", meaning: "Reply to thank you" },
          { en: "Sorry", meaning: "Apology", example: "Sorry, I'm late." },
          { en: "Excuse me", meaning: "Get attention or pass by" },
          { en: "No problem", meaning: "It's okay" },
        ],
      },
      {
        id: "introductions",
        title: "Introducing yourself",
        description: "Give and ask for basic personal information.",
        phrases: [
          { en: "What's your name?", meaning: "Ask for a name" },
          { en: "My name is …", meaning: "Give your name", example: "My name is Tom." },
          { en: "I'm …", meaning: "Short form", example: "I'm Tom." },
          { en: "Nice to meet you", meaning: "First meeting" },
          { en: "Where are you from?", meaning: "Ask about country" },
          { en: "I'm from …", meaning: "Say your country", example: "I'm from Spain." },
          { en: "How old are you?", meaning: "Ask about age" },
          { en: "I'm … years old", meaning: "Give your age" },
        ],
      },
      {
        id: "feelings",
        title: "How are you?",
        description: "Ask and answer about feelings.",
        phrases: [
          { en: "How are you?", meaning: "Standard question" },
          { en: "I'm fine, thanks", meaning: "Standard answer" },
          { en: "I'm good", meaning: "Informal answer" },
          { en: "Not bad", meaning: "Okay" },
          { en: "And you?", meaning: "Return the question" },
          { en: "I'm tired", meaning: "Need rest" },
          { en: "I'm happy / sad", meaning: "Feelings" },
        ],
      },
      {
        id: "classroom",
        title: "In the classroom",
        description: "Useful phrases when learning English.",
        phrases: [
          { en: "I don't understand", meaning: "Ask for help" },
          { en: "Can you repeat, please?", meaning: "Ask again" },
          { en: "How do you say … in English?", meaning: "Ask for a word" },
          { en: "What does … mean?", meaning: "Ask for meaning" },
          { en: "I don't know", meaning: "No information" },
          { en: "Slowly, please", meaning: "Ask to speak slower" },
        ],
      },
      {
        id: "yesno",
        title: "Yes / No & basic answers",
        description: "Short replies you'll use every day.",
        phrases: [
          { en: "Yes / No", meaning: "Basic answer" },
          { en: "Of course", meaning: "Yes, sure" },
          { en: "Sure", meaning: "Okay" },
          { en: "Maybe", meaning: "Not sure" },
          { en: "I think so", meaning: "Probably yes" },
          { en: "I don't think so", meaning: "Probably no" },
        ],
      },
    ],
  },
  {
    level: "A1",
    title: "A1 · Everyday expressions",
    description: "Phrases to handle common situations: shopping, eating out, travelling and small talk.",
    categories: [
      {
        id: "smalltalk",
        title: "Small talk",
        description: "Keep simple conversations going.",
        phrases: [
          { en: "How's it going?", meaning: "Informal: how are you?" },
          { en: "What's up?", meaning: "Very informal greeting" },
          { en: "Long time no see", meaning: "We haven't met for a while" },
          { en: "Have a nice day", meaning: "Friendly goodbye" },
          { en: "Take care", meaning: "Friendly goodbye" },
          { en: "What do you do?", meaning: "Ask about job" },
          { en: "I work as a …", meaning: "Say your job", example: "I work as a teacher." },
          { en: "What do you do in your free time?", meaning: "Ask about hobbies" },
        ],
      },
      {
        id: "shopping",
        title: "Shopping",
        description: "Buy things in a shop.",
        phrases: [
          { en: "How much is it?", meaning: "Ask the price" },
          { en: "How much are they?", meaning: "Ask price (plural)" },
          { en: "Can I have …, please?", meaning: "Ask for an item", example: "Can I have a bag, please?" },
          { en: "I'd like …", meaning: "Polite request", example: "I'd like a small coffee." },
          { en: "Do you have …?", meaning: "Ask for availability" },
          { en: "I'll take it", meaning: "I want to buy this" },
          { en: "Can I pay by card?", meaning: "Ask about payment" },
          { en: "Here you are", meaning: "When giving something" },
        ],
      },
      {
        id: "restaurant",
        title: "At a café or restaurant",
        description: "Order food and drink.",
        phrases: [
          { en: "A table for two, please", meaning: "Ask for a table" },
          { en: "Can I see the menu?", meaning: "Ask for the menu" },
          { en: "I'll have the …", meaning: "Order food", example: "I'll have the chicken, please." },
          { en: "What do you recommend?", meaning: "Ask for advice" },
          { en: "Can I have the bill, please?", meaning: "Ask to pay" },
          { en: "It's delicious", meaning: "The food is great" },
          { en: "I'm vegetarian", meaning: "Diet information" },
          { en: "Cheers!", meaning: "When drinking together" },
        ],
      },
      {
        id: "directions",
        title: "Directions & travel",
        description: "Find your way and travel around.",
        phrases: [
          { en: "Excuse me, where is …?", meaning: "Ask for a place" },
          { en: "How do I get to …?", meaning: "Ask the way" },
          { en: "Is it far?", meaning: "Ask about distance" },
          { en: "Turn left / right", meaning: "Direction" },
          { en: "Go straight on", meaning: "Continue forward" },
          { en: "It's on your left", meaning: "Position" },
          { en: "Next to / opposite / near", meaning: "Position words" },
          { en: "One ticket to …, please", meaning: "Buy a ticket" },
        ],
      },
      {
        id: "time",
        title: "Time & dates",
        description: "Talk about time, days and plans.",
        phrases: [
          { en: "What time is it?", meaning: "Ask the time" },
          { en: "It's half past seven", meaning: "7:30" },
          { en: "What day is it today?", meaning: "Ask the day" },
          { en: "See you on Monday", meaning: "Plan a meeting" },
          { en: "Are you free tomorrow?", meaning: "Invite someone" },
          { en: "I'm busy", meaning: "Not available" },
          { en: "Let's meet at …", meaning: "Suggest a time/place", example: "Let's meet at 8 pm." },
        ],
      },
      {
        id: "opinions",
        title: "Likes & opinions",
        description: "Express what you like and think.",
        phrases: [
          { en: "I like …", meaning: "Positive feeling", example: "I like coffee." },
          { en: "I don't like …", meaning: "Negative feeling" },
          { en: "I love …", meaning: "Strong like" },
          { en: "I hate …", meaning: "Strong dislike" },
          { en: "I prefer … to …", meaning: "Choose between two", example: "I prefer tea to coffee." },
          { en: "I think (that) …", meaning: "Give an opinion" },
          { en: "I agree / I don't agree", meaning: "React to an opinion" },
          { en: "Me too / Me neither", meaning: "Same for me (positive / negative)" },
        ],
      },
      {
        id: "help",
        title: "Asking for help",
        description: "Ask for help in everyday situations.",
        phrases: [
          { en: "Can you help me, please?", meaning: "General request" },
          { en: "Could you …?", meaning: "Polite request", example: "Could you open the window?" },
          { en: "Do you speak English?", meaning: "Check the language" },
          { en: "I'm lost", meaning: "I don't know where I am" },
          { en: "I need a doctor", meaning: "Medical help" },
          { en: "Call the police!", meaning: "Emergency" },
          { en: "Watch out!", meaning: "Be careful!" },
        ],
      },
      {
        id: "phone",
        title: "On the phone",
        description: "Basic phone language.",
        phrases: [
          { en: "Hello, this is …", meaning: "Say who is calling" },
          { en: "Can I speak to …?", meaning: "Ask for someone" },
          { en: "Just a moment, please", meaning: "Wait, please" },
          { en: "Can I leave a message?", meaning: "Leave information" },
          { en: "Sorry, wrong number", meaning: "Wrong call" },
          { en: "I'll call you back", meaning: "Return the call later" },
        ],
      },
    ],
  },
];
