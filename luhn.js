let check = function(number) {
  let digits = ("" + number).split("");//split nuber into array of single digits
  let length = digits.length;
  // let checkDigit = digits[length - 1];//check digit is the final digit
  let moddedDigits = [];
  for (let i = 0; i < length; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {//for even i: 2, 4, 6, 8
      let evenDigitSum = digits[i] * 2;
      if (evenDigitSum > 9) {
        let evenDigitSumDigits = ("" + evenDigitSum).split("");
        moddedDigits.push(Number(evenDigitSumDigits[0]) + Number(evenDigitSumDigits[1]));
      } else {//sum <= 9
        moddedDigits.push(evenDigitSum);
      }
    } else {//for odd items: 1, 3, 5
      moddedDigits.push(Number(digits[i]));
    }
  }
  let total = moddedDigits.reduce((a, b) => a + b, 0);
  if (total % 10 === 0) {
    return true;
  } else {
    return false;
  }
  
};

module.exports = check;