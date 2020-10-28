const addButton = document.querySelector('.addbutton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');



function addRow() {
    var tableBody = document.querySelector("#table tbody");
    var tr = document.createElement('tr');

    // 1. Add habit table date(td)
    var td = document.createElement('td');
    var input = document.createElement('input');
    var inputVal = document.getElementById("myInput").value;
    input.value = inputVal;
    input.disabled = true;
    input.type = 'text';
    td.appendChild(input)
    tr.appendChild(td)

    // 2. Add Start/End
    var td = document.createElement('td');
    var inputDate = document.createElement('input');
    inputDate.type = 'date';
    td.appendChild(inputDate)
    tr.appendChild(td)
    // 3. Add 31 checkboxes
    for (var i = 0; i < 31; i++) {
        var td = document.createElement('td');
        var input = document.createElement('input')
        input.type = 'checkbox';
        td.appendChild(input)
        tr.appendChild(td)
    }
    var td = document.createElement('td');
    let removeButton = document.createElement('button');
    removeButton.onclick = trash;
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.toggle('removeButton');
    td.appendChild(removeButton)
    tr.appendChild(td)

    tableBody.appendChild(tr);

    modal.style.display = "none";
    document.getElementById('myInput').value = '';
}


addButton.addEventListener('click', addRow);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        addRow();
    }

})




// Popup

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

function trash() {
    console.log(this);
    const wrapper = this.closest("tr");
    wrapper.remove();

};
