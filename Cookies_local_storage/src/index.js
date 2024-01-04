const setCookies = () => {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    document.cookie = `firstname=${firstname};`
    document.cookie = `email = ${email};`
}

const showCookies = () => {
    const cookie = document.cookie;
    const p = document.createElement("p");
    p.innerHTML = `Cookies: ${cookie}`;
    document.body.append(p);
}