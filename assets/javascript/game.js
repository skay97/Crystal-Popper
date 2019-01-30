var randomResult;
        var lost = 0;
        var win = 0;
        var previous = 0;

        var resetAndStart = function () {

            $(".crystals").empty();

            var images = [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1DM7VtIDUPBiRJi0JJJXvyCsx7A2eAFK7Jaoc3v62RxJOOdIVQ",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCPpV0tioRrsmpxkVFEnkkL_b7QZDU2fAwH4uWUxVvg7r1iw1",
                "https://images-na.ssl-images-amazon.com/images/I/7125NT4a7PL._SX425_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcMcWb7cbMINQdVFRBobywxzebpmvk-KpIsDSuGuMxcYPDL1ThQ"];

            randomResult = Math.floor(Math.random() * 100) + 19;

            $("#result").html('Random number:' + randomResult);

            for (var i = 0; i < 4; i++) {

                var random = Math.floor(Math.random() * 11) + 1;

                var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });

                crystal.css({
                    "background-image": "url('" + images[i] + "')"
                })


                $(".crystals").append(crystal)
            }

            $("#previous").html("Total Score: " + previous);
        }

        resetAndStart();

        $(document).on('click', ".crystal", function () {

            var num = parseInt($(this).attr("data-random"));

            previous += num;

            $("#previous").html("Total Score: " + previous);

            console.log(previous);

            if (previous > randomResult) {
                lost++;

                $("#lost").html("You lost:" + lost);

                previous = 0;

                resetAndStart();

            } else if (previous === randomResult) {
                win++;

                $("#win").html("You won: " + win);

                previous = 0;

                resetAndStart();


            }

        })