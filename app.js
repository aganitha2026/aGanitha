const questions = [
  {
    topic: "systems",
    label: "Hindu-Arabic vs International",
    question: "In the International system, how is 7,25,30,406 written with correct commas?",
    options: ["72,530,406", "7,253,040,6", "725,30,406", "7,25,30,406"],
    answer: 0,
    hint: "International commas are placed after every three digits from the right.",
    method: "Start from the right: 406, then 530, then 72. So 7,25,30,406 in Indian grouping becomes 72,530,406 in the International system."
  },
  {
    topic: "systems",
    label: "Hindu-Arabic vs International",
    question: "Which number name matches 5,08,214 in the Indian system?",
    options: ["Five million eight thousand two hundred fourteen", "Five lakh eight thousand two hundred fourteen", "Fifty lakh eight thousand fourteen", "Five crore eight thousand two hundred fourteen"],
    answer: 1,
    hint: "Indian system uses ones, thousands, lakhs, and crores.",
    method: "5,08,214 is grouped as 5 lakh, 8 thousand, 214. Therefore, it is five lakh eight thousand two hundred fourteen."
  },
  {
    topic: "systems",
    label: "Hindu-Arabic vs International",
    question: "Which number is written as 'three million forty-five thousand two hundred nine'?",
    options: ["30,45,209", "3,45,209", "3,004,520", "3,045,209"],
    answer: 3,
    hint: "One million is 1,000,000.",
    method: "Three million is 3,000,000. Add 45,000 and 209 to get 3,045,209."
  },
  {
    topic: "values",
    label: "Notation, Numeration, Place Value, Face Value",
    question: "What is the place value of 8 in 4,82,615?",
    options: ["8,000", "80,000", "800", "8"],
    answer: 1,
    hint: "Find the place where 8 is standing in 4,82,615.",
    method: "In 4,82,615, the digit 8 is in the ten-thousands place. Its place value is 8 x 10,000 = 80,000."
  },
  {
    topic: "values",
    label: "Notation, Numeration, Place Value, Face Value",
    question: "What is the face value of 9 in 6,91,204?",
    options: ["90,000", "9,000", "9", "900"],
    answer: 2,
    hint: "Face value is the digit itself.",
    method: "The face value of a digit does not depend on its position. So the face value of 9 is simply 9."
  },
  {
    topic: "values",
    label: "Notation, Numeration, Place Value, Face Value",
    question: "Which expanded form is correct for 3,04,708?",
    options: ["3,00,000 + 4,000 + 700 + 8", "30,000 + 4,000 + 700 + 8", "3,00,000 + 40,000 + 700 + 8", "3,00,000 + 4,000 + 70 + 8"],
    answer: 0,
    hint: "Break the number according to each non-zero digit's place value.",
    method: "3 is in the lakh place, 4 is in the thousands place, 7 is in the hundreds place, and 8 is in the ones place. So the expanded form is 3,00,000 + 4,000 + 700 + 8."
  },
  {
    topic: "compare",
    label: "Comparison of Numbers",
    question: "Which number is the greatest?",
    options: ["8,67,950", "8,76,405", "8,70,654", "8,76,540"],
    answer: 3,
    hint: "Compare from the leftmost digit and move right only when digits are equal.",
    method: "All numbers start with 8 lakh. Compare the ten-thousands and thousands: 8,76,540 and 8,76,405 are ahead. Then compare hundreds: 540 is greater than 405. So 8,76,540 is greatest."
  },
  {
    topic: "compare",
    label: "Comparison of Numbers",
    question: "Arrange in ascending order: 45,206; 45,620; 45,062; 46,025",
    options: ["46,025; 45,620; 45,206; 45,062", "45,206; 45,062; 45,620; 46,025", "45,620; 45,206; 45,062; 46,025", "45,062; 45,206; 45,620; 46,025"],
    answer: 3,
    hint: "Ascending means smallest to greatest.",
    method: "The smallest is 45,062, then 45,206, then 45,620. The only 46 thousand number, 46,025, is the greatest. So the order is 45,062; 45,206; 45,620; 46,025."
  },
  {
    topic: "compare",
    label: "Comparison of Numbers",
    question: "Which symbol makes this true? 9,08,345 ___ 9,80,345",
    options: [">", "<", "=", "Cannot be compared"],
    answer: 1,
    hint: "Both have 9 lakh. Compare the ten-thousands digit next.",
    method: "After 9 lakh, compare 08 thousand and 80 thousand. Since 8,345 is less than 80,345, 9,08,345 < 9,80,345."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A school library had 12,480 books. It bought 3,675 more books. How many books are there now?",
    options: ["16,155", "15,055", "16,055", "15,165"],
    answer: 0,
    hint: "The library bought more books, so add.",
    method: "Add 12,480 + 3,675. Ones: 0 + 5 = 5, tens: 8 + 7 = 15, hundreds: 4 + 6 + 1 = 11, thousands: 12 + 3 + 1 = 16. Total = 16,155."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A shopkeeper had 25,000 pencils and sold 8,750 pencils. How many pencils are left?",
    options: ["17,250", "16,350", "15,250", "16,250"],
    answer: 3,
    hint: "Sold means the quantity decreases.",
    method: "Subtract 25,000 - 8,750. Borrow carefully: 25,000 - 8,000 = 17,000 and 17,000 - 750 = 16,250."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "There are 36 boxes. Each box has 125 notebooks. How many notebooks are there in all?",
    options: ["3,500", "4,250", "5,400", "4,500"],
    answer: 3,
    hint: "Equal groups usually mean multiplication.",
    method: "Multiply 125 x 36 = 125 x 30 + 125 x 6 = 3,750 + 750 = 4,500 notebooks."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "1,248 sweets are packed equally in 24 boxes. How many sweets are in each box?",
    options: ["42", "62", "48", "52"],
    answer: 3,
    hint: "Equally packed means divide the total by the number of boxes.",
    method: "Divide 1,248 by 24. Since 24 x 50 = 1,200 and 24 x 2 = 48, 24 x 52 = 1,248. Each box has 52 sweets."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A farmer plants 48 rows of mango saplings. Each row has 36 saplings. How many saplings are planted in all?",
    options: ["1,628", "1,728", "1,828", "1,688"],
    answer: 1,
    hint: "Rows with the same number in each row means multiplication.",
    method: "Multiply 48 x 36 = 48 x 30 + 48 x 6 = 1,440 + 288 = 1,728 saplings."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A printer prints 245 pages in one hour. How many pages will it print in 18 hours at the same speed?",
    options: ["4,410", "4,210", "4,510", "4,310"],
    answer: 0,
    hint: "Same number of pages every hour means multiply pages per hour by hours.",
    method: "Multiply 245 x 18 = 245 x 10 + 245 x 8 = 2,450 + 1,960 = 4,410 pages."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A school bought 27 cartons of chalk. Each carton has 144 chalk pieces. How many chalk pieces were bought?",
    options: ["3,888", "3,788", "3,988", "3,688"],
    answer: 0,
    hint: "Cartons with equal pieces in each carton form equal groups.",
    method: "Multiply 144 x 27 = 144 x 20 + 144 x 7 = 2,880 + 1,008 = 3,888 chalk pieces."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "7,560 pencils are packed equally into 35 boxes. How many pencils are in each box?",
    options: ["206", "216", "226", "196"],
    answer: 1,
    hint: "Equally into boxes means divide the total pencils by the number of boxes.",
    method: "Divide 7,560 by 35. Since 35 x 200 = 7,000 and 35 x 16 = 560, 35 x 216 = 7,560. Each box has 216 pencils."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A bus company carried 9,984 passengers equally in 32 buses. How many passengers were in each bus?",
    options: ["321", "302", "312", "322"],
    answer: 2,
    hint: "Equally in each bus means divide passengers by buses.",
    method: "Divide 9,984 by 32. Since 32 x 300 = 9,600 and 32 x 12 = 384, 32 x 312 = 9,984. Each bus had 312 passengers."
  },
  {
    topic: "operations",
    label: "Word Problems on Number Operations",
    question: "A bakery made 6,048 cookies and packed them equally into 72 packets. How many cookies were in each packet?",
    options: ["74", "94", "84", "86"],
    answer: 2,
    hint: "Equal packets means division.",
    method: "Divide 6,048 by 72. Since 72 x 80 = 5,760 and 72 x 4 = 288, 72 x 84 = 6,048. Each packet had 84 cookies."
  }
];

