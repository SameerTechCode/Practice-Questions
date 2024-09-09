// CHAPTER # 5//

// Q1
// var a = 2;
// var b = 1;
// var res = a + b;
// var n = 2;
// var m = 3;
// var exp = n + m;
// var total = res + exp;
// document.write(`Sum of ${res} and ${exp} is ${total} `)

// Q2
// var u = 5;
// var v = 10;
// document.write(`${u+v}<br>${u-v}<br>${u*v}<br>${u/v}<br>${u%v}`);

// Q3
// Declare a variable
// var num;
// document.write("Value after declaration is:"+""+num +"<br>");
// num = 5;
// document.write("Intial value:"+""+num+"<br>");
// num++;
// document.write("Value after increment is:"+""+num+"<br>");
// num += 7;
// document.write("Value after addition is:"+""+num+"<br>");
// num--;
// document.write("Value after decrement is:"+""+num+"<br>");
// var remainder = num / 3;
// document.write("The remainder is:"+""+remainder);

// Q4
// var ticketPrice = 600;
// var Quantity = 5;
// document.write(`Total cost to buy ${Quantity} tickets to movie is ${ticketPrice*Quantity}PKR`)

// Q5
// var number = prompt("Enter your Number");
// document.write("Table of 4 <br>");
// document.write(`4x1=${number*1}<br>`)
// document.write(`4x2=${number*2}<br>`)
// document.write(`4x3=${number*3}<br>`)
// document.write(`4x4=${number*4}<br>`)
// document.write(`4x5=${number*5}<br>`)
// document.write(`4x6=${number*6}<br>`)
// document.write(`4x7=${number*7}<br>`)
// document.write(`4x8=${number*8}<br>`)
// document.write(`4x9=${number*9}<br>`)
// document.write(`4x10=${number*10}<br>`)

// Q6
// let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;
// document.write(`${celsius}C is ${fahrenheit}F`);
// fahrenheit = 77;
// celsius = (fahrenheit - 32) * 5/9;
// document.write(`<br>${fahrenheit}F is ${celsius.toFixed(2)}`);

// Q7
// var priceofitem1 = 650;
// var priceofitem2 = 100;
// var Quantityofitem1 = 3;
// var Quantityofitem2 = 7;
// var shippingcharge = 100;

// document.write(`<h1>Shopping Cart<h1/> <br>Price of item 1 is ${priceofitem1}<br>Quantity of item 1 is ${Quantityofitem1}<br> Price of item 2 is ${priceofitem2}<br>Quantity of item 1 is ${Quantityofitem2}<br>Shipping Charges ${shippingcharge}<br><br>`)
// var totalcost = priceofitem1*Quantityofitem1  + priceofitem2*Quantityofitem2 +shippingcharge;
// document.write(`Total Cost of your order is ${totalcost}`)

// Q8
// var totalmarks = 980;
// var marksobtained = 804;
// var percentage = marksobtained / totalmarks*100;
// document.write(`<h1>Mark Sheet</h1><br>Total marks:${totalmarks}<br>Marks Obtained:${marksobtained}<br>Percentage:${percentage} `)

// Q9
// let dollar = 10;
// let riyal = 25;
// let PKR = `${10*104.80}${25*28}`
// document.write(`<h1>Currency in PKR<h1/> <br><br> Total Currency in PKR:${PKR}`)

// Q10
// var add = 5;
// var mul = 10;
// var div = 2;
// let result = add*mul/div;
// console.log(result);

// Q11
// var Curent = 2016;
// var Birth = 1992;
// var age = Curent-Birth;
// document.write(`<h1>Age Calculator<h1/> <br> Current Year:${Curent} <br> Birth Year:${Birth} <br> Your agr is:${age}`)

// Q12
// var Radius = 20;
// var pi = 3.142;
// var Circumference = 2*pi*Radius;
// var areaofcircle = pi*Radius*2;
// document.write(`<h1>The Geometrizer<h1/><br>Radius of a Circle:${Radius}<br>The Circumference is:${Circumference}<br>The area is:${areaofcircle}`)

// Q13
// var favouritesnack = "Chocalte Chip";
// var currentage = 15;
// var maxmimumage  = 65;
// var snackperday = 3;
// var days = (maxmimumage - currentage) * 365;
// var total = days * snackperday
// document.write(`<h1>The Lifetime Supply Calculator<h1/> <br> Favourite snack:${favouritesnack} <br> Current age:${currentage} <br> Estimated Maximum age:${maxmimumage} <br> Amount of snacks per day:${snackperday} <br> You will need 150 ${favouritesnack} to last you until the ripe old age of ${maxmimumage}`)

// CHAPTER 6-9 CLASS PRACTICE CHAPTERS //
 
