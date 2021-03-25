const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1
const addMorningSection = (lesson,key,value) => {
  lesson[key] = value;
  console.log(lesson);
} 

addMorningSection(lesson2,'turno','manhã');

//2.
const listObjectKeys = (object) => {
  console.log(Object.keys(object));
}

listObjectKeys(lesson3);

//3.

const objectSize = (object) => {
  console.log(Object.keys(object).length);
}

objectSize(lesson3);

//4.
const listObjectValues = (object) => {
  console.log(Object.values(object));
}

listObjectValues(lesson3);

//5

const allLessons = {};
Object.assign(allLessons,{lesson1,lesson2,lesson3});
console.log(allLessons);

//6
const totalOfStudents = (object) => {
	let soma = 0;
	for (index in object) {
		
	soma = soma + object[index]['numeroEstudantes'];
	}
	console.log(soma);
}

totalOfStudents(allLessons);

//7
const getValueByNumber = (lesson,value) => {
	const array = Object.values(lesson);
	console.log(array[value]);
}

getValueByNumber(lesson1, 0);

//8
const verifyPair = (object,key,value) => {
	object[key] === value ? console.log(true) : console.log(false);
}

verifyPair(lesson1,'materia','Matemática');

//Bônus

//1
const countMathStudents = (object,subject) => {
	let soma = 0;
	for (key in object) {
		object[key]['materia'] === subject ? (soma = soma + object[key]['numeroEstudantes']) : soma;
	}
	console.log(soma);
}

countMathStudents(allLessons,'Matemática');

//2
const createReport = (object,teacher) => {
	let reportarray = {
		professor: teacher,
		materia: []
	};
	for (key in object) {
		object[key]['professor'] === teacher ? reportarray['materia'].push(object[key]['materia']) : reportarray;
	}

	let soma = 0;
	for (key in object) {
		object[key]['professor'] === teacher ? (soma = soma + object[key]['numeroEstudantes']) : soma;
	}
	reportarray.estudantes = soma;
	console.log(reportarray);
}

createReport(allLessons, 'Maria Clara');
