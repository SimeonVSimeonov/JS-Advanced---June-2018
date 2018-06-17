function addItem() {
    let text = document.getElementById('newItemText');
    let vale = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = vale.value;
    document.getElementById('menu').appendChild(option);
    text.value = null;
    vale.value = null;
}