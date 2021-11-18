function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function makepasscode() {
  var result = '';
  var characters = '1234567890';
  var charactersLength = characters.length;

  do {
    result = '';
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
  } while (result[0] == '0');
  return result;
}


people = [
  "Babica Marica",
  "Dedi Miro",
  "Mojca (Lan, Lina)",
  "Mojca (Kaja, Zala)",
  "Aljoša Sevčnikar",
  "Miro Primorac",
  "Kaja Primorac",
  "Zala Primorac",
  "Lan Sevčnikar",
  "Lina Sevčnikar",
  "Faris Kočan",
  "Nik Jevšnik",
]

redo = false;

do {
  redo = false;

  people_copy = [...people]
  people_copy = shuffle(people_copy);

  for (let i = 0; i < people.length; i++) {
    const person1 = people[i];
    const person2 = people_copy[i];
    if (person1 == person2) {
      redo = true;
    }
  }
  console.log(people);
} while (redo);

let data = [];

for (let i = 0; i < people.length; i++) {
  const person1 = people[i];
  const person2 = people_copy[i];
  const passcode = makepasscode();

  let person = {
    name: person1,
    person: encodeURIComponent(Buffer.from(person2).toString('base64')),
    passcode: encodeURIComponent(Buffer.from(passcode).toString('base64')),
  };

  console.log(person1, ': ', passcode);

  data.push(person);
}

console.log(data);
