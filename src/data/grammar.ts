export type GrammarExample = { en: string; note?: string };

export type GrammarTopic = {
  id: string;
  title: string;
  summary: string;
  explanation: string[];
  forms?: { label: string; value: string }[];
  examples: GrammarExample[];
};

export type GrammarSection = {
  level: "A0" | "A1";
  title: string;
  description: string;
  topics: GrammarTopic[];
};

export const grammarSections: GrammarSection[] = [
  {
    level: "A0",
    title: "A0 — Absolute beginner grammar",
    description:
      "The very first building blocks of English: pronouns, the verb to be, articles, plurals, and simple present sentences.",
    topics: [
      {
        id: "subject-pronouns",
        title: "Subject pronouns",
        summary: "I, you, he, she, it, we, they — the words that replace the subject of a sentence.",
        explanation: [
          "Subject pronouns tell us who is doing the action. English always needs a subject before the verb (we don't drop it like in Spanish or Italian).",
          "Use 'it' for things and animals when we don't know or care about the gender.",
        ],
        forms: [
          { label: "Singular", value: "I, you, he, she, it" },
          { label: "Plural", value: "we, you, they" },
        ],
        examples: [
          { en: "I am a student." },
          { en: "She is from Brazil." },
          { en: "They are my friends." },
        ],
      },
      {
        id: "verb-to-be",
        title: "Verb 'to be' — present",
        summary: "am / is / are — the most important verb in English.",
        explanation: [
          "'To be' is used for identity, nationality, age, feelings, jobs and locations.",
          "Contractions are very common in speech: I'm, you're, he's, she's, it's, we're, they're.",
        ],
        forms: [
          { label: "I", value: "am  →  I'm" },
          { label: "you / we / they", value: "are  →  you're, we're, they're" },
          { label: "he / she / it", value: "is  →  he's, she's, it's" },
        ],
        examples: [
          { en: "I am tired." },
          { en: "He is a teacher." },
          { en: "We are at home." },
        ],
      },
      {
        id: "to-be-questions-negatives",
        title: "'To be' — questions and negatives",
        summary: "Invert the subject and verb for questions; add 'not' for negatives.",
        explanation: [
          "Questions: put the verb before the subject. Are you ready? Is she Italian?",
          "Negatives: add 'not' after the verb. I am not / I'm not, he is not / isn't, they are not / aren't.",
        ],
        examples: [
          { en: "Are you a doctor? — No, I'm not." },
          { en: "Is he at school? — Yes, he is." },
          { en: "They aren't at home." },
        ],
      },
      {
        id: "articles",
        title: "Articles: a, an, the",
        summary: "Use 'a/an' for one of something general, 'the' for something specific.",
        explanation: [
          "Use 'a' before consonant sounds: a book, a car, a university (sounds like 'you').",
          "Use 'an' before vowel sounds: an apple, an hour (silent h).",
          "Use 'the' when both speakers know which one: the sun, the kitchen (in our house).",
        ],
        examples: [
          { en: "I have a cat. The cat is black." },
          { en: "She is an engineer." },
          { en: "Open the door, please." },
        ],
      },
      {
        id: "plural-nouns",
        title: "Plural nouns",
        summary: "Add -s, -es, or use an irregular form.",
        explanation: [
          "Most nouns: add -s → book / books, car / cars.",
          "Nouns ending in -s, -sh, -ch, -x, -z: add -es → bus / buses, watch / watches.",
          "Common irregulars: man → men, woman → women, child → children, foot → feet, person → people.",
        ],
        examples: [
          { en: "I have two brothers and one sister." },
          { en: "There are six children in the class." },
        ],
      },
      {
        id: "this-that",
        title: "this / that / these / those",
        summary: "Demonstratives — point to things near or far.",
        explanation: [
          "this / these → near the speaker.",
          "that / those → far from the speaker.",
        ],
        forms: [
          { label: "Singular", value: "this (near) / that (far)" },
          { label: "Plural", value: "these (near) / those (far)" },
        ],
        examples: [
          { en: "This is my phone." },
          { en: "Those are my keys on the table." },
        ],
      },
      {
        id: "possessive-adjectives",
        title: "Possessive adjectives",
        summary: "my, your, his, her, its, our, their.",
        explanation: [
          "Possessive adjectives go before a noun. They never change for plural: my book / my books.",
        ],
        examples: [
          { en: "My name is Anna." },
          { en: "What is your phone number?" },
          { en: "Their house is big." },
        ],
      },
      {
        id: "have-got",
        title: "have / have got",
        summary: "Talk about possession, family and features.",
        explanation: [
          "'Have' and 'have got' mean the same thing. 'Have got' is more common in British English.",
          "Negative: I don't have / I haven't got. Question: Do you have…? / Have you got…?",
        ],
        examples: [
          { en: "I have two brothers." },
          { en: "She has got brown eyes." },
          { en: "Do you have a pen?" },
        ],
      },
      {
        id: "there-is-are",
        title: "there is / there are",
        summary: "Say what exists in a place.",
        explanation: [
          "Use 'there is' for one thing and 'there are' for more than one.",
          "Negative: there isn't / there aren't. Question: Is there…? Are there…?",
        ],
        examples: [
          { en: "There is a park near my house." },
          { en: "There are four people in my family." },
          { en: "Is there a bank near here?" },
        ],
      },
      {
        id: "sentence-structure",
        title: "Basic sentence structure (SVO)",
        summary: "English sentences follow Subject + Verb + Object.",
        explanation: [
          "Most English sentences put the subject first, then the verb, then the object.",
          "Unlike some languages, English does not normally drop the subject and the word order is quite fixed.",
        ],
        forms: [
          { label: "Pattern", value: "Subject + Verb + Object" },
          { label: "Example", value: "The boy (S) eats (V) an apple (O)." },
        ],
        examples: [
          { en: "I love music." },
          { en: "She drives a red car." },
          { en: "We watch films on Fridays." },
        ],
      },
      {
        id: "numbers-time",
        title: "Numbers, days and time",
        summary: "Count, tell the time and say the date.",
        explanation: [
          "Cardinal numbers: one, two, three… Ordinal: first, second, third…",
          "Time: It's seven o'clock. It's half past nine. It's a quarter to six.",
          "Days are always capitalised: Monday, Tuesday…",
        ],
        examples: [
          { en: "It's ten o'clock." },
          { en: "My birthday is on the third of May." },
        ],
      },
    ],
  },
  {
    level: "A1",
    title: "A1 — Elementary grammar",
    description:
      "Build on the basics: present simple and continuous, past simple, can/can't, prepositions, and question words.",
    topics: [
      {
        id: "present-simple",
        title: "Present simple",
        summary: "Habits, routines, facts and general truths.",
        explanation: [
          "Form: subject + base verb. Add -s/-es with he, she, it.",
          "Negative: don't / doesn't + base verb. Question: Do/Does + subject + base verb?",
          "Common time words: always, usually, often, sometimes, never, every day.",
        ],
        forms: [
          { label: "+ ", value: "I work / He works" },
          { label: "− ", value: "I don't work / He doesn't work" },
          { label: "? ", value: "Do you work? / Does he work?" },
        ],
        examples: [
          { en: "I drink coffee every morning." },
          { en: "She doesn't like fish." },
          { en: "Do you live in London?" },
        ],
      },
      {
        id: "present-continuous",
        title: "Present continuous",
        summary: "Actions happening right now or around now.",
        explanation: [
          "Form: am / is / are + verb-ing.",
          "Use it for actions in progress now (I'm reading) or temporary situations (She's living in Paris this year).",
          "Time words: now, right now, at the moment, today, this week.",
        ],
        forms: [
          { label: "+ ", value: "I am working / She is working" },
          { label: "− ", value: "I'm not working / She isn't working" },
          { label: "? ", value: "Are you working? / Is she working?" },
        ],
        examples: [
          { en: "I'm studying English right now." },
          { en: "What are you doing?" },
        ],
      },
      {
        id: "simple-vs-continuous",
        title: "Present simple vs continuous",
        summary: "Routine vs. happening now.",
        explanation: [
          "Present simple → habits and facts: I work in a bank.",
          "Present continuous → now or temporary: I'm working from home this week.",
          "Stative verbs (like, want, know, have for possession) are normally not used in continuous.",
        ],
        examples: [
          { en: "He plays tennis on Sundays. (routine)" },
          { en: "He is playing tennis now. (now)" },
        ],
      },
      {
        id: "can",
        title: "can / can't — ability and permission",
        summary: "Talk about what you are able or allowed to do.",
        explanation: [
          "Form: can / can't + base verb (no -s, no 'to').",
          "Question: Can you swim? Short answer: Yes, I can. / No, I can't.",
        ],
        examples: [
          { en: "I can speak two languages." },
          { en: "She can't drive." },
          { en: "Can I open the window?" },
        ],
      },
      {
        id: "past-simple-be",
        title: "Past simple — 'to be'",
        summary: "was / were for past states and locations.",
        explanation: [
          "I / he / she / it → was. you / we / they → were.",
          "Negative: wasn't / weren't. Question: Was he…? Were they…?",
        ],
        examples: [
          { en: "I was at home yesterday." },
          { en: "They were tired after the trip." },
          { en: "Were you at the party?" },
        ],
      },
      {
        id: "past-simple-regular",
        title: "Past simple — regular verbs",
        summary: "Add -ed to talk about finished past actions.",
        explanation: [
          "Form: verb + -ed. Spelling: study → studied, stop → stopped, like → liked.",
          "Negative and question use 'did' + base verb (no -ed).",
          "Time words: yesterday, last week, in 2020, two days ago.",
        ],
        forms: [
          { label: "+ ", value: "I worked / She worked" },
          { label: "− ", value: "I didn't work" },
          { label: "? ", value: "Did you work?" },
        ],
        examples: [
          { en: "I watched a film last night." },
          { en: "She didn't call me." },
          { en: "Did they arrive on time?" },
        ],
      },
      {
        id: "past-simple-irregular",
        title: "Past simple — irregular verbs",
        summary: "Common irregular forms to memorise.",
        explanation: [
          "Many frequent verbs are irregular and must be learned by heart.",
          "Negative and question still use 'did' + base form.",
        ],
        forms: [
          { label: "go / went", value: "I went to Rome." },
          { label: "have / had", value: "We had lunch at 1." },
          { label: "see / saw", value: "I saw her yesterday." },
          { label: "do / did", value: "He did his homework." },
          { label: "make / made", value: "She made a cake." },
        ],
        examples: [
          { en: "I went to the cinema on Saturday." },
          { en: "Did you see the message?" },
        ],
      },
      {
        id: "question-words",
        title: "Question words",
        summary: "what, where, when, who, why, how.",
        explanation: [
          "Put the question word first, then the auxiliary, then the subject: Where do you live?",
          "How can combine with other words: How old, How much, How many, How often.",
        ],
        examples: [
          { en: "Where are you from?" },
          { en: "What do you do?" },
          { en: "How often do you exercise?" },
        ],
      },
      {
        id: "prepositions-place",
        title: "Prepositions of place",
        summary: "in, on, at, under, between, next to.",
        explanation: [
          "in → inside (in the room, in London).",
          "on → on a surface (on the table, on the wall).",
          "at → at a point (at the door, at the bus stop).",
        ],
        examples: [
          { en: "The keys are on the table." },
          { en: "She lives in Madrid." },
          { en: "I'll meet you at the station." },
        ],
      },
      {
        id: "prepositions-time",
        title: "Prepositions of time",
        summary: "in, on, at for time expressions.",
        explanation: [
          "in → months, years, seasons, parts of the day: in May, in 2024, in the morning.",
          "on → days and dates: on Monday, on 5 May.",
          "at → exact times and night: at 7 o'clock, at night, at the weekend.",
        ],
        examples: [
          { en: "I was born in 1998." },
          { en: "We meet on Fridays." },
          { en: "The film starts at 8 pm." },
        ],
      },
      {
        id: "object-pronouns",
        title: "Object pronouns",
        summary: "me, you, him, her, it, us, them.",
        explanation: [
          "Object pronouns come after a verb or preposition: She likes him. Give it to me.",
        ],
        forms: [
          { label: "Subject → Object", value: "I → me, you → you, he → him, she → her, it → it, we → us, they → them" },
        ],
        examples: [
          { en: "I love them." },
          { en: "Can you help me?" },
        ],
      },
      {
        id: "countable-uncountable",
        title: "Countable & uncountable nouns",
        summary: "some / any / much / many / a lot of.",
        explanation: [
          "Countable: book(s), apple(s) → many, a few.",
          "Uncountable: water, money, information → much, a little. No plural form.",
          "'Some' for + sentences and offers; 'any' for − and ?: I have some sugar. Do you have any milk?",
        ],
        examples: [
          { en: "How many brothers do you have?" },
          { en: "How much water do you drink?" },
          { en: "There isn't any bread." },
        ],
      },
      {
        id: "going-to",
        title: "Future: 'be going to'",
        summary: "Plans and intentions for the future.",
        explanation: [
          "Form: am / is / are + going to + base verb.",
          "Use it for plans you have already decided and for predictions based on what you can see.",
        ],
        examples: [
          { en: "I'm going to visit my grandma on Sunday." },
          { en: "Look at those clouds — it's going to rain." },
          { en: "What are you going to do this weekend?" },
        ],
      },
      {
        id: "comparatives",
        title: "Comparatives & superlatives",
        summary: "bigger than, the biggest.",
        explanation: [
          "Short adjectives: add -er / -est: small → smaller → the smallest.",
          "Long adjectives (2+ syllables): more / the most: interesting → more interesting → the most interesting.",
          "Irregular: good → better → the best, bad → worse → the worst.",
        ],
        examples: [
          { en: "My car is faster than yours." },
          { en: "This is the best pizza in town." },
        ],
      },
      {
        id: "adverbs-of-frequency",
        title: "Adverbs of frequency",
        summary: "always, usually, often, sometimes, never — how often things happen.",
        explanation: [
          "Adverbs of frequency tell us how often an action happens.",
          "They go BEFORE the main verb, but AFTER the verb 'to be'.",
          "Common ones, from 100% to 0%: always, usually, often, sometimes, rarely, never.",
        ],
        forms: [
          { label: "Before main verb", value: "I always drink water." },
          { label: "After 'to be'", value: "She is never late." },
        ],
        examples: [
          { en: "We sometimes watch movies." },
          { en: "He usually walks to work." },
          { en: "They are often tired in the morning." },
        ],
      },
      {
        id: "possessive-s",
        title: "Possessive 's (Saxon genitive)",
        summary: "Show that something belongs to a person.",
        explanation: [
          "Add 's to a person's name or noun to show possession: John's car = the car of John.",
          "If a name already ends in -s (like James), you can just add an apostrophe: James' house.",
          "For plural nouns ending in -s, add only the apostrophe: my parents' house.",
        ],
        examples: [
          { en: "John's car is new." },
          { en: "My teacher's book is on the desk." },
          { en: "The dog's water bowl is empty." },
        ],
      },
      {
        id: "adjective-opposites",
        title: "Common adjective opposites",
        summary: "Useful pairs for describing people, places and things.",
        explanation: [
          "Learning adjectives in opposite pairs helps you remember them and describe the world more easily.",
        ],
        forms: [
          { label: "Size", value: "big ↔ small" },
          { label: "Temperature", value: "hot ↔ cold" },
          { label: "Mood", value: "happy ↔ sad" },
          { label: "Age", value: "new ↔ old" },
          { label: "Speed", value: "fast ↔ slow" },
          { label: "Price", value: "cheap ↔ expensive" },
          { label: "Difficulty", value: "easy ↔ difficult" },
          { label: "Quality", value: "good ↔ bad" },
        ],
        examples: [
          { en: "This bag is cheap, but that one is very expensive." },
          { en: "The test was easy for me but difficult for my friend." },
        ],
      },
    ],
  },
];
