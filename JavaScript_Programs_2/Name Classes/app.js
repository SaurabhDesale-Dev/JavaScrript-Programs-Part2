class Name {
  constructor(fname, lname) {
    this.fname = fname.charAt(0).toUpperCase() + fname.slice(1);
    this.lname = lname.charAt(0).toUpperCase() + lname.slice(1);
    this.fullname = `${
      this.fname.charAt(0).toUpperCase() + this.fname.slice(1)
    } ${this.lname.charAt(0).toUpperCase() + this.lname.slice(1)}`;
    this.im = `${this.fname.charAt(0)}.${this.lname.charAt(0)}`;
  }
}

let saurabh = new Name("saurabh", "desale");
console.log(saurabh.im);