// Q1
// var a = 10 ;
// document.write(`Result: <br> The value of a is ${a}<br>....................................<br>`)
// ++a;
// document.write(`The value of ++a is:${a}<br> Now the value of a is:${a}<br><br>The value of a++ is:${a}<br>`)
// a++;
// document.write(`Now the value of a is:${a}<br><br>`)
// --a;
// document.write(`The value of --a is:${a}<br>Now the value of a is:${a}<br><br>The value of a-- is:${a}<br>`)
// a--;
// document.write(`Now the value of a is:${a}`)

// Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
         //  1   -  0  + 1   + 0
// --a; // 0
// --a - --b;
//-1   -1
// --a - --b + ++b;
//-2  -2     -1  
// --a - --b + ++b + b--;
//-3  -2     -1    -2
// document.write(`a is ${a} <br> b is ${b} <br> result is ${result}`)

// Q3
// var name = prompt("Enter your name");
// alert("Hello"+name+"!");

// Q5
// var number = parseInt (prompt("Enter your number", "5"));

// document.write(`${number*1}<br>`)
// document.write(`${number*2}<br>`)
// document.write(`${number*3}<br>`)
// document.write(`${number*4}<br>`)
// document.write(`${number*5}<br>`)
// document.write(`${number*6}<br>`)
// document.write(`${number*7}<br>`)
// document.write(`${number*8}<br>`)
// document.write(`${number*9}<br>`)
// document.write(`${number*10}<br>`)

// // Q7
// var subject1 = prompt("Enter Your First Subject");
// var subject2 = prompt("Enter Your Second Subject");
// var subject3 = prompt("Enter Your Third Subject");

// var Totalmarkspersubject = 100;

// var obtainedmark1 = prompt(subject1 + "Enter your Obtaied marks");
// var obtainedmark2 = prompt(subject2 + "Enter your Obtaied marks");
// var obtainedmark3 = prompt(subject3 + "Enter your Obtaied marks");

// obtainedmark1 = +obtainedmark1;
// obtainedmark2 = +obtainedmark2;
// obtainedmark3 = +obtainedmark3;
 
// var totalobtainedmarks = obtainedmark1 + obtainedmark2 + obtainedmark3;
// var totalpossiblemarks = Totalmarkspersubject * 3;
// var percentage = (totalobtainedmarks / totalpossiblemarks) * 100;

// document.write("<h2>Results</h2>");
// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Obtained Marks: " + obtainedMarks1 + "<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Obtained Marks: " + obtainedMarks2 + "<br>");
// document.write("Subject 3: " + subject3 + "<br>");
// document.write("Obtained Marks: " + obtainedMarks3 + "<br><br>");
// document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Total Possible Marks: " + totalPossibleMarks + "<br>");
// document.write("Percentage: " + percentage + "%");

// CHAPTER # 6-9 HOME //
// CHAPTER # 6 
// Q1
// x = x+1;
// x++;
// x+=1;
// Q2
// var a = 100;
// --a;  //99
// Q3
// var x = 50;
// x++;//51
// Q4
// var y = 50;
// var z = --y;
// console.log(z);
// Q5
// let newNum = num--;
// Q6
// let originalValue = num++, newValue = originalValue;
// Q7
// Assign a number value to a variable
// let num = 10;
// num++;
// alert(num);

// CHAPTER # 7
// Q1
// var calculatednum = 2+(2*6);
// console.log(calculatednum);
// Q2
// var calculatedNum = (2 + 2) * 6;
// console.log(calculatedNum); // This will log '24' to the console

// Q3
// var calculatedNum = (2 + 2) * (4 + 2);
// console.log(calculatedNum); // This will log '24' to the console
// Q4
// var calculatedNum = ((2 + 2) * 4) + 2;
// console.log(calculatedNum); // This will log '18' to the console
// Q5
// var cost = (2 + (2 * 4)) + 10;
// Q6
// var units = (2 + 2) * (4 + 10);
// Q7
// var pressure = (4 / (2 * 4));
// var pressure = (4 / 2) * 5;

// CHAPTER # 8
// Q1  
// var num = "2" + "2";
// Q2
var message = ("Hello," + "Dolly");
alert(message);
// Q3
alert("33" + 3);
// Q4
alert("Pakistan" + " Zindabad");
// Q5
var concatenatedValue = "The number is " + 5;
// Q6
var firstPart = "Hello";
var secondPart = "World";
var combined = firstPart + " " + secondPart;
 
// CHAPTER # 9
// Q1
var firstName = prompt("Enter first name");
// Q2
var country = prompt("Country?", "China");
// Q3
var yourName = prompt("Enter Your Name");
// Q4
var userInput = prompt("Please enter your favorite color:", "Blue");
// Q5
var message = "What is your favorite movie?";
var defaultResponse = "Inception";
var userResponse = prompt(message, defaultResponse);
// Q6
var response = prompt("Enter your city:", "New York");
alert("You entered: " + response);





















