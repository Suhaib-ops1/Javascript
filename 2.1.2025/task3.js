/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(n1 , n2 , n3 , n4){
    console.log ("You will be a " + n1 + " in " + n2 + ", and married to " + n3 + " with " + n4 + " kids")
}
tellFortune ("software engineer" , "Jordan" , "Raghad" , 3)





/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
    age=age*7
    console.log("Your doggie is " + age + " years old in dog years!")
}
calculateDogAge(3)





/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


function calculateSupply(x1 , x2){
    const max_age= 100; 
    let b= (max_age-x1) * 365 * x2; 
    console.log("You will need " + b + " cups of tea to last you until the ripe old age of " + x1);
    
}
calculateSupply(99,7)






/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/



function greet(_name) {
    console.log("Hello " + _name);
    
    
}
greet("Suhaib")







/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double (cat) {
    return 2*cat;
    
}

function double1(_v) {
    return 2 * _v;
  }
  double1(7)

  function double3(_c) {
    let _a="2"
    return _a * _c;
  }
  double3("5")



  /*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


function double12 (x) {
    return 2 * x ;
  }
  double12(6)
  
  function double22 (x){
    return 2 * x;
  }
  double22(3)
  
  
  
  function  double13 (x) {
    return 2 * x;
}
double13(2)





/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num){
    num=num**3
    console.log(num);
    
}
cube(5)




/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(n1,n2){
    let _multi=n1*n2;
    console.log(_multi);
    
}
multiply(4,4)






/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense (age){
    if (age>=20)
        return "yes you can"
    else{
        let x = 20 -age;
        return "please come back after "+x+" years to get one"
    }
        
}

console.log(canIGetADrivingLicense(14))



/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/


function sameLength (str1 ,str2){
    if (str1.length == str2.length)
        return true
    else
        return false
}







/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/





function largerNubmer(n1,n2){
    if (n1>n2){
        return n1
    }
    else
        return n2
}

console.log(largerNubmer(7,3))



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/




function smallerNubmer(n1,n2,n3){
    if (n1<=n2 && n1<=n3){
        return n1
    }
    else if(n2<=n1 && n2<=n3)
        return n2
    else 
        return n3
}

console.log(smallerNubmer(9,3,3))

console.log(smallerNubmer(5,99,34))






/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/





function shorterString(str1 , str2 , str3 , str4 , str5) {
    let minString = Math.min(str1.length,str2.length,str3.length,str4.length,str5.length,)

    switch(minString){
        case str1.length:
            return str1;
        case str2.length:
            return str2;
        case str3.length:
            return str3;
        case str4.length:
            return str4;    
        case str5.length:
            return str5;
        default:
            "Error";
            break;
    }
}

console.log(shorterString("air","school","car","by","github")) 

console.log(shorterString("air","tr","car","by","github")) 

console.log(shorterString("by","tr","car","air","github")) 

console.log(shorterString("air","by","car","school","github")) 






/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/





function longerString(str1 , str2 , str3 , str4) {
    let MaxString = Math.max(str1.length,str2.length,str3.length,str4.length)

    switch(MaxString){
        case str1.length:
            return str1;
        case str2.length:
            return str2;
        case str3.length:
            return str3;
        case str4.length:
            return str4;    
        default:
            "Error";
            break;
    }
}

console.log(longerString("air","school","car","by")) 

console.log(longerString("air","tr","car","github")) 





/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/




function isEven(number) {
    if (number % 2 == 0)
        return (true)
    else
        return (false)

}

console.log(isEven(1))

console.log(isEven(4))






/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/


function isOdd(number) {
    if (number % 2 != 0)
        return (true)
    else
        return (false)

}

console.log(isOdd(1))

console.log(isOdd(4))








/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/



function positive(pos) {
    if (pos<0){
        return pos *-1
    }
    else{
        return pos
    }
}

console.log(positive(4))

console.log(positive(-5))








/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/




function fullName(fName , lName) {
    return fName + " " +lName;
}

console.log(fullName("Adam","McCallen"))

console.log(fullName("Alex", "Mercer"))


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/




function average(n1 ,n2 ,n3 ,n4 ,n5) {
    let sum = n1 + n2 + n3 + n4 + n5;
    let avg = sum /5;
    return avg;
}

console.log(average(1,2,3,4,5))

console.log(average(5,7,9,3,5))


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/




function randomNumber() {
    let random = Math.random()
    return random
}

console.log(randomNumber())

console.log(randomNumber())

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/



function randomBetweenNumbers(num1 ,num2) {
    let random = Math.random() * (num2 - num1) + num1;
    return random
}

console.log(randomBetweenNumbers(1,8))

console.log(Math.floor(randomBetweenNumbers(3,100)) )



/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/




function scoreInUniversty(grad) {
    if(grad>=95 && grad<=100)
        return "A"
    else if(grad>=85 && grad<=94)
        return "B"
    else if(grad>=70 && grad<=84)
        return "C"
    else if(grad>=50 && grad<=69)
        return "D"
    else if(grad>=0 && grad<=49)
        return "F"
    else{
        return "Number is out of range please enter a valid number between 0-100"
    }
}

console.log(scoreInUniversty(96)) 


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/





let count = 0;

function counter(rest=false) {
    if (rest == true)
        return count = 0;

    count += 1;
    return count;
}

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/




function resetCounter(){
    let count = counter()-1;
    counter(true);
    return count + ' and the counter reset now'

}

console.log(resetCounter())

console.log (counter())