const form = document.getElementById("answerForm");
const questionText = document.getElementById("questionText");
const feedback = document.getElementById("feedback");
const hintBtn = document.getElementById("hintBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const questionCounter = document.getElementById("questionCounter");
const topicLabel = document.getElementById("topicLabel");
const progressFill = document.getElementById("progressFill");
const score = document.getElementById("score");
const topicTabs = Array.from(document.querySelectorAll(".topic-tab"));

const state = {
  index: 0,
  correct: new Set(),
  attempts: Array(questions.length).fill(0),
  selected: Array(questions.length).fill(null),
  revealed: Array(questions.length).fill(false)
};

function renderQuestion() {
  const item = questions[state.index];
  questionText.textContent = item.question;
  topicLabel.textContent = item.label;
  questionCounter.textContent = `Question ${state.index + 1} of ${questions.length}`;
  progressFill.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  backBtn.disabled = state.index === 0;
  nextBtn.disabled = state.index === questions.length - 1;
  score.textContent = state.correct.size;

  topicTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.topic === item.topic);
  });

  form.innerHTML = "";
  item.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(optionIndex);
    input.checked = state.selected[state.index] === optionIndex;

    const text = document.createElement("span");
    text.textContent = option;

    label.append(input, text);
    form.append(label);
  });

  showStoredFeedback();
}

