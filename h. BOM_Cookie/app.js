/* ==== JavaScript BOM window Cookie  ==== */


function setCookie(cname, cnValue, days) {

    let d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);

    let expire = 'expires=' + d.toUTCString();

    document.cookie = cname + '=' + cnValue + ';' + expire + ';' + 'path=/';

}


function getCookie(cname) {
    const cookie = document.cookie;

    const name = cname + '=';

    const cookieArr = cookie.split(';');

    for (let i = 0; i < cookieArr.length; i++) {

        let c = cookieArr[i];

        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {

            return c.substring(name.length);

        }
    }
    return '';
}


function checkCookie(cname) {
    let user = getCookie(cname);

    if (user !== '') {
        alert(cname + 'cookie value is: ' + user);
    }
    else {
        user = prompt('Enter your ' + cname + ': ');
        if (user !== '' && user !== null) {
            setCookie(cname, user, 20);
        }
    }

}

