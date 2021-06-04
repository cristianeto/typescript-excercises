interface IUser {
  uid: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  password: string;
  active: boolean;
}

const users: Array<IUser> = [
  {
    uid: '123123asd',
    name: 'thomas',
    email: 'thomas@mail.com',
    phone: '0998220818',
    dateOfBirth: '1990-02-05',
    password: '123456',
    active: true,
  },
];

console.log(users);
