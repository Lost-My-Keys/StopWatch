window.onload = function () {

    var seconds = "00";
    var tens = "00";
    var minutes = "00";
    var hours = "00";
    var lapNumber = "00";
    var lineCount = 0;

    var markLap = hours + ":" + minutes + ":" + seconds + ":" + tens;

    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("minutes")
    var appendHours = document.getElementById("hours")
    var appendLap = document.getElementById("lap")
    
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var buttonLap = document.getElementById('button-lap')
    var Interval;

    var buttonMoreDetailsPage = document.getElementById("button-moreDetails")
    
    buttonStart.addEventListener("click", Start)

    function Start(){
        console.log("started");
        buttonStart.removeEventListener("click", Start);
        buttonStart.addEventListener("click", Stop);
        buttonStart.value = "Stop";

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    function Stop(){
        console.log("stopped");
        buttonStart.removeEventListener("click", Stop);
        buttonStart.addEventListener("click", Start);
        buttonStart.value = "Start";

        clearInterval(Interval);

    }

    buttonLap.onclick = function() {
        markLap = hours + ":" + minutes + ":" + seconds + ":" + tens;
        lapNumber++
        console.log("Lap Number " + lapNumber +"   " + markLap)
        const newLine = document.createElement('p');
        newLine.textContent = "Lap Number " + lapNumber + "   " + markLap;
        appendLap.appendChild(newLine);

    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        lapNumber = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendLap.innerHTML = "";
        console.log("Reset")
        if(buttonStart.value === "Stop"){
           Stop()
           Start()

        }

    }
        //Button that leads to the new page "More Details"
    buttonMoreDetailsPage.onclick = function(){
        window.location.href="MoreDetails/moreDetails.html";
    }


    function startTimer() {
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds>9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = "00";
            appendSeconds.innerHTML = seconds;
        }
        if(minutes > 59){
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = "00";
            appendMinutes.innerHTML = minutes;
        }
        
    }
}