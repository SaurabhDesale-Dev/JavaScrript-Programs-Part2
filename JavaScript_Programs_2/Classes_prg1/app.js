class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    #courseList = [];
    getInfo() {
      return { name: this.name, email: this.email };
    }
    enrollCourse(courseName) {
      this.#courseList.push(courseName);
    }
    getCourseList() {
      return this.#courseList;
    }
    static login() {
      return 'You are now logged in';
    }
  }
  
  class SubAdmin extends User {
    constructor(name, email) {
      super(name, email);
    }
    getAdminInfo() {
      return 'You are a sub-admin';
    }
  }
  const tom = new SubAdmin('Tom', 'tom@jerry.com');
  
  console.log(tom.getAdminInfo());
  console.log(tom.getInfo());
  console.log(tom.login());
  module.exports = User;
  
  button.addEventListener('click', handleClick());
  