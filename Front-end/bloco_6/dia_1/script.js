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
        dateRestriction();
    })
}

submit();

function dateRestriction() {
    let input = document.getElementById('inicioDay').value;
    if (input.indexOf('/') === 2 || input.indexOf('/') === 5) {
        input =input.split('/')
        if ((parseInt(input[0]) || parseInt(input[1]) || parseInt(input[2])) < 0 || parseInt(input[0]) > 31 ||parseInt(input[1]) > 12 || input[2].length !== 4) {
            alert('Insira uma data válida')
        } else {
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
    }  else {
        alert('Insira uma data válida')
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