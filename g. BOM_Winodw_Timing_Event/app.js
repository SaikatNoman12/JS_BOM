/* ==== JavaScript BOM window timing event ==== */


// use BOM window setTimeout(function, milliSecond) & clearTimeout(VarSetTimeout) timing event:---------
const timeoutText = document.getElementById('timeout-text');

let timeout;

/* setTimeout() */
function startTimeOut() {

    timeoutText.innerHTML = '4 seconds loading...';

    timeout = setTimeout(function () {
        timeoutText.innerHTML = 'He clicked start time button!';
    }, 4000);

}

/* clearTimeout() */
function stopTimeOut() {

    clearTimeout(timeout);

    timeoutText.innerHTML = 'Oh no you clicked stop time button!';

}


// use BOM window setInterval(function, milliSecond) & clearInterVal(VarSetTimeout) timing event:---------
const intervalText = document.getElementById('interval-text');

let intervalOut;

/* setInterval() */
function onStartInterval() {

    intervalOut = setInterval(function () {

        intervalText.innerHTML = new Date().toLocaleTimeString();

    }, 1000);
}

/* clearInterVal() */
function onStopInterval() {

    clearInterval(intervalOut);

}
