interface User {
  type: 'User';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'Admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type:'User',
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    type:'Admin',
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    type:'User',
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  {
    type:'Admin',
    name: 'Jorge Perez',
    age: 64,
    role: 'Contador',
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (person.type == 'Admin') {
    additionalInformation = person.role;
  } else if (person.type == 'User') {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}


persons.forEach(logPerson);
