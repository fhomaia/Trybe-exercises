function encode(codigo) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  codigo = codigo.split('');
  for (let letraindex = 0; letraindex < codigo.length; letraindex += 1) {
    for (let key in vogais) {
      if (codigo[letraindex] === key) {
        codigo[letraindex] = vogais[key];
      }
    }
  }
  codigo = codigo.join('');
  return codigo;
}

function decode(codigo2) {
  let vogais = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  codigo2 = codigo2.split('');
  for (let letraindex = 0; letraindex < codigo2.length; letraindex += 1) {
    for (let key in vogais) {
      if (codigo2[letraindex] === vogais[key]) {
        codigo2[letraindex] = key;
      }
    }
  }
  codigo2 = codigo2.join('');
  return codigo2;
}

describe ('test encode and decode functions', () => {
  it ('tests if encode is a function', () => {
    expect(typeof encode).toEqual('function')
  })
  it ('tests if decode is a function', () => {
    expect(typeof decode).toEqual('function')
  })
  it('tests if encode converts vowels to numbers', () => {
    expect(encode('aeiou')).toEqual('12345')
  })
  it('tests if decode converts numbers to vowels', () => {
    expect(decode('12345')).toEqual('aeiou')
  })
  it('tests if the return of encode has the same length as its parameter', () => {
    expect(decode('12345')).toHaveLength(5)
  })
})

