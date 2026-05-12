export type Gloss = { word: string; meaning: string };

export type Story = {
  id: string;
  level: "A0" | "A1";
  title: string;
  minutes: number;
  summary: string;
  /** Body text. Words to gloss are wrapped in [[word|meaning]] markers. */
  body: string;
  questions: { q: string; options: string[]; answer: number }[];
};

export const stories: Story[] = [
  {
    id: "anna-morning",
    level: "A0",
    title: "Anna's morning",
    minutes: 1,
    summary: "A simple day-in-the-life story using present simple and basic vocabulary.",
    body: `Anna is a [[student|a person who studies]]. She lives in a small [[flat|apartment]] in London.
Every morning she [[wakes up|stops sleeping]] at seven o'clock. She drinks [[tea|hot drink with leaves]] and eats [[toast|grilled bread]] with butter.
At eight o'clock she walks to the [[bus stop|place where the bus waits]]. The bus is often [[late|not on time]], but Anna is never [[angry|very upset]]. She listens to music and reads a book.
At nine o'clock she is at school. She likes English and she has a very [[kind|nice and friendly]] teacher.`,
    questions: [
      { q: "Where does Anna live?", options: ["In a big house", "In a small flat", "In a hotel"], answer: 1 },
      { q: "What does she eat for breakfast?", options: ["Eggs", "Toast with butter", "Cereal"], answer: 1 },
      { q: "How does she feel about the late bus?", options: ["Angry", "Sad", "Not angry"], answer: 2 },
    ],
  },
  {
    id: "tom-shopping",
    level: "A0",
    title: "Tom goes shopping",
    minutes: 1,
    summary: "Tom buys things at the supermarket. Practice numbers, food and prices.",
    body: `Tom needs food for the [[weekend|Saturday and Sunday]]. He goes to the [[supermarket|big food shop]] near his house.
He buys [[bread|food made from flour]], milk, [[cheese|food from milk]] and apples. He also buys a small [[cake|sweet food for parties]] for his sister.
At the [[checkout|place where you pay]] the woman says, "That's twelve pounds, please." Tom pays with his [[card|small piece of plastic for paying]].
"Thank you. Have a [[nice|good]] day!" she says.`,
    questions: [
      { q: "Where does Tom go?", options: ["To the bakery", "To the supermarket", "To a restaurant"], answer: 1 },
      { q: "Who is the cake for?", options: ["His mother", "His sister", "Himself"], answer: 1 },
      { q: "How does he pay?", options: ["Cash", "Card", "Phone"], answer: 1 },
    ],
  },
  {
    id: "weekend-park",
    level: "A1",
    title: "A weekend in the park",
    minutes: 2,
    summary: "Lara and her friends spend Saturday in the park. Past simple narration.",
    body: `Last Saturday was [[sunny|with a lot of sun]] and warm. Lara and her two friends [[decided|chose to do]] to spend the day in the park.
They [[brought|past of bring]] sandwiches, fruit and a big bottle of water. They sat on a [[blanket|big soft cloth]] under a tall tree.
After lunch they played [[frisbee|flying disc game]] and laughed a lot. Lara's dog Max [[chased|ran after]] every ball, but he never wanted to give it back.
In the [[afternoon|time after midday]] they walked around the lake and watched the [[ducks|small water birds]]. When the sun [[set|went down]], they were tired but very [[happy|feeling good]].`,
    questions: [
      { q: "What was the weather like?", options: ["Cold and rainy", "Sunny and warm", "Cloudy"], answer: 1 },
      { q: "What did Max do?", options: ["Slept all day", "Chased every ball", "Ate the sandwiches"], answer: 1 },
      { q: "How did they feel at the end?", options: ["Bored", "Tired but happy", "Angry"], answer: 1 },
    ],
  },
  {
    id: "new-job",
    level: "A1",
    title: "Maria's new job",
    minutes: 2,
    summary: "Maria starts a new job in a café. Present simple, daily routine, work vocabulary.",
    body: `Maria is twenty-three years old and she just started a new job in a small café in the [[city centre|middle of the city]].
She works five days a week, from eight in the morning to four in the [[afternoon|after midday]]. Her favourite part of the job is making [[coffee|hot dark drink]] for the customers.
The café is always [[busy|with many people]] in the morning. People come for breakfast before work. Maria is fast and she remembers every [[order|what customers ask for]].
Her [[boss|the person in charge]] is happy with her work. "You are a great [[barista|coffee maker]]," he says. Maria [[smiles|makes a happy face]] and starts the next coffee.`,
    questions: [
      { q: "What time does Maria finish work?", options: ["At 2 pm", "At 4 pm", "At 6 pm"], answer: 1 },
      { q: "When is the café busy?", options: ["In the morning", "At night", "On weekends only"], answer: 0 },
      { q: "What does her boss think of her?", options: ["He is angry", "He is happy", "He doesn't care"], answer: 1 },
    ],
  },
  {
    id: "lost-in-rome",
    level: "A1",
    title: "Lost in Rome",
    minutes: 2,
    summary: "A short travel story with directions, places and asking for help.",
    body: `Daniel is on holiday in Rome. He has a [[map|drawing of streets and places]], but he is [[lost|doesn't know where he is]].
He wants to find the famous [[fountain|where water comes out]], but every street looks the same. He stops a friendly woman and asks, "[[Excuse me|polite way to get attention]], where is the Trevi Fountain?"
The woman smiles. "Go [[straight on|continue forward]] for two minutes, then turn [[right|opposite of left]]. It's [[next to|very close to]] a small church."
Daniel says "Thank you very much!" and walks fast. Five minutes later he sees the fountain. It is more [[beautiful|very nice to look at]] than in the photos.`,
    questions: [
      { q: "What is Daniel looking for?", options: ["A church", "A fountain", "A restaurant"], answer: 1 },
      { q: "Which way does he turn?", options: ["Left", "Right", "Back"], answer: 1 },
      { q: "How does he feel about the fountain?", options: ["Disappointed", "Bored", "Impressed"], answer: 2 },
    ],
  },
];
