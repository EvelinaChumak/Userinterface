module.exports = class Random {

  static characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!@#%^&*()_+№;:_+";
  static charactersLength = Random.characters.length;

  static digits = "0123456789";
  static letersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static letersLow = "abcdefghijklmnopqrstuvwxyz";
  static symbols = ".,?!@#%^&*()_+№;:_+";
  static domains = ["hotmail", "gmail", "aol", "mail", "mail", "yahoo"];

  static createPassword(length, email) {
    length = Number(length);
    email = String(email);
    let password = "";
    for (let i = 0; i < length - 4; i++) {
      password += this.characters.charAt(
        Math.floor(Math.random() * this.charactersLength)
      );
    }
    password += this.digits.charAt(Math.floor(Math.random() * this.digits.length));
    password += this.letersUp.charAt(Math.floor(Math.random() * this.letersUp.length));
    password += this.letersLow.charAt(Math.floor(Math.random() * this.letersLow.length));
    password += email.charAt(Math.floor(Math.random() * email.length));
    return password;
  }

  static getString(length) {
    let res = "";
    for (let i = 0; i < length; i++) {
      res += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
    }
    return res;
  }

  static getDomian() {
    return this.domains[Math.floor(Math.random() * this.domains.length)];
  }
};
