let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

singer ['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);
