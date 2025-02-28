document.addEventListener('DOMContentLoaded', function () {
    const score = localStorage.getItem("score");
    const resultContainer = document.getElementById('result');
    
    if (score !== null) {
      resultContainer.innerHTML = `Your score is: ${score} out of 10`;
    } else {
      resultContainer.innerHTML = "No score available.";
    }
  
    // Optionally clear the score after displaying
    localStorage.removeItem("score");
  });
   