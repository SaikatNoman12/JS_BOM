/* ==== JavaScript BOM Object Location ==== */


// se BOm window.location property:---------
const windowLocation = document.querySelector('.location');
windowLocation.innerHTML = 'window.location:- ' + window.location;


// use BOM window.location.href property:--------- 
const locationHref = document.querySelector('.href');
locationHref.innerHTML = 'window.location.href:- ' + location.href;


// use BOM window.location.protocol property:---------
const protocol = document.querySelector('.protocol');
protocol.innerHTML = 'window.location.protocol:- ' + location.protocol;


// use BOM window.location.hostname property:---------
const hostname = document.querySelector('.hostname');
hostname.innerHTML = 'window.location.hostname:- ' + location.hostname;


// use BOM window.location.port property:---------
const port = document.querySelector('.port');
port.innerHTML = 'window.location.port:- ' + location.port;


// use BOM window.location.pathname property:---------
const pathname = document.querySelector('.pathname');
pathname.innerHTML = 'window.location.pathname:- ' + location.pathname;


// use BOM window.location.assign() method:---------
const access = document.querySelector('.assign button');

access.addEventListener('click', function(){
    location.assign('https://www.youtube.com/watch?v=F4R7V-xeb64');
});
