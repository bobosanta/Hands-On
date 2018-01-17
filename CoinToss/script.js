$(document).ready(function () {

    // Play against computer

    $("#vs").on("click", function () {
        $(".options").slideToggle("slow", function () {
            $(this).toggleClass('expand').css('display', '');


            var output = document.getElementById('output');
            var userChoice = prompt('Head 1 or Tail 0 ?');
            var computerChoice = Math.floor(Math.random() * 2);
            console.log(computerChoice);

            if (userChoice < computerChoice) {
                output.innerHTML = computerChoice;
                output.innerHTML = "You lose !";
            } else if (userChoice == computerChoice) {
                output.innerHTML = "Tie !"
            } else {
                output.innerHTML = "You win !"
            }
        });
    });


    // Guess what computer chose

    $("#guess").on("click", function () {
        $(".options").slideToggle("slow", function () {
            $(this).toggleClass('expand').css('display', '');

            var output = document.getElementById('output');
            var userChoice = prompt('Heads or tails ?');
            var computerChoice = Math.floor(Math.random() * 2);
            console.log(computerChoice);

            function result() {
                if (userChoice == 'heads') {
                    userChoice = 1;
                } else {
                    userChoice = 0;
                }
            };

            result();

            if (userChoice == computerChoice) {
                output.innerHTML = "You were right !";
            } else {
                output.innerHTML = "You were wrong !";
            }
        });
    });

})


