#!/usr/bin/node

const createElement = data => {
    let paragraph = document.createElement("P");
    paragraph.textContent = data.currentTarget.response;
    document.body.appendChild(paragraph);
}

const queryWikipedia = callback => {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    );

    xhr.send();

    xhr.onload = callback;
}

queryWikipedia(createElement)