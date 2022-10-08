/* ========= JavaScript BOM window object ========= */

// use js BOM window.innerWidth property:---------
const width = document.getElementById('innerWidth');
width.innerHTML = 'Hello BOM window.innerWidth property. ' + window.innerWidth;


// use js BOM window.innerHeight property:---------
const height = document.querySelector('#innerHight');
height.innerHTML = 'Hello BOM window.innerHeight property. ' + window.innerHeight;



// use BOM window.open(url, name, specs, replace) method. This method connecting with window.close() method:---------
const btn1 = document.getElementById('btn');

let google1Url;

btn1.addEventListener('click', function () {
    google1Url = window.open('https://www.google.com/');
});


// use BOM var.close() method. This method connecting with window.open() method :---------
const btn2 = document.getElementById('btn2');


btn2.addEventListener('click', function () {

    if (google1Url) {
        google1Url.close();
    }
    else {
        console.log('please open a link');
    }

});


// use BOM window.moveTo(x, y) method & window.open() method:---------
const btn3 = document.getElementById('btn3');

let moveTool;

btn3.addEventListener('click', function () {
    moveTool = window.open('', '', 'width=200px, height=200px');
});

//use moveTo(x, y) method
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
    moveTool.moveTo(200, 200);
});



// use BOM window.moveBy(x, y) method & window.open() method:--------- 
const btn5 = document.getElementById('btn5');

let moveByy;

btn5.addEventListener('click', function () {
    moveByy = window.open('', '', 'width=250px, height=250px');
});

const btn6 = document.getElementById('btn6');
btn6.onclick = function () {
    moveByy.moveBy(700, 700);
}


// use BOM window.resizeTo(x ,y) method & window.open() method:---------
const btn7 = document.getElementById('btn7');

let resizeToo;

btn7.onclick = function () {
    resizeToo = window.open('', '', 'width=200px, height=200px');
}

const btn8 = document.getElementById('btn8')

btn8.onclick = () => {
    resizeToo.resizeTo(400, 400);
}


// use BOM window.resizeBy(x, y) method & window.open() method:---------
const btn9 = document.querySelector('#btn9');

let resizeByy;

btn9.onclick = function () {
    resizeByy = window.open('', '', 'width=200px, height=200px');
}

const btn10 = document.getElementById('btn10');

btn10.addEventListener('click', function(){
    resizeByy.resizeBy(400, 400);
})
