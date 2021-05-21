let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

//   Problema 1

console.log ("Bem-vinda, " + info.personagem)

// Problema 2
info.recorrente = "sim"
console.log(info)

// Problema 3

for (key in info){
    console.log(key)
}

// Problema 4

for (key in info){
    console.log(info[key])
}

// Problema 5

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };


  for (key in info){
    if (info[key] == info2[key]) {
        console.log ("Ambos " + info[key])
    } else {
        console.log(info[key] + " e " + info2[key])
    } 
  }