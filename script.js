window.onload = function () {

    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea = document.getElementsByClassName('answers')[0],
        current = 0;
    var answesTotal = 0;
    var answerLength = 0;
    // An object that holds all the questions + possible answers.
    // In the array --> last digit gives the right answer position
    var allQuestions = {
        'მშვიდობა': ['1', '2', '3'],
        'სიხარული': ['1', '2', '3'],
        'სულგრძელობა': ['1', '2', '3'],
        "თავშეკავება ერთმანეთის განკითხვაში": ['1', '2', '3'],
        "მოთმინება": ['1', '2', '3'],
        "სიყვარული": ['1', '2', '3'],
        "რწმენა": ['1', '2', '3'],
        "თავმდაბლობა": ['1', '2', '3'],
        "იმედით სიხარული": ['1', '2', '3'],
        "წრფელი და უანგარო გული": ['1', '2', '3'],
        "მიმტევებელი ხასიათი": ['1', '2', '3'],
    };

    function loadQuestion(curr) {
        var question = Object.keys(allQuestions)[curr];
        questionArea.innerHTML = '';
        questionArea.innerHTML = question;
    }

    function loadAnswers(curr) {
        var answers = allQuestions[Object.keys(allQuestions)[curr]];

        answerArea.innerHTML = '';

        for (var i = 0; i < answers.length; i += 1) {
            var createDiv = document.createElement('div'),
                text = document.createTextNode(answers[i]);

            createDiv.appendChild(text);
            createDiv.addEventListener("click", checkAnswer(i, answers));


            answerArea.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {

        return function () {


            answesTotal += i + 1;
            answerLength++;
            console.log()
            if (current < Object.keys(allQuestions).length - 1) {
                current += 1;

                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'თქვენ სულიერი კოეფიციენტია: <br/> ' + Math.floor((answesTotal / answerLength) * 1000) / 1000;
                answerArea.innerHTML = '';
            }

        };
    }




    loadQuestion(current);
    loadAnswers(current);

};