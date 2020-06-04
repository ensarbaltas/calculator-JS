function Calculator(num) {
    this._result = num;
}

Calculator.prototype = {
  constructor: Calculator,

  Plus: function() {
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;
    document.getElementById('result1').innerHTML=parseInt(num1)+parseInt(num2);
    return this;
  },
  PlusClear: function() {
    document.getElementById('input1').value=0;
    document.getElementById('input2').value=0;
    document.getElementById('result1').innerHTML=0;
    return this;
  },

  Subtraction: function() {
    var num3 = document.getElementById('input3').value;
    var num4 = document.getElementById('input4').value;
    document.getElementById('result2').innerHTML=parseInt(num3)-parseInt(num4);
    return this;
  },
  SubtractionClear: function() {
    document.getElementById('input3').value=0;
    document.getElementById('input4').value=0;
    document.getElementById('result2').innerHTML=0;
    return this;
  },

  Multiplication: function() {
    var num5 = document.getElementById('input5').value;
    var num6 = document.getElementById('input6').value;
    document.getElementById('result3').innerHTML=parseInt(num5)*parseInt(num6);
    return this;
  },
  MultiplicationClear: function() {
    document.getElementById('input5').value=0;
    document.getElementById('input6').value=0;
    document.getElementById('result3').innerHTML=0;
    return this;
  },

  Division: function() {
    var num7 = document.getElementById('input7').value;
    var num8 = document.getElementById('input8').value;
    document.getElementById('result4').innerHTML=parseInt(num7)/parseInt(num8);
    return this;
  },
  DivisionClear: function() {
    document.getElementById('input7').value=0;
    document.getElementById('input8').value=0;
    document.getElementById('result4').innerHTML=0;
    return this;
  },

  Square: function() {
    var num9 = document.getElementById('input9').value;
    document.getElementById('result5').innerHTML=parseInt(num9)*parseInt(num9);
    return this;
  },
  SquareClear: function() {
    document.getElementById('input9').value=0;
    document.getElementById('result5').innerHTML=0;
    return this;
  },

  SquareRoot: function() {
    var num10 = document.getElementById('input10').value;
    document.getElementById('result6').innerHTML=parseInt(num10)**0.5;
    return this;
  },
  SquareRootClear: function() {
    document.getElementById('input10').value=0;
    document.getElementById('result6').innerHTML=0;
    return this;
  },
  Factorial: function (){
    var n=document.getElementById('input11').value;
    var a=1;
    for(i=1; i<=n; i=i+1){
        var a = a*i ;
    }
    document.getElementById('result7').innerHTML=a;
    return this;
},
  
FactorialClear: function (){
  document.getElementById('input11').value=0;
  document.getElementById('result7').innerHTML=0;
  return this;
},

}
var account = new Calculator();

//account.Minus.Goster
// EnterNumber = 
// ['(1) plus',
// '(2) minus',
// '(3) multiplication',
// '(4) division',
// '(5) square',
// '(6) square root']

// console.log(EnterNumber)
// exiting = 1
// while (exiting == 1){
// ans = prompt("Enter the number of the action you want to take: ");
// if (ans == "1"){
//     console.log(account.Plus(parseInt(prompt("Enter the first number for addition: ")),parseInt(prompt("Enter the second number for the addition process: "))));
//     
// }
 
// else if (ans == "2"){
//     console.log(account.Minus(parseInt(prompt("Enter the first number for minus: ")),parseInt(prompt("Enter the second number for the minus: "))));
// }
 
// else if (ans == "3"){
//     console.log(account.Multiplication(parseInt(prompt("Enter the first number for multiplication: ")),parseInt(prompt("Enter the second number for the multiplication process: "))));
// }
 
// else if (ans == "4"){
//     console.log(account.Division(parseInt(prompt("Enter the first number for division: ")),parseInt(prompt("Enter the second number for the division: "))));
// }
 
// else if (ans == "5"){
//    num9 = parseInt(prompt("Enter the number you want to calculate the square: "));
//    console.log(num9, "square of the number =", num9 ** 2);

