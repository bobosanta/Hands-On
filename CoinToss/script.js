$(document).ready(function () {

    // Play against computer

    // $("#vs").on("click", function () {
    //     $(".options").slideToggle("slow", function () {
    //         $(this).toggleClass('expand').css('display', '');

    //         var output = document.getElementById('output');
    //         var userChoice = "";
    //         var computerChoice = Math.floor(Math.random() * 2);
    //         console.log(computerChoice);
            
    //         $('.choice').on("click", function (){
    //             if ( $(this).attr("id") == "heads") {
    //                 userChoice = 1;
    //             } else {
    //                 userChoice = 0;
    //             }
                
    //             if (userChoice < computerChoice) {
    //                 output.innerHTML = computerChoice;
    //                 output.innerHTML = "You lose !";
    //             } else if (userChoice == computerChoice) {
    //                 output.innerHTML = "Tie !"
    //             } else {
    //                 output.innerHTML = "You win !"
    //             }
    //         });   
    //     });
    // });

    // Guess what computer chose

    $("#guess").on("click", function () {
        $(".options").slideToggle("slow", function () {
            $(this).toggleClass('expand').css('display', '');

            var output = document.getElementById('output');
            var userChoice = "";

            $('.choice').on("click", function (){
                var computerChoice = Math.floor(Math.random() * 2);
                    
                if ($(this).attr("id") == "heads") {
                    userChoice = 1;
                } else {
                    userChoice = 0;
                };

                if (userChoice == computerChoice) {
                    output.innerHTML = "You were right !";
                } else {
                    output.innerHTML = "You were wrong !";
                }
    
            });            
        });
    });

});
