/* ==== JavaScript BOM Window Object History ==== */


// use BOM window.history.back() method:---------
const btn1 = document.querySelector('.btn1 button');
btn1.addEventListener('click', function () {
    history.back();
});


// use BOM window.history.forward() method:---------
const btn2 = document.querySelector('.btn2 button');
btn2.onclick = function () {
    history.forward(); 
};