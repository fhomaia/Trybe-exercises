const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];

  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        };
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );
  

  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimalsByName = Animals.find((animal) => animal.name === name )
        if (arrayAnimalsByName) {
          return resolve(arrayAnimalsByName)
        }; 

        return reject ('Nenhum animal com esse nome!') 
      }, 100);
    })
  );
  
  const getAnimal = (name) => {
    return findAnimalByName(name)
    .then(animal => animal);
  };

  // console.log(getAnimal('Dorminhoco'))
  getAnimal('Dorminhoco').then((result) => console.log(result))

  const findAnimalsByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimalsByAge = Animals.filter((animal) => animal.age === age)
        if(arrayAnimalsByAge.length > 0){
         return resolve(arrayAnimalsByAge)
        };
        return reject ('Não há registros de animais com esta idade')
      }, 100);
    })
  );

  const animalsListByAge = (age) => {
    return findAnimalsByAge(age).then(animals => animals)
  }

  // ---------------------
  
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

  describe( 'Testando promise filndAnimalByAge', () => {
    describe('Quando existe animal com idade procurada', () => {
      it ('Retorna um array de objetos', () => {
        expect.assertions(1)
        return animalsListByAge(1).then(animal => {
          expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
        });
      });
    });
    describe('Quando não existe animal com idade procurada', () => {
      it ('Retorna um array de objetos', () => {
        expect.assertions(1)
        return animalsListByAge(4).catch(error => {
          expect(error).toEqual('Não há registros de animais com esta idade')
        });
      });
    });
  })