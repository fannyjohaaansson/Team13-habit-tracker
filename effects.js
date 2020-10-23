const addButton = document.querySelector('.addbutton');
const input = document.querySelector('.input')
const container = document.querySelector('.container')

class item {
    constructor(itemName) {
        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    remove(item) {
        container.removeChild(item);
    }
}
function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }

    modal.style.display = "none";
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }

})

// TEST

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}