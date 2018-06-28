$( document ).ready(function() {

var game = {
    questions: [
            {
    question: 'How many rings does Michael Jordan have?',
    possibles: ['8 ', '6 ', '3 ', '5'],
    id: 'q-one',
    answer: 1
            }, {
    question: 'How many rings does Lebron James have?',
    possibles: ['3 ', '1 ', '5 ', '6 ',],
    id: 'q-two',
    answer: 0
            }, {
    question: 'How many time did Lebron James go to the Finals?',
    possibles: ['4 ', '3 ', '8 ', '9 '],
    id: 'q-three',
    answer: 3
            }, {
    question: 'How many rings does Kobe Bryant have??',
    possibles: ['3 ', '5 ', '6 ', '4 '],
    id: 'q-four',
    answer: 1
            }, {
    question: 'What player won the "2016-17" Most Vaulable Player (MVP) award?',
    possibles: ['Russell Westbrook ', 'Lebron James ', 'Kevin Durant ', 'James Harden'],
    id: 'q-five',
    answer: 0
            }, {
    question: 'What player won the "2017-18" Most Vaulable Player (MVP) award?',
    possibles: ['Russell Westbrook ', 'James Harden ', 'Kevin Durant ', 'Lebron James'],
    id: 'q-six',
    answer: 1
            }, {
    question: 'What team won the "2017-18" NBA Finals ?',
    possibles: ['Cleveland Cavaliers ', 'Golden State Warriors ', 'Boston Celtics ', 'Houston Rockets'],
    id: 'q-seven',
    answer: 1
            }, {
    question: 'What player won the "2017-18" NBA Rookie of the Year ?',
    possibles: ['Donovan Mitchell ', 'Jayson Tatum ', 'Ben Simmons ', 'Lonzo Ball'],
    id: 'q-eight',
    answer: 2

    }]}
    
    var number = 45;
        $('#timeLeft').on('click', timer);
        function decrement(){
            number--;

            $('#timeLeft').html('<h3>' + number + " seconds"+'</h3>');
         
            if (number === 0){
           
            stop();
           
            alert('Time Up! results on page') 
            checkAnswers()
         
            }
        }
    
    function timer(){
            counter = setInterval(decrement, 1000);
        }
        
    function stop(){
            clearInterval(counter);
        }

            timer();
    
    function gamePage(data) {
   
    var answerString = "<form id='questionOne'>"+ data.question +"<br>";
    var possibles = data.possibles;
   
    for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            
            answerString = answerString + "<input type='radio' name='" + data.id+"' value=" + i + ">" +possible;
        }
        return answerString + "</form>";
    }

    window.gamePage = gamePage;
 
    function buildQuestions(){
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + gamePage(game.questions[i]);
        }
        $('#questions-container').append('<h4>' + questionHTML);
    
    }
    
 
    function isCorrect(question){
        var answers = $('[name='+question.id+']');
        var correct = answers.eq(question.answer);
        var isChecked = correct.is(':checked');
        return isChecked;
    }
    
   
    buildQuestions();
    
    
    function checkAnswers (){
    
     
        var correct = 0;
        var incorrect = 0;
        var unAnswered =0 
    
        for (var i = 0; i < game.questions.length; i++) {
            if (isCorrect (game.questions[i]) ) {
                correct++;
            } else {

            if (checkAnswered (game.questions[i]) ) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
    
        }

    
       $('.results').html('<h2>' + 'correct: '+ correct + "<br>" +'incorrect: '+ incorrect + "<br>" +'unanswered: '+unAnswered + '<h2>')

    }
    
  
    function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name='+question.id+']');
  
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }
        return anyAnswered;
    
    }
    
    
        $('#doneButton').on('click', function() {
        
        checkAnswers();
        
        stop();

        alert('Game over! results on page')
        })
    });