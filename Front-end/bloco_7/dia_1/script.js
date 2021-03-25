let counter = 0
let btn = document.getElementsByTagName('button')[0];
let countertext = document.getElementsByTagName('p')[0];
btn.addEventListener('click', () => {
counter += 1;
countertext.innerText = `Contador: ${counter}`;
console.log(counter);
})