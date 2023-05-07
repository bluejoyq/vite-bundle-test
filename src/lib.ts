export class User {
  name : string;
  constructor() {
    this.name = 'bluejoy';
  }
  getName() {
    return this.name;
  }

  setName(name : string) {
    this.name = name;
  } 
}

export const setName = (name : string, user : User) => {
  return user.name = name;
}