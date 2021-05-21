const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragondamage = () => {
    let damagerange = [];
    for (let index = 15; index <= dragon.strength; index += 1) {
        damagerange.push(index);
    }
    return damagerange[Math.floor(Math.random()*36)];
  }

  const warriordamage = () => {
    let warriorrange = [];
    for (let index = warrior.strength; index <= (warrior.strength * warrior.weaponDmg); index += 1) {
        warriorrange.push(index);
    }
    return warriorrange[Math.floor(Math.random()*31)];
  }

  const magedamage = () => {
    if (mage.mana >= 15){
      let magerange = [];
      for (let index = mage.intelligence; index <= (mage.intelligence * 2); index += 1) {
          magerange.push(index);
      }
      return magerange[Math.floor(Math.random()*46)];
    }
    return "Não possui mana suficiente";
  }

  const mageSpent = () => {
    if (mage.mana >= 15){
      return 15;
    }
    return 0;
  }

  const mageSpell = () => ({
    manaSpent: mageSpent(),
    damage: magedamage(),
  });


  const gameActions = {
    warriorturn: (warriordamage) => {
      warrior.damage = warriordamage();
      dragon.healthPoints -= warrior.damage;
      return warrior
    },
    mageturn: (mageSpell) => {
      const mageAttack = mageSpell();
      mage.damage = mageAttack.damage;
      mage.mana -= mageAttack.manaSpent;
      dragon.healthPoints -= mageAttack;
      return mage
    },
    dragonturn: (dragondamage) => {
      dragon.damage = dragondamage();
      mage.healthPoints -= dragon.damage;
      warrior.healthPoints -= dragon.damage;
      return dragon
    },
    turn: () => {
      console.log(battleMembers);
      return battleMembers;
    }
  };

gameActions.warriorturn(warriordamage);
gameActions.mageturn(mageSpell);
gameActions.dragonturn(dragondamage);
gameActions.turn();