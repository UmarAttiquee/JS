function setUserName(username) {
  this.username = username;
  console.log("called");
}

function setUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new setUser("Hamza", "Hamza@gmail.com", "123assdasd");
console.log(user);
