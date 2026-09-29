// March Madness Predictor
// This file handles team selections and submission.

document.addEventListener("DOMContentLoaded", function () {
    const picks = {};
    const games = document.querySelectorAll(".game");
    const buttons = document.querySelectorAll(".team-button");
    const submitButton = document.getElementById("submitPicks");
    const message = document.getElementById("message");

    buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const game = button.closest(".game");
        const gameNumber = Array.from(games).indexOf(game);
        const team = button.dataset.team;

        game.querySelectorAll(".team-button").forEach(function (btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
        picks[gameNumber] = team;
        });
        });

        submitButton.addEventListener("click", function () {
            if (Object.keys(picks).length < games.length) {
                message.textContent = "Please make a prediction for every game.";
                return;
            }

            message.textContent = "Your predictions have been submitted!";
            console.log("Your picks:", picks);
    });
});
