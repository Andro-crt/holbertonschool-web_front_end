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

const showForm = () => {
    if (document.getElementById("welcome")) {
        document.getElementById("welcome").remove();
    }
    document.getElementById("form").style.display = "inline";
}

const hideForm = () => document.getElementById("form").style.display = "none";

const deleteCookiesAndShowForm = () => {
    const date = Date.now();
    document.cookie = `expires = ${date};`
    showForm();
}

const showWelcomeMessageOrForm = () => {
    const firstname = getCookie("firstname");
    if (document.cookie == '') {
        showForm();
    } else {
        hideForm();
        const h1 = document.createElement("h1");
        h1.setAttribute("id", "welcome");
        h1.innerHTML = `<b>Welcome: ${firstname}</b>`;
        const link = document.createElement("a");
        link.innerHTML = "(logout)";
        link.style.fontWeight = "normal";
        link.style.fontStyle = "italic";
        link.style.fontSize = "10px";
        link.setAttribute("onclick", "deleteCookiesAndShowForm()");
        h1.append(link);
        document.body.append(h1);
    }
}
showWelcomeMessageOrForm();