class User {
  constructor(name, password) {
    (this.name = name), (this.password = password);
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(val) {
    this._password = val;
  }
}

const user = new User("hamza", "asdf");
console.log(user.password);
