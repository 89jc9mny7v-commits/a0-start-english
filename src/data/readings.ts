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
    id: "my-family",
    level: "A0",
    title: "My family",
    minutes: 1,
    summary: "A short description of family members. Practice possessives and to be.",
    body: `My name is Sara. I have a small [[family|parents and children together]]. My [[father|male parent]] is a doctor and my [[mother|female parent]] is a teacher.
I have one [[brother|male sibling]]. His name is Leo and he is ten years old. We have a [[cat|small pet animal]] called Mimi.
We live in a [[house|building where people live]] with a small [[garden|place with plants outside a house]]. On Sundays we eat lunch [[together|with each other]].
I love my family very much.`,
    questions: [
      { q: "What is the mother's job?", options: ["Doctor", "Teacher", "Nurse"], answer: 1 },
      { q: "How old is Leo?", options: ["Eight", "Ten", "Twelve"], answer: 1 },
      { q: "What is the cat's name?", options: ["Mimi", "Leo", "Sara"], answer: 0 },
    ],
  },
  {
    id: "rainy-day",
    level: "A0",
    title: "A rainy day",
    minutes: 1,
    summary: "A short story about staying home on a rainy day. Weather and rooms vocabulary.",
    body: `It is Saturday and it is [[raining|water falling from the sky]]. Ben does not want to go [[outside|not in the house]].
He stays in the [[living room|room with sofas and TV]]. He drinks hot [[chocolate|sweet brown drink]] and watches a film on TV.
His [[dog|pet animal that barks]] sleeps on the [[sofa|long soft seat]] next to him. Outside, the [[wind|moving air]] is strong.
Ben feels [[warm|not cold]] and happy at home.`,
    questions: [
      { q: "What is the weather like?", options: ["Sunny", "Snowy", "Rainy"], answer: 2 },
      { q: "What does Ben drink?", options: ["Tea", "Hot chocolate", "Coffee"], answer: 1 },
      { q: "Where is the dog?", options: ["On the floor", "On the sofa", "In the garden"], answer: 1 },
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
  {
    id: "birthday-surprise",
    level: "A1",
    title: "A birthday surprise",
    minutes: 2,
    summary: "Friends prepare a surprise party. Past simple and party vocabulary.",
    body: `It was Emma's [[birthday|the day you were born]] last Friday. Her friends wanted to make a [[surprise|something you don't expect]] party.
After work, they went to her flat with a big [[cake|sweet food for celebrations]] and many [[balloons|colourful air bags]]. They turned off the lights and waited [[quietly|without making noise]].
When Emma opened the door, everyone shouted "[[Happy birthday|greeting on a birthday]]!" Emma was so [[surprised|not expecting it]] that she almost dropped her bag.
She [[laughed|made a happy sound]], hugged her friends, and said it was the best birthday of her life.`,
    questions: [
      { q: "When was Emma's birthday?", options: ["Saturday", "Friday", "Sunday"], answer: 1 },
      { q: "What did the friends bring?", options: ["A cake and balloons", "Just a card", "Flowers"], answer: 0 },
      { q: "How did Emma react?", options: ["She was angry", "She was bored", "She was surprised and happy"], answer: 2 },
    ],
  },
  {
    id: "cooking-lesson",
    level: "A1",
    title: "Learning to cook",
    minutes: 2,
    summary: "Sam learns to cook pasta with his grandmother. Food and instructions.",
    body: `Sam is sixteen and he wants to learn to [[cook|prepare food]]. His [[grandmother|mother of your parent]] is a great cook, so he visits her on Saturday.
"Today we make pasta," she says. She gives him a big [[pot|deep cooking container]] and tells him to fill it with water.
Sam puts the pasta in the [[boiling|very hot bubbling]] water and waits ten minutes. Meanwhile, his grandmother makes a tomato [[sauce|liquid food on top of pasta]] with garlic and basil.
The kitchen smells [[amazing|very good]]. They eat together and Sam thinks his [[first|number one]] pasta is delicious.`,
    questions: [
      { q: "Who teaches Sam to cook?", options: ["His mother", "His grandmother", "His friend"], answer: 1 },
      { q: "What do they cook?", options: ["Pizza", "Pasta", "Soup"], answer: 1 },
      { q: "How does the food smell?", options: ["Bad", "Strange", "Amazing"], answer: 2 },
    ],
  },
  {
    id: "first-day-school",
    level: "A1",
    title: "Lucy's first day at school",
    minutes: 2,
    summary: "A child's first day at a new school. Feelings, places and people.",
    body: `Lucy is seven years old. Today is her [[first|number one]] day at a new school and she is a little [[nervous|worried about something new]].
Her mother walks with her to the [[gate|door in a fence]]. A friendly teacher with red hair says, "[[Welcome|nice greeting for arriving people]], Lucy! My name is Miss Park."
In the [[classroom|room where students learn]], Lucy sits next to a girl called Sofia. Sofia [[smiles|makes a happy face]] and shares her colour pencils.
At the end of the day, Lucy runs to her mother. "I have a new [[friend|person you like]]!" she says, very happy.`,
    questions: [
      { q: "How does Lucy feel in the morning?", options: ["Excited only", "A little nervous", "Very angry"], answer: 1 },
      { q: "Who is Sofia?", options: ["The teacher", "Lucy's sister", "A girl in her class"], answer: 2 },
      { q: "What does Lucy say at the end of the day?", options: ["She is tired", "She has a new friend", "She wants to go home"], answer: 1 },
    ],
  },
  {
    id: "train-to-paris",
    level: "A1",
    title: "The train to Paris",
    minutes: 2,
    summary: "A short journey by train. Travel vocabulary and asking for help.",
    body: `Olivia is going to Paris by train for the [[weekend|Saturday and Sunday]]. She arrives at the station early with one small [[suitcase|bag for travel clothes]].
She buys a [[ticket|paper that shows you paid]] and finds [[platform|where the train stops]] number nine. The train leaves at exactly 9:15.
On the train, she sits next to a [[window|opening with glass]] and watches the green fields outside. She drinks coffee and reads her book.
Three hours later, the train arrives in Paris. Olivia takes a deep [[breath|air in your body]] and smiles. Her short [[holiday|free time from work]] is starting.`,
    questions: [
      { q: "How is Olivia travelling?", options: ["By plane", "By car", "By train"], answer: 2 },
      { q: "Where does she sit?", options: ["By the door", "By the window", "By the toilet"], answer: 1 },
      { q: "How does she feel when she arrives?", options: ["Tired and sad", "Happy", "Bored"], answer: 1 },
    ],
  },
];
