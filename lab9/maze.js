(function () {
    "use strict";
var win = true;

$('document').ready(function () {
    $("#start").click(
        function () {
            $("#status").text("Good Luck.");
            $("div .boundary").removeClass("loser");
            startGame();

        });
});

function startGame() {
    win = true;

    $(".boundary").hover(
        function () {
            losing();
        });

    $("#end").click(
        function () {
            if (win) {
                $("#status").text("You WIN! : Click S to Play Again");
                endGame();
            }
        });

    $("#maze").mouseleave(
        function () {
            losing();
        });

}

function losing() {
    win = false;
    $("div .boundary").addClass("loser");
    $("#status").text("You LOSE! : Click 'S' to Retry ");
}

function endGame() {
    $("div .boundary").removeClass("loser");
    $('.boundary').unbind('hover');
    $("#maze").unbind('mouseleave');
}
})();
