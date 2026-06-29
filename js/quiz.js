/* ==========================================
   CALCULATE QUIZ RESULT
   Runs when the user submits the quiz
========================================== */

function getResult(){

    /* Stores how many "yes" answers the user gets */
    let score = 0;

    /* ==========================================
       COUNT THE SCORE
       Loops through all 10 questions
    ========================================== */

    for(let i = 1; i <= 10; i++){

        /* If the answer is "yes", add 1 to the score */
        if(document.getElementById("q" + i).value === "yes"){
            score++;
        }

    }

    /* ==========================================
       VARIABLES FOR THE RESULT
    ========================================== */

    let resultText = "";   // Stores the final message
    let tips = [];         // Stores the study tips

    /* ==========================================
       LOW SCORE (0–3)
    ========================================== */

    if(score <= 3){

        resultText = "You need structured study habits.";

        tips = [
            "Use Pomodoro technique",
            "Study in short sessions",
            "Avoid cramming",
            "Review weekly",
            "Use flashcards"
        ];

    }

    /* ==========================================
       MEDIUM SCORE (4–7)
    ========================================== */

    else if(score <= 7){

        resultText = "You are a moderate learner.";

        tips = [
            "Use active recall",
            "Try spaced repetition",
            "Summarise notes",
            "Mix subjects (interleaving)",
            "Practice testing",
            "Use mind maps",
            "Teach someone else",
            "Use study timers",
            "Break tasks into chunks",
            "Use diagrams"
        ];

    }

    /* ==========================================
       HIGH SCORE (8–10)
    ========================================== */

    else{

        resultText = "You are already a strong learner — refine your methods.";

        tips = [
            "Use Feynman technique",
            "Advanced spaced repetition",
            "Exam simulation tests",
            "Interleaving topics",
            "Self-testing under pressure",
            "Error correction logs",
            "Teach others",
            "Deep practice sessions",
            "Timed revision drills",
            "Concept linking maps",
            "Past paper practice",
            "Active summarisation",
            "Reflection journals",
            "Memory retrieval drills",
            "Study planning schedules",
            "Goal tracking",
            "Focused revision blocks",
            "Question prediction",
            "Revision cycles",
            "Exam strategy planning"
        ];

    }

    /* ==========================================
       SHOW THE RESULTS PAGE
       Hide the quiz and display the results
    ========================================== */

    quizBox.style.display = "none";
    resultBox.style.display = "block";

    /* ==========================================
       DISPLAY THE RESULT MESSAGE
    ========================================== */

    resultText.innerText = resultText;

    /* ==========================================
       DISPLAY THE STUDY TIPS
    ========================================== */

    let list = document.getElementById("tips");

    /* Clears any old tips */
    list.innerHTML = "";

    /* Creates a list item for each tip */
    for(let i = 0; i < tips.length; i++){

        let li = document.createElement("li");

        /* Sets the text inside the list item */
        li.innerText = tips[i];

        /* Adds the list item to the unordered list */
        list.appendChild(li);

    }

}