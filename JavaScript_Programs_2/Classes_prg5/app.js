// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    this.fullName = `${this.firstname} ${this.lastname}`;
    this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
  }
}
let saurabh = new Employee("Saurabh", "Desale");
console.log(saurabh.email);
