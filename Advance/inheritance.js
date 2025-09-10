class userName {
  constructor(username) {
    this.username = username;
  }
}

class Teacher extends userName {
  constructor(username, email) {
    super(username);
    this.email = email;
  }

  callMe() {
    console.log(
      `Hello My Name is ${this.username} and My email is ${this.email}`
    );
  }
}

const tec = new Teacher("Hamza", "Hamza@gmail.com");
tec.callMe();
