const showCookies = () => {
    const cookie = document.cookie;
    const p = document.createElement("p");
    const email = Cookies.get("email");
    const firstname = Cookies.get("firstname");
    p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    document.body.append(p);
}

const showForm = () => {
    if (document.getElementById("welcome")) {
        document.getElementById("welcome").remove();
    }
    document.getElementById("form").style.display = "inline";
}

const hideForm = () => document.getElementById("form").style.display = "none";

const deleteCookiesAndShowForm = () => {
    Cookies.remove('name', { path: '' });
    Cookies.remove('email', { path: '' });
    showForm();
}

const showWelcomeMessageOrForm = () => {
    const firstname = Cookies.get("firstname");
    if (document.cookie == '') {
        showForm();
    } else {
        hideForm();
        const h1 = document.createElement("h1");
        h1.setAttribute("id", "welcome");
        h1.innerHTML = `Welcome: ${firstname}`;
        h1.style.fontWeight = "bold";
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

const setCookiesAndShowWelcomeMessage = () => {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    Cookies.set('firstname', `${firstname}`, { expires: 10, path: '' });
    Cookies.set('email', `${email}`, { expires: 10, path: '' });
    showWelcomeMessageOrForm();
}