function setFeedback(type, message) {
  feedback.className = `feedback ${type}`;
  feedback.textContent = message;
}

function showStoredFeedback() {
  const item = questions[state.index];
  const selected = state.selected[state.index];
  const attempts = state.attempts[state.index];

  hintBtn.hidden = attempts === 0 || selected === item.answer || state.revealed[state.index];

  if (selected === null) {
    setFeedback("neutral", "Select an option to check your answer.");
    return;
  }

  if (selected === item.answer) {
    setFeedback("correct", "Correct. Nicely done.");
    return;
  }

  if (state.revealed[state.index]) {
    setFeedback("method", `Correct answer: ${item.options[item.answer]}. Method: ${item.method}`);
    return;
  }

  setFeedback("wrong", "Wrong answer. Try once more, or use the Hint button.");
}

function chooseAnswer(optionIndex) {
  const item = questions[state.index];
  state.selected[state.index] = optionIndex;

  if (optionIndex === item.answer) {
    state.correct.add(state.index);
    setFeedback("correct", "Correct. Nicely done.");
    hintBtn.hidden = true;
  } else {
    state.correct.delete(state.index);
    state.attempts[state.index] += 1;

    if (state.attempts[state.index] >= 2) {
      state.revealed[state.index] = true;
      setFeedback("method", `Correct answer: ${item.options[item.answer]}. Method: ${item.method}`);
      hintBtn.hidden = true;
    } else {
      setFeedback("wrong", "Wrong answer. Try once more, or use the Hint button.");
      hintBtn.hidden = false;
    }
  }

  score.textContent = state.correct.size;
}

form.addEventListener("change", (event) => {
  if (event.target.matches("input[name='answer']")) {
    chooseAnswer(Number(event.target.value));
  }
});

hintBtn.addEventListener("click", () => {
  const item = questions[state.index];
  setFeedback("hint", `Hint: ${item.hint}`);
});

backBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  }
});

topicTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const nextIndex = questions.findIndex((question) => question.topic === tab.dataset.topic);
    if (nextIndex >= 0) {
      state.index = nextIndex;
      renderQuestion();
    }
  });
});

renderQuestion();
