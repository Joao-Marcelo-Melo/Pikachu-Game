const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');


const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
  }
  else{
    button.setAttribute('disabled', '');
  }

}


 
const valueSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('player', input.value);
  window.location = "./game-page/game.html"
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', valueSubmit);


