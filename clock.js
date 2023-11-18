document.addEventListener("DOMContentLoaded", function() {
    // Get the timestamp when the page is loaded
    var startTime = Date.now();

    function updateClock() {
        // Calculate the elapsed time in milliseconds
        var elapsedTime = Date.now() - startTime;

        // Convert milliseconds to minutes and seconds
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Update the content of the clock element
        document.getElementById('timeElapsed').innerText = minutes + ' minutes and ' + seconds + ' seconds';
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to display the elapsed time immediately
    updateClock();
});
