const quizQuestions = [
  {
    question: "1.HTML stands for __________",
    options: ["HyperText Markup Language", "HyperText Machine Language", " HyperText Marking Language", "HighText Marking Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "2.What is CSS?",
    options: [" CSS is a style sheet language", "CSS is designed to separate the presentation and content, including layout, colors, and fonts", " CSS is the language used to style the HTML documents", "All of the mentioned"],
    correctAnswer: "All of the mentioned"
  },
  {
    question: "3.Which  of the following tag is used to embeded css in html page webpage?",
    options: ["css", "!DOCTYPE html", "script", "style"],
    correctAnswer: "style"
  },
  {
    question: "4.Which one of the following css selectors are used to specify a group of elements?",
    options: ["tag", "id", "class", "both class and tag"],
    correctAnswer: "class"
  },
  {
    question: "5.Which one of the following tag is used to insert graphics in webpage?",
    options: ["image", "images", "img", "graphics"],
    correctAnswer: "img"
  },
  {
    question: "6.Which of the following CSS framework is used to create a responsive design?",
    options: ["django", "rails", "larawell", "bootstrap"],
    correctAnswer: "bootstrap"
  },
  {
    question: "7.Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    options: ["tag", "id", "class", "both class and tag"],
    correctAnswer: "id"
  },
    {
      question: "8.Which of the following type of HTML tag is used to define an internal style sheet?",

      options: ["script", "link", "class", "style"],
      correctAnswer: "style"
    },
    {
      question: "9.Which of the following CSS style property is used to specify an italic text?",
      options: ["style", "font", "font-style", "@font-face"],
      correctAnswer: "font-style"
    },
    {
      question: "10.Which language is primarily used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    }
  ];
  
  let userScore = 0;
  
  function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizQuestions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `
        <p>${question.question}</p>
        ${question.options
          .map(
            (option, i) => `
              <label>
                <input type="radio" name="q${index}" value="${option}">
                ${option}
              </label>
            `
          )
          .join('<br>')}
      `;
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function calculateScore() {
    userScore = 0;
  
    quizQuestions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption && selectedOption.value === question.correctAnswer) {
        userScore++;
      }
    });
  
    localStorage.setItem("score", userScore); // Save score in localStorage
    window.location.href = "results.html"; // Redirect to results page
  }
  
  document.getElementById('submit-btn').addEventListener('click', calculateScore);
  
  loadQuiz();
  