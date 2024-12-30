// zakat
let x= (250*2.5)/100;
console.log(x);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let arrNum= [1 , 7 , 9 ,45];
let arrString= ["Str" , "alex" , "moh" , "the" , "fox" , "over" , "lazy" , "dog"];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf ("Tomato" , 0) );
console.log(fruits.indexOf ("Banana" , 0) );



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let Favorite_Food= ["Mansaf" , "Maqlobeh" , "shoshbarak"];
let Favorite_Sport= ["Soccer" , "Tennis" , "Bodybuilding" , "Cycling"];
let Favorite_Movie= ["The lord of the rings" , "the man from uncle" , "Fury"];





/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let  firstOfArray=[1, 4 , 5];
let first= firstOfArray [0];

let firstOfArray1=["t","u","g","x"];
let first1= firstOfArray1 [0];




/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


let lastOfArray= [1,4,5];
let last= lastOfArray[2];

let lastOfArray1= ["t","u","g","x"];
let last1= lastOfArray1[3];


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array= [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);

console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];
array2.push(100);
console.log(array2);

array2.unshift(100);
console.log(array2);

array2.shift();
console.log(array2);

array2.pop();
console.log(array2);


/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr11 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr11.sort();
console.log(arr11);



/* 9.Write a JavaScript function that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/


function getGrade(rate) {
    let grade;
  
    
    switch (true) {
      case (rate < 50):
        grade = "Fail";
        break;
      case (rate >= 50 && rate <= 59):
        grade = "E";
        break;
      case (rate >= 60 && rate <= 69):
        grade = "D";
        break;
      case (rate >= 70 && rate <= 79):
        grade = "C";
        break;
      case (rate >= 80 && rate <= 89):
        grade = "B";
        break;
      case (rate >= 90 && rate <= 100):
        grade = "A";
        break;
      default:
        grade = "Invalid grade";  
    }
    return grade;
}

console.log(getGrade(75));

/*
10.
Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/


let arrs= [];
for(let i=1 ; i<=10 ; i++){
    arrs.push(i);
    console.log(arrs.toString());
    
}

/* factorial */

function factorialnum(num) {
        let start
        let result=1
        for(start = 1; start <= num ; start++){
            result*=start
        }
        console.log(result);
    }
    factorialnum(3)



