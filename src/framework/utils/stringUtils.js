module.exports = class StringUtils {

  /**
   * Get random string by length
   * @param {number} length asked length
   * @returns {string} generated string
   */
  static generateStringByLength(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
 
  /**
  * Remove all spaces from string
  * @param {string} str current string
  * @returns {string} string without spaces
  */
  static removeAllSpacesFromString(str) {
    return str.replace(/\s/g, '');
  }

  /**
  * Get numbers from string
  * @param {string} str current string
  * @returns {number} result number
  */
  static getNumbersFromString (str) { 
    const numbers = str.match(/\d+/g);
    return this.convertStringToNumber(numbers.join(''));
  }
  
  /**
   * Convert string to number
   * @param {string} str number like string
   * @returns {number} number
   */
  static convertStringToNumber(str) {
    return Number.parseInt(str, 10);
  }

  /**
   * Convert array to string
   * @param {string} str string
   * @returns {string} result string
   */
  static convertArrayToString(str, glue = '') {
    return str.join(glue);
  }
  
  /**
   * Replace all symbols from string
   * @param {string} str current string
   * @param {string} oldSymb replaceable character
   * @param {string} newSymb replacement character
   * @returns {string} string without spaces
   */
  static replaceSymbols(str, oldSymb, newSymb = '') {
    const re = new RegExp(oldSymb, 'g');
    return str.replace(re, newSymb);
  }

  static getNumbersFromString (str) { 
    const numbers = str.match(/\d+/g);
    return this.convertStringToNumber(numbers.join(''));
  }

  static convertNumberToString (num) {
    const str = '' + num;
    const length = str.length;
    if (length <= STR_LENGTH) {
      return str;
    } else {
      return `${str.slice(0, length - STR_LENGTH)},${str.slice(length - STR_LENGTH)}`;
    }
  }

};