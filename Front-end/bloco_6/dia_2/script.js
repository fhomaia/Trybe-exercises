const states = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goias', 'Maranhão', 'Mato Grosso','Mato Grosso do Sul', 'Minas Gerais', 'Para', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte','Rio Grande do Sul', 'Rondônia','Roraima', 'Santa Catarina','São Paulo', 'Sergipe', 'Tocantins'];
const select = document.getElementById('states')
function createOptions() {
    for (let index = 0; index < states.length ; index += 1) {
        const option = document.createElement('option');
        option.innerText = states[index];
        select.appendChild(option);
    }
}

createOptions();

function submit() {
    const btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        recordData();
    })
}

submit();

function recordData() {
    const formElements = document.querySelectorAll('input');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index].value;
        const dataUser = document.querySelector('.form-data');
        const div = document.createElement('div');
        div.className = 'div-curriculum';
        div.innerHTML = userInput;
        dataUser.appendChild(div);
    }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

clearButton.addEventListener('click', clearFields);


var picker = new Pikaday({ 
    field: document.getElementById('datepicker'), 
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    } 
});