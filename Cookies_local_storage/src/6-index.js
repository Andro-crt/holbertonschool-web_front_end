const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

if (window.sessionStorage !== undefined) {
    document.addEventListener('DOMContentLoaded', () => {
        createStore();
        displayCart();
    })
} else {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
}

const addItemToCart = item => {
    sessionStorage.setItem(item, 'true');
}

const createStore = () => {
    const ul = document.createElement("ul");
    availableItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        li.onclick = addItemToCart(item);
        ul.append(li);
    })
    document.body.append(ul);
}

const displayCart = () => {
    if (window.sessionStorage.length > 0) {
        const p = document.createElement("p");
        const length = window.localStorage.length;
        p.innerHTML = `You previously had ${length} items in your cart`;
        document.body.append(p);
    }
}
