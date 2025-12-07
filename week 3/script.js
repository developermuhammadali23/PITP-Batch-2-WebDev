//---JAVASCRIPT LOGIC---

    //1. create an array of posible answers (classic+fun/sarcastic)
        const answers = [
      "yes definitly.",
      "It's certain.",
      "choise are good.",
      "my sourse say no.",
      "it is not type.",
      "chance are not good.",
      "dogs know better than you.",
      "your fortune are available .",
      "you are unlucky for some time.",
      "time of some break ask letter.",
      "you hight is not good",
      "you are about to die.",
    ];

    const getAnswerButton = document.querySelector("#get-answer-btn");
    const answerDisplay = document.querySelector("#answer");

    // 3. The function that runs on click
    function showRandomAnswer() {
     const randomIndex = Math.floor(Math.random() * answers.length);
     const randomAnswer = answers[randomIndex];
      answerDisplay.textContent = randomAnswer;
    }
    // 4. we use the variable 'getAnswerButton' we defined above.
   if (getAnswerButton && answerDisplay) {
    getAnswerButton.addEventListener("click", showRandomAnswer);
    } else {
         console.warn("Button or answer display element not found (check your HTML IDs)");
    }