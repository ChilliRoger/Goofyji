/**
 * Roast generator - creates humorous insults when game is over
 */

const adjectives = [
  "clueless",
  "goofy",
  "dense",
  "dizzy",
  "confused",
  "lost",
  "bewildered",
  "befuddled",
  "dazed",
  "silly",
  "ridiculous",
  "absurd",
  "hopeless",
  "useless",
  "pathetic",
  "laughable",
  "pitiful",
  "miserable",
  "terrible",
  "awful",
  "dreadful",
  "abysmal",
  "atrocious",
  "deplorable",
  "lamentable",
];

const nouns = [
  "rock",
  "toaster",
  "doorknob",
  "potato",
  "brick",
  "mop",
  "puddle",
  "pancake",
  "noodle",
  "banana",
  "turnip",
  "walnut",
  "pebble",
  "sponge",
  "napkin",
  "sock",
  "lamppost",
  "shoelace",
  "paperclip",
  "rubber duck",
  "garden gnome",
  "traffic cone",
  "pool noodle",
  "wet blanket",
  "expired coupon",
];

const verbs = [
  "solve puzzles",
  "dance",
  "think",
  "read emojis",
  "play games",
  "count to ten",
  "tie shoes",
  "remember things",
  "understand jokes",
  "win at anything",
  "complete tasks",
  "focus",
  "concentrate",
  "pay attention",
  "learn",
  "improve",
  "succeed",
  "accomplish goals",
  "follow directions",
  "make sense",
  "be helpful",
  "function properly",
  "work correctly",
  "operate normally",
  "exist productively",
];

const roastTemplates = [
  "You're as {adjective} as a {noun} trying to {verb}!",
  "I've seen {noun}s with better {verb} skills!",
  "Your emoji reading is more {adjective} than a {noun}!",
  "A {noun} could {verb} better than that!",
  "That was more {adjective} than a {noun} at a dance party!",
  "Even a {adjective} {noun} knows how to {verb}!",
  "You {verb} like a {adjective} {noun}!",
  "That performance was {adjective}... like really, really {adjective}!",
  "I've met {noun}s that could {verb} circles around you!",
  "Your guessing game is weaker than a {adjective} {noun}!",
  "A {noun} would be embarrassed by that attempt to {verb}!",
  "You're making {noun}s look smart at their ability to {verb}!",
  "That was so {adjective}, even a {noun} felt secondhand embarrassment!",
  "I've seen {adjective} {noun}s with more talent at {verb}!",
  "Your emoji skills are more {adjective} than a {noun} in a library!",
];

/**
 * Generate a random roast statement
 */
export function generateRoast(): string {
  const template =
    roastTemplates[Math.floor(Math.random() * roastTemplates.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];

  return template
    .replace("{adjective}", adjective)
    .replace("{noun}", noun)
    .replace("{verb}", verb);
}

/**
 * Generate multiple roasts for variety
 */
export function generateMultipleRoasts(count: number = 3): string[] {
  const roasts: string[] = [];
  const usedTemplates = new Set<number>();

  while (roasts.length < count && usedTemplates.size < roastTemplates.length) {
    let templateIndex: number;
    do {
      templateIndex = Math.floor(Math.random() * roastTemplates.length);
    } while (usedTemplates.has(templateIndex));

    usedTemplates.add(templateIndex);

    const template = roastTemplates[templateIndex];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];

    const roast = template
      .replace("{adjective}", adjective)
      .replace("{noun}", noun)
      .replace("{verb}", verb);

    roasts.push(roast);
  }

  return roasts;
}
