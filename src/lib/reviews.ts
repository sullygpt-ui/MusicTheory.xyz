export interface Review {
  author: string;
  rating: number;
  text: string;
  course?: string;
}

export const reviews: Review[] = [
  {
    author: 'Marcus Chen',
    rating: 5,
    text: "I've been playing guitar for 8 years but never really understood why certain chords sounded good together. This course connected all the dots. Jake explains theory in a way that's immediately practical — I started writing better progressions within the first week.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'Sarah Mitchell',
    rating: 5,
    text: "As a singer-songwriter who's mostly self-taught, I always felt like I was guessing when it came to chord choices. Now I actually understand what I'm doing. The ear training section alone was worth the price.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'DevonPlays',
    rating: 5,
    text: "Jake's YouTube videos are already incredible, but the course goes so much deeper. 45 lessons that build on each other perfectly. The PDFs are beautifully designed and I use them as reference constantly.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'Alejandro Reyes',
    rating: 5,
    text: 'I tried learning theory from textbooks and other courses before — they were always dry and disconnected from real music. Jake teaches theory through songwriting, which makes everything stick. Best music purchase I ever made.',
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'KatieOnKeys',
    rating: 5,
    text: "I'm a pianist, not a guitarist, and this course still transformed my understanding of songwriting. The concepts are instrument-agnostic. The song structure and composition modules are exceptional.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'Tom Bradley',
    rating: 5,
    text: "The improvisation section completely changed how I approach lead playing. I used to just play scales up and down — now I'm actually making music. The lesson on targeting chord tones was a breakthrough moment for me.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'NightOwlProducer',
    rating: 5,
    text: "As a bedroom producer, I was tired of relying on MIDI packs and loops. This course taught me to actually compose my own progressions and melodies. My tracks sound completely different now — they have real harmonic movement.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'Rachel Kim',
    rating: 5,
    text: "I was skeptical about paying $270 for an online course, but it's genuinely worth every penny. The amount of content is staggering — 45 lessons plus over 100 PDFs. I'm 3 months in and still discovering new material.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'JazzDad55',
    rating: 5,
    text: "Jake has a gift for making complex theory concepts feel simple and intuitive. The way he explains modes, for example, is the clearest I've ever encountered. And I've been playing for 30 years.",
    course: 'Theory and Songwriting Course',
  },
  {
    author: 'Priya Sharma',
    rating: 5,
    text: "The rhythm and groove module doesn't get enough credit. Most theory courses skip over rhythm entirely. Jake dedicates serious time to feel, groove, and rhythmic composition — and it made me a much better songwriter.",
    course: 'Theory and Songwriting Course',
  },
];
