const setCookies = () => {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    let date = new Date();
    date.setDate(date.getDate() + 10);
    document.cookie = `firstname=${firstname};`
    document.cookie = `email = ${email};`
    document.cookie = `expires = ${date.toUTCString()};`
    document.cookie = `path = /`;
}

const showCookies = () => {
    const cookie = document.cookie;
    const p = document.createElement("p");
    const email = getCookie("email");
    const firstname = getCookie("firstname");
    p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    document.body.append(p);
}

const getCookie = name => {
    let cookieName = `${name}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}