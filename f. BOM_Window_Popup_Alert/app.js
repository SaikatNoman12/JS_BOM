/* ==== JavaScript BOM Window Popup Alert ==== */


// use BOM window alert() popup:---------
function onShowAlert() {

    window.alert('You clicked alert button!');

}


// use BOM window confirm() popup:---------
const confirmText = document.getElementById('confirmText');

function onShowConfirmAlert() {

    let txt;

    if (window.confirm('Are you agree me?')) {
        txt = 'Yahooo! he is agreed!';
    }
    else {
        txt = 'He is not agreed!';
    }

    confirmText.innerHTML = txt;

}


// use BOM window prompt() popup:---------
const promptText = document.getElementById('promptText');

function onShowPromptAlert() {
    const promptValue = window.prompt('Please enter your name:', 'Jhone Deo');

    let text;

    if (promptValue === null || promptValue === "") {
        text = 'He is canceled this alert!';
    }
    else {
        text = 'The name is: ' + promptValue;
    }

    promptText.innerHTML = text;
}