// }
 
// else if (ans == "6"){
//    ans10 = parseInt(prompt("Enter the number you want to calculate the square root of: "))
//    console.log(ans10, "square root of the number = ", ans10 ** 0.5)
// }

// else {
//    console.log("Incorrect entry.")
//    console.log("Enter one of the options below:", EnterNumber)
// }
 

//    ans = prompt("Enter the number of the action you want to take (To exit q): ")
//    if (ans == "q"){
//        console.log("exiting...")
//        exiting = 0
//    }
// }

// console.log(account.Plus(parseInt(prompt("Enter the first number for addition: ")),parseInt(prompt("Enter the second number for the multiplication process: "))));
// console.log(account.Minus(parseInt(prompt("Enter the first number for addition: ")),parseInt(prompt("Enter the second number for the multiplication process: "))));
// console.log(account.Multiplication(parseInt(prompt("Enter the first number for addition: ")),parseInt(prompt("Enter the second number for the multiplication process: "))));
// console.log(account.Division(parseInt(prompt("Enter the first number for addition: ")),parseInt(prompt("Enter the second number for the multiplication process: "))));



//function Calculator(num) {
//     this._result = num;
//   }

//   Calculator.prototype = {
//     constructor: Calculator,
//     Plus: function(num) {
//       this._result += num;
//       return this;
//     },
//     Minus: function(num) {
//       this._result -= num;
//       return this;
//     },
//     Multiplication: function(num) {
//       this._result *= num;
//       return this;
//     },
//     Division: function(num) {
//       this._result /= num;
//       return this;
//     },
//     Goster: function() {
//       console.log(this._result);
//       return this;
//     }
// }

// var account = new Calculator(3);
// account.Plus(10).Minus(3).Multiplication(5).Goster().Division(5).Goster();


// EnterNumber = 
// ['(1) plus',
// '(2) minus',
// '(3) multiplication',
// '(4) division',
// '(5) square',
// '(6) square root']

// console.log(EnterNumber)
// ans = prompt("Enter the number of the action you want to take: ");
// if (ans == "1"){
//    ans1 = parseInt(prompt("Enter the first number for addition: "));
//    ans2 = parseInt(prompt("Enter the second number for addition: "));
//    console.log(ans1, "+", ans2, "=", ans1 + ans2);
// }
 
// else if (ans == "2"){
//    ans3 = parseInt(prompt("Enter the first number for subtraction: "));
//    ans4 = parseInt(prompt("Enter the second number for subtraction: "));
//    console.log(ans3, "-", ans4, "=", ans3 - ans4);
// }
 
// else if (ans == "3"){
//    ans5 = parseInt(prompt("Enter the first number for the multiplication process: "));
//    ans6 = parseInt(prompt("Enter the second number for the multiplication process: "));
//    console.log(ans5, "x", ans6, "=", ans5 * ans6);
// }
 
// else if (ans == "4"){
//    ans7 = parseInt(prompt("Enter the first number for dividing: "));
//    ans8 = parseInt(prompt("Enter the second number for dividing: "));
//    console.log(ans7, "/", ans8, "=", ans7 / ans8);
// }
 
// else if (ans == "5"){
//    sayı9 = parseInt(prompt("Enter the number you want to calculate the square: "));
//    console.log(sayı9, "square of the number =", sayı9 ** 2);

// }
 
// else if (ans == "6"){
//    ans10 = parseInt(prompt("Enter the number you want to calculate the square root of: "))
//    console.log(sayı10, "square root of the number = ", ans10 ** 0.5)
// }

// else {
//    console.log("Incorrect entry.")
//    console.log("Enter one of the options below:", EnterNumber)
// }
 
// exiting = 1
// while (exiting == 1){
//    ans = prompt("Enter the number of the action you want to take (To exit q): ")
//    if (ans == "q"){
//        console.log("exiting...")
//        exiting = 0
//    }
// }
  