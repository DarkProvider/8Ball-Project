let possible_answers = ["Yes", "No", "Maybe", "I don't know", "Get the fuck away from here!", "Bruh, how would I know that?", "I don't know, I'm just a bot",  "My creator didn't program me to be able to answer to that one bud", "I have no fucking clue!", "This is just a dumb bot here, I'm not intelligent enough to answer that I'm afraid", "Yes, you will", "I believe in you", "I can see that", "probably"];


function questionEntered() {
    for (let i = 0; i < possible_answers.length; i++) {
        question.addEventListener("keyup", function(e){
            if (e.key === 'Enter') {
                
                answer_question();

                setTimeout(() => {
                    reset_all();
                }, 5000);
            }
        });
    }
}


function answer_question() {
    let question = document.getElementById("question").value;

    if (question == "") {
        document.getElementById("answer").innerHTML = "Please enter a question";
        document.getElementById("ball").style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
    } else {
        let answer = possible_answers[Math.floor(Math.random() * possible_answers.length)];

        document.getElementById("answer").innerHTML = answer;
        document.getElementById("ball").style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
        document.getElementById("answer").style.fontSize = "15px";
    }
}

function reset_answer() {
    document.getElementById("answer").innerHTML = "8";
}

function reset_question() {
    document.getElementById("question").value = "";
}

function reset_all() {
    reset_answer();
    reset_question();
    document.getElementById("answer").style.fontSize = "80px";
}


reset_all();
questionEntered();

