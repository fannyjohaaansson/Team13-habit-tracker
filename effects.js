
<<<<<<< Updated upstream
let createBtn = document.getElementById("mainHabitButton");
let popHabit = document.getElementsByClassName("popUp");
let popTime = document.getElementsByClassName("choose-habit"); 
let showUp = document.getElementsByClassName("appear");

=======

document.getElementById('moreFields').onclick = addMoreFields;    //    set binding

var newRow = document.getElementById('rowTemplate').cloneNode(true),
    myTable = document.getElementById('myTable');

function addMoreFields() {
    myTable.appendChild(newRow.cloneNode(true));
}




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
>>>>>>> Stashed changes
