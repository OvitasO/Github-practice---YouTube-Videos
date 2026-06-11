//CROSS BUTTON THAT REMOVES TEXT FROM THE SEARCH INPUT

const inputElem = document.getElementById('InputElem');
const keyboardElem = document.getElementById('keyboardElem');
const crossElem = document.getElementById('crossElem');

renderInput();

//Checks if the input has any text in it
function inputCheck() {
  if (inputElem.value === '') {
    return false;
  } 
  else {
    return true;
  }
}

//Shows or hides the cross button
function renderInput() {
  if (inputCheck() === true) {
    keyboardElem.classList.add('busy');
    crossElem.classList.add('outer-cross');
  }
  else {
    keyboardElem.classList.remove('busy');
    crossElem.classList.remove('outer-cross');
  }
}

inputElem.addEventListener('input', renderInput);

//Clears the input onclick
function clearInput() {
  inputElem.value = '';
  renderInput();
}

crossElem.addEventListener('click', clearInput);