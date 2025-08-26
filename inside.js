
const quotes = {
  happy: [
    "Happiness is a warm puppy.",
    "Smile, it's free therapy.",
    "The purpose of our lives is to be happy."
  ],
  sad: [
    "Tears come from the heart and not from the brain.",
    "Every human walks around with a certain kind of sadness.",
    "Sadness flies away on the wings of time."
  ],
  motivated: [
    "Push yourself, because no one else is going to do it for you.",
    "Success is what comes after you stop making excuses.",
    "Don’t watch the clock; do what it does. Keep going."
  ],
  depressed: [
    "Depression is being colorblind and constantly told how colorful the world is.",
    "There are wounds that never show on the body that are deeper and more hurtful than anything that bleeds.",
    "I didn't want to wake up. I was having a much better time asleep. And that's really sad."
  ]
};

const moodColors = {
  happy: "#fffacd",
  sad: "#d3d3d3",
  motivated: "#c6f6d5",
  depressed: "#c0c0c0"
};

function generateQuote(mood) {
  const quoteArray = quotes[mood];
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  const selectedQuote = quoteArray[randomIndex];
  document.getElementById("quoteDisplay").textContent = selectedQuote;
  document.body.style.backgroundColor = moodColors[mood];
}
function generateQuote(mood) {
  const quoteArray = quotes[mood];
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  const selectedQuote = quoteArray[randomIndex];

  document.getElementById("quoteDisplay").textContent = selectedQuote;
  document.getElementById("lastMood").textContent = "Last mood: " + mood;
}

function saveQuote() {
  const currentQuote = document.getElementById("quoteDisplay").textContent;
  document.getElementById("savedQuote").textContent = "Saved quote: " + currentQuote;
}

