import type { Lesson } from "./lessons";

// A1 curriculum based on the "English Fast-Track: A0 to A1" syllabus.
// 7 structured lessons mirroring the 7 logical steps.
export const lessonsA1: Lesson[] = [
  {
    id: "a1-01-sound-system",
    number: 1,
    title: "The System of Sound",
    topic: "Pronunciation & Survival",
    description:
      "Phonetic introduction, the alphabet, numbers 0–100, and essential survival phrases.",
    objectives: [
      "Recognise key English vowel and consonant sounds",
      "Spell names, emails and codes using the alphabet",
      "Use numbers 0–100 for prices, phones and age",
      "Use survival phrases to ask for help",
    ],
    explanation: [
      "English has several vowel and consonant sounds that don't exist in many other languages — for example the short /ɪ/ in 'sit' versus the long /iː/ in 'seat', and the 'th' sounds in 'think' (/θ/) and 'this' (/ð/).",
      "The alphabet is essential for spelling. When you give your name or email, you spell it letter by letter: 'A as in Apple, N as in November...'.",
      "Numbers 0–100 follow simple patterns: 13–19 end in -teen, 20–90 end in -ty. For prices say 'twelve dollars fifty' or 'twelve fifty'.",
      "Survival phrases like 'Sorry?', 'Can you help me?', 'How do you say… in English?' let you keep a conversation going when you don't understand.",
    ],
    vocabulary: [
      { word: "Sorry?", meaning: "Polite way to ask someone to repeat", example: "Sorry? Can you say that again?" },
      { word: "Can you help me?", meaning: "Asking for assistance", example: "Excuse me, can you help me, please?" },
      { word: "What is this?", meaning: "Asking the name of something", example: "What is this in English?" },
      { word: "Spell", meaning: "To say the letters of a word", example: "How do you spell your surname?" },
      { word: "Hundred", meaning: "100", example: "It costs one hundred euros." },
    ],
    dialogues: [
      {
        title: "At the reception",
        lines: [
          { speaker: "Clerk", text: "Good morning. Can I have your name, please?" },
          { speaker: "Ana", text: "Yes, it's Ana Ruiz." },
          { speaker: "Clerk", text: "Sorry? Can you spell the surname?" },
          { speaker: "Ana", text: "R - U - I - Z." },
          { speaker: "Clerk", text: "Thank you. And a phone number?" },
          { speaker: "Ana", text: "It's 600 245 198." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a1-02-existence-identity",
    number: 2,
    title: "Existence & Identity",
    topic: "Grammar Core I",
    description:
      "Subject pronouns, the verb 'to be', personal details, and possessive adjectives.",
    objectives: [
      "Use subject pronouns I, you, he, she, it, we, they",
      "Conjugate the verb 'to be' (am / is / are)",
      "Talk about nationality, profession and marital status",
      "Use possessive adjectives my, your, his, her",
    ],
    explanation: [
      "Subject pronouns replace the name of the person or thing doing the action: I (the speaker), you (the listener), he/she/it (one other person or thing), we (speaker + others), they (more than one).",
      "'To be' is the most important verb in English. It defines who or what something is: I am, you are, he/she/it is, we are, they are. Contractions are very common: I'm, you're, he's, she's, it's, we're, they're.",
      "We use 'to be' to give personal details: 'I'm Spanish', 'She's a doctor', 'They are married'.",
      "Possessive adjectives go before a noun and show ownership: my book, your phone, his car, her sister.",
    ],
    vocabulary: [
      { word: "Married / Single", meaning: "Marital status", example: "She is married. He is single." },
      { word: "Nationality", meaning: "The country you are from", example: "My nationality is Italian." },
      { word: "Profession / Job", meaning: "The work you do", example: "His profession is engineer." },
      { word: "His / Her", meaning: "Possessive for he / she", example: "His name is Tom. Her name is Lina." },
      { word: "Our / Their", meaning: "Possessive for we / they", example: "This is our house. That is their car." },
    ],
    dialogues: [
      {
        title: "Meeting a colleague",
        lines: [
          { speaker: "Mark", text: "Hi, I'm Mark. I'm from Canada." },
          { speaker: "Lina", text: "Nice to meet you, Mark. I'm Lina, I'm Brazilian." },
          { speaker: "Mark", text: "What's your job?" },
          { speaker: "Lina", text: "I'm a designer. And you?" },
          { speaker: "Mark", text: "I'm a teacher. My wife is a teacher too." },
        ],
      },
    ],
    duration: "35 min",
  },
  {
    id: "a1-03-objects-description",
    number: 3,
    title: "Objects & Description",
    topic: "Articles & Adjectives",
    description:
      "Articles a/an/the, plural nouns, demonstratives, and basic adjective order.",
    objectives: [
      "Choose between 'a', 'an' and 'the'",
      "Form regular and common irregular plurals",
      "Use this/that/these/those for distance",
      "Order basic adjectives (size + colour + noun)",
    ],
    explanation: [
      "Use 'a' before consonant sounds (a book, a university) and 'an' before vowel sounds (an apple, an hour). Use 'the' when the listener already knows which one: 'the sun', 'the book on the table'.",
      "Most nouns add -s in the plural (book → books). Words ending in -s, -x, -ch, -sh add -es (box → boxes). Some nouns are irregular: man → men, woman → women, child → children, person → people, foot → feet.",
      "Demonstratives show distance: 'this/these' for things near you, 'that/those' for things further away. 'This' and 'that' are singular; 'these' and 'those' are plural.",
      "When you use more than one adjective, English follows an order. A simple rule for A1 is: size + colour + noun — 'a small black bag', 'a big red car'.",
    ],
    vocabulary: [
      { word: "A / An", meaning: "Indefinite article", example: "I have a dog and an umbrella." },
      { word: "The", meaning: "Definite article", example: "The dog is in the garden." },
      { word: "These / Those", meaning: "Plural demonstratives", example: "These shoes are mine. Those are yours." },
      { word: "Children", meaning: "Plural of child", example: "The children are at school." },
      { word: "People", meaning: "Plural of person", example: "Many people are here today." },
    ],
    dialogues: [
      {
        title: "In a shop",
        lines: [
          { speaker: "Customer", text: "Excuse me, what is this?" },
          { speaker: "Shop assistant", text: "It's a small leather wallet." },
          { speaker: "Customer", text: "And those black bags?" },
          { speaker: "Shop assistant", text: "Those are new. They are very popular." },
        ],
      },
    ],
    duration: "30 min",
  },
  {
    id: "a1-04-routine-habits",
    number: 4,
    title: "Routine & Habits",
    topic: "Grammar Core II",
    description:
      "Present simple, high-frequency verbs, time and frequency, negatives and questions.",
    objectives: [
      "Form the present simple in all persons",
      "Use high-frequency verbs (have, go, do, eat, work, like)",
      "Talk about days, months, time and frequency",
      "Form negatives and questions with 'do/does'",
    ],
    explanation: [
      "We use the present simple for routines, habits and general truths: 'I work in Madrid', 'The sun rises in the east'.",
      "In the third person singular (he, she, it) the verb takes -s: I work → he works. Verbs ending in -o, -ch, -sh, -s, -x add -es (he goes, she watches).",
      "Adverbs of frequency (always, usually, often, sometimes, rarely, never) go before the main verb but after 'to be': 'I always drink coffee', 'She is never late'.",
      "Negatives and questions use the auxiliary 'do' (I/you/we/they) or 'does' (he/she/it). The main verb returns to its base form: 'I don't work on Sundays', 'Does she like tea?'.",
    ],
    vocabulary: [
      { word: "Always / Never", meaning: "100% / 0% frequency", example: "I always have breakfast. I never smoke." },
      { word: "Usually", meaning: "Most of the time", example: "He usually works from home." },
      { word: "Don't / Doesn't", meaning: "Negative auxiliary", example: "We don't live here. She doesn't drive." },
      { word: "Weekend", meaning: "Saturday and Sunday", example: "I relax at the weekend." },
      { word: "What time…?", meaning: "Asking for time", example: "What time do you start work?" },
    ],
    dialogues: [
      {
        title: "Talking about routine",
        lines: [
          { speaker: "Sam", text: "What time do you start work?" },
          { speaker: "Eva", text: "I usually start at nine." },
          { speaker: "Sam", text: "Do you work on Fridays?" },
          { speaker: "Eva", text: "Yes, but I don't work on Saturdays." },
          { speaker: "Sam", text: "What do you do at the weekend?" },
          { speaker: "Eva", text: "I often go to the cinema or see friends." },
        ],
      },
    ],
    duration: "40 min",
  },
  {
    id: "a1-05-physical-environment",
    number: 5,
    title: "The Physical Environment",
    topic: "Place & Directions",
    description:
      "Prepositions of place, there is/are, home and city vocabulary, and basic directions.",
    objectives: [
      "Use prepositions in, on, at, under, next to, between",
      "Use 'there is / there are' to describe a place",
      "Name rooms, furniture and public buildings",
      "Give and follow simple directions",
    ],
    explanation: [
      "Prepositions of place tell us where something is: 'in' (inside something), 'on' (on a surface), 'at' (a specific point), 'under' (below), 'next to' (beside), 'between' (in the middle of two things).",
      "Use 'there is' (singular) and 'there are' (plural) to say what exists in a place: 'There is a sofa in the living room', 'There are two windows'.",
      "Common rooms: kitchen, bedroom, bathroom, living room. Public buildings: bank, supermarket, hospital, post office, station.",
      "For directions use the imperative: 'Go straight on', 'Turn left at the bank', 'It's on your right'.",
    ],
    vocabulary: [
      { word: "Next to / Between", meaning: "Beside / in the middle of", example: "The bank is next to the café, between the hotel and the post office." },
      { word: "There is / There are", meaning: "To say what exists", example: "There is a park. There are three shops." },
      { word: "Turn left / right", meaning: "Change direction", example: "Turn left at the lights." },
      { word: "Go straight on", meaning: "Continue forward", example: "Go straight on for two blocks." },
      { word: "Opposite", meaning: "Facing, on the other side", example: "The cinema is opposite the station." },
    ],
    dialogues: [
      {
        title: "Asking for directions",
        lines: [
          { speaker: "Tourist", text: "Excuse me, is there a supermarket near here?" },
          { speaker: "Local", text: "Yes, there is one on King Street. Go straight on and turn right at the bank." },
          { speaker: "Tourist", text: "Is it far?" },
          { speaker: "Local", text: "No, it's about five minutes. It's between a pharmacy and a café." },
          { speaker: "Tourist", text: "Thank you very much!" },
        ],
      },
    ],
    duration: "35 min",
  },
  {
    id: "a1-06-social-functional",
    number: 6,
    title: "Social & Functional Survival",
    topic: "Family, Food & Shopping",
    description:
      "Family vocabulary, countable/uncountable food, shopping and clothing, ability with can/can't.",
    objectives: [
      "Describe your family tree",
      "Distinguish countable vs. uncountable nouns",
      "Order food and shop for clothes",
      "Talk about ability with can / can't",
    ],
    explanation: [
      "Family words: parents (mother, father), siblings (brother, sister), grandparents, aunt, uncle, cousin, husband, wife, son, daughter.",
      "Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot (water, rice, money) — use 'some', 'a lot of', 'a little'. Use 'How many…?' for countable and 'How much…?' for uncountable.",
      "Shopping language: 'How much is it?', 'Can I try it on?', 'Do you have it in size M?', 'I'll take it'. Colours and sizes are essential.",
      "'Can' expresses ability and possibility: 'I can swim', 'She can speak three languages'. The negative is 'can't' (cannot). The verb after 'can' is in the base form.",
    ],
    vocabulary: [
      { word: "Brother / Sister", meaning: "Male / female sibling", example: "I have one brother and two sisters." },
      { word: "Some / Any", meaning: "Indefinite quantity", example: "There is some milk. There aren't any eggs." },
      { word: "How much…? / How many…?", meaning: "Asking quantity (uncountable / countable)", example: "How much is this shirt? How many sizes do you have?" },
      { word: "Can / Can't", meaning: "Ability / inability", example: "I can cook, but I can't bake." },
      { word: "Try on", meaning: "Test clothes in a shop", example: "Can I try on these jeans?" },
    ],
    dialogues: [
      {
        title: "At a clothes shop",
        lines: [
          { speaker: "Customer", text: "Excuse me, how much is this jacket?" },
          { speaker: "Assistant", text: "It's forty-five euros. Do you want to try it on?" },
          { speaker: "Customer", text: "Yes, please. Do you have it in a smaller size?" },
          { speaker: "Assistant", text: "Yes, we have small and medium." },
          { speaker: "Customer", text: "Great, I'll take the medium." },
        ],
      },
      {
        title: "Talking about family",
        lines: [
          { speaker: "Joe", text: "Do you have any brothers or sisters?" },
          { speaker: "Mia", text: "Yes, I have one sister. She can play the piano very well." },
          { speaker: "Joe", text: "Nice! I have two brothers, but they can't sing at all." },
        ],
      },
    ],
    duration: "40 min",
  },
  {
    id: "a1-07-past-future",
    number: 7,
    title: "Looking Back & Ahead",
    topic: "Past & Future",
    description:
      "Was/were, past simple basics, future intent with 'going to', and a full A1 self-introduction.",
    objectives: [
      "Talk about the past with was / were",
      "Use the past simple with regular and key irregular verbs",
      "Talk about plans with 'going to'",
      "Give a complete self-introduction",
    ],
    explanation: [
      "'Was' (I/he/she/it) and 'were' (you/we/they) are the past of 'to be'. Use them for past states: 'I was tired yesterday', 'They were at the party'.",
      "Regular past simple verbs add -ed (work → worked, play → played). Many common verbs are irregular and must be memorised: go → went, see → saw, have → had, do → did, eat → ate, make → made.",
      "For questions and negatives in the past simple use 'did / didn't' + base verb: 'Did you go?', 'I didn't see her'.",
      "'Going to' expresses future plans and intentions: 'I am going to study English tonight', 'They are going to travel next month'. Form: subject + am/is/are + going to + base verb.",
      "A1 capstone: combine everything to introduce yourself — name, nationality, job, family, routine, what you did yesterday, and what you are going to do next weekend.",
    ],
    vocabulary: [
      { word: "Yesterday", meaning: "The day before today", example: "I was at home yesterday." },
      { word: "Went / Saw", meaning: "Past of go / see", example: "I went to the gym and saw my friend." },
      { word: "Did / Didn't", meaning: "Past auxiliary", example: "Did you eat? I didn't have time." },
      { word: "Going to", meaning: "Planned future", example: "We are going to visit Paris in May." },
      { word: "Last week / Next week", meaning: "Past / future time markers", example: "I worked a lot last week. I am going to rest next week." },
    ],
    dialogues: [
      {
        title: "Weekend talk",
        lines: [
          { speaker: "Pat", text: "What did you do last weekend?" },
          { speaker: "Sam", text: "I went to the mountains with my family. It was beautiful." },
          { speaker: "Pat", text: "Nice! What are you going to do next weekend?" },
          { speaker: "Sam", text: "I'm going to stay at home and study English." },
        ],
      },
      {
        title: "A1 capstone: self-introduction",
        lines: [
          { speaker: "Eva", text: "Hi! My name is Eva and I'm from Portugal. I'm 28 years old and I'm a nurse." },
          { speaker: "Eva", text: "I live in Lisbon with my partner. We have a small dog called Bobi." },
          { speaker: "Eva", text: "I usually start work at eight and finish at four. In my free time I like running and reading." },
          { speaker: "Eva", text: "Yesterday I went to the beach with friends. Next month I'm going to visit my sister in Berlin." },
        ],
      },
    ],
    duration: "45 min",
  },
];
