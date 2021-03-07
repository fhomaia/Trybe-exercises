function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Problema 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let daysIndex = 0; daysIndex < dezDaysList.length; daysIndex += 1){
  let novembro = document.getElementById('days')
  let dNov = document.createElement('li')
  dNov.innerHTML = dezDaysList[daysIndex]
  dNov.className = 'day'
  if (daysIndex === 25 || daysIndex ===  26 || daysIndex ===  32 ){
      dNov.className += ' holiday'    
  }
  if (daysIndex === 5 || daysIndex === 12 || daysIndex === 19 || daysIndex === 26){
    dNov.className += ' friday'    
  }
  novembro.appendChild(dNov)
  }

  // Problema 2
  function feriados (Feriados){
      let botao = document.createElement('button')
      botao.id = 'btn-holiday'
      botao.innerText = Feriados
      let div = document.getElementsByClassName('buttons-container')[0];
      div.appendChild(botao)
  }
  feriados('Feriados');

// Problema 3
 function displayHolidays() {
    let getHolidayButton = document.getElementById('btn-holiday');
    let getHolidays = document.getElementsByClassName('holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === 'white') {
          getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          getHolidays[index].style.backgroundColor = 'white';
        }
      }
    })
  };
  
  displayHolidays();

  // Problema 4
  function sexta (Sextafeira){
    let sexta = document.createElement('button')
    sexta.id = 'btn-friday'
    sexta.innerText = Sextafeira
    let div = document.getElementsByClassName('buttons-container')[0];
    div.appendChild(sexta)
}
sexta('Sexta-feira');

// Problema 5

function displayFridays(fridaysArray) {
    let getFridayButton = document.getElementById('btn-friday');
    let getFridays = document.getElementsByClassName('friday')
    let fridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < getFridays.length; index += 1) {

        if (getFridays[index].innerText === fridayText){
          getFridays[index].innerText = fridaysArray[index]
        } else { getFridays[index].innerText = fridayText
        }

        if (getFridays[index].style.backgroundColor === 'white') {
          getFridays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          getFridays[index].style.backgroundColor = 'white';
        }
      }
    })
  };
  
  displayFridays([ 4, 11, 18, 25 ]);

  // PROBLEMA 6

  let dias = document.getElementsByClassName('day')
  for (let index = 0; index < dias.length; index += 1){
    dias[index].addEventListener('mouseover',mouseSobre);
    dias[index].addEventListener('mouseleave',mouseFora);

      function mouseSobre (){
      dias[index].style.fontSize = '24px'
    }
      function mouseFora (){
    dias[index].style.fontSize = '20px'
    }
  }

  //Problema 7
  function createTask (task) {
    let taskAgenda = document.getElementsByClassName('my-tasks')[0];
    let task1 = document.createElement('span');
    task1.innerText = task;
    taskAgenda.appendChild(task1)
  }

  createTask('cozinhar');

  // Problema 8
  function captionColor (color) {
    let taskAgenda = document.getElementsByClassName('my-tasks')[0];
    let divCaption = document.createElement('div');
    divCaption.className = 'task';
    divCaption.style.backgroundColor = color;
    taskAgenda.appendChild(divCaption);
  }

  captionColor('yellow');

  // Problema 9
  function selectTask (){
    let taskList = document.getElementsByClassName('task');
    for (let index = 0 ; index < taskList.length ; index += 1){
    taskList[index].addEventListener('click',function (){
      if(taskList[index].className === 'task selected'){
        taskList[index].className = 'task'
      } else {taskList[index].className = 'task selected'}
    })
    }
  }
  selectTask();

  // Problema 10
  
function dayColor (){
  let dias = document.getElementsByClassName('day');
  let taskList = document.getElementsByClassName('selected');
  for (let index = 0 ; index < dias.length ; index += 1){
    dias[index].addEventListener('click',function(){
      if (dias[index].style.backgroundColor === '') {
        dias[index].style.backgroundColor = taskList[0].style.backgroundColor;
      } else {
        dias[index].style.backgroundColor = '';
      }
    })
  }
}
dayColor();

// Problema Bônus

function addComment (){
  let comment = document.querySelector('#task-input');
  let addButton = document.querySelector('#btn-add');
  addButton.addEventListener('click', function(){
    if (comment.value.length > 0){
    let licomment = document.createElement('li');
    licomment.innerText = comment.value
    let commentlist = document.getElementsByClassName('task-list')[0]
    commentlist.appendChild(licomment)
    comment.value = ''
    } else { 
      alert('Error: Digite ao menos 1 caractere.')
    }
  })
  comment.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && comment.value.length > 0) {
      let licomment = document.createElement('li');
      licomment.innerText = comment.value
      let commentlist = document.getElementsByClassName('task-list')[0]
      commentlist.appendChild(licomment)
      comment.value = ''
    }
  })
}

addComment();