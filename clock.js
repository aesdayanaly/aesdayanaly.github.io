document.addEventListener("DOMContentLoaded", function() {
    var startTime = Date.now();

    function updateClock() {
        var elapsedTime = Date.now() - startTime;

        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        document.getElementById('timeElapsed').innerText = minutes + ' minutes and ' + seconds + ' seconds';
    }

    setInterval(updateClock, 1000);
    updateClock();
});
