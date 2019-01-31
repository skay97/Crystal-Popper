var randomResult;
        var lost = 0;
        var win = 0;
        var previous = 0;

        var resetAndStart = function () {

            $(".crystals").empty();

            var images = [
                "assets/images/crystal1.png",
                "assets/images/crystal2.png",
                "assets/images/crystal3.png",
                "assets/images/crystal4.png"];

            randomResult = Math.floor(Math.random() * 100) + 19;

            $("#result").html('Mystic Number:' + randomResult);

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

                $("#lost").html("Losses:" + lost);

                previous = 0;

                resetAndStart();

            } else if (previous === randomResult) {
                win++;

                $("#win").html("Wins: " + win);

                previous = 0;

                resetAndStart();


            }

        })