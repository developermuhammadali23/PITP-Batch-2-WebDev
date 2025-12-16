const correctAnswers={
    q1:'C',
    q2:'B',
    q3:'A',
};

function calculateScore() {
    let score = 0;
    const totalQuestions =3;
    const resultDiv = document.getElementById('result');

    // we specifically target only the inputs that are currently ':checked'
    const userAnswer = document.querySelectorAll('input[type="radio"]:checked');

    // use a forEach loop to iterate over the answers
    userAnswer.forEach((answer) => {
        const questionName = answer.name;
        if (answer.value === correctAnswers[questionName]){
            score++;
            answer.parentElement.style.color = 'green';
            answer.parentElement.style.fontWeight = 'bolder';
        } else{
            answer.parentElement.style.color = 'red';
        }
    });
     
    let feedbackMessage = '';
    if (score===totalQuestions) {
        feedbackMessage = `Amazing! Awesome`;
    }else if (score >= 2){
        feedbackMessage = `better luck next time`;
    }else{
        feedbackMessage = `never get upset`;
    }

    resultDiv.innerHTML = `      
     <h3>Your Results</h3>
     <p>You Scored <strong>${score}</strong> Out of<strong>${totalQuestions}</strong>.</p>
     <p><em>${feedbackMessage}</em></p>
     `;

 
}