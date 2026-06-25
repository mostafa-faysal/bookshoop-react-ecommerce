// // document.querySelector("h1").style.color = "Blue";
// // document.querySelector("b").style.color = "Red";
// // // window.alert("hello")
// // document.write('<h1>hello bage</h1>');
// let tittle =  "the title"
// let dis = "test"
// let date = "14/11"
// let code = `
// <div class="card" style=" width="50%" margine="outo"  ">
// <div class="child">
// <h1>${tittle}</h1>
// <p>${dis}</p>
// <span>${date}</span>
// </div>
// </div>
// `;
//  document.write(code);

// let a = '10'
// // a += 10
// console.log(--a);
// console.log(Math.round(100.2));
// console.log(Math.round(100.5));

// let a = 1_00
// let b = 2_00.5
// let c = 1e2
// let d = 2.4
// console.log(Math.trunc(Math.min(  a , b , c , d)));
// console.log(Math.pow(a ,Math.trunc( d)));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.ceil(d));
// console.log(+(Math.trunc(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(+(Math.trunc(b) / Math.ceil(d)).toFixed(2)));
// let a = "Elzero web school"
// array تحويل الكلمة او الجملة العادية لـ
// let b = a.split(" ");
// // b[1]="mostafa"
// let s = b[1]
// // console.log(Array.isArray(b));
// console.log(s);

// console.log(b)

// console.log(a.repeat(3).slice(20));
// console.log(a.charAt(2).toUpperCase()+ a.slice(3 , 6))
// console.log(a.substring(a.length - 4, a.length -3).toLocaleUpperCase().repeat(8));
// console.log(a.split(" " , 1));
// console.log(a.substring(0, 6) + a.substring(10, 12).toUpperCase() + a.substring(12));
// console.log(
//   a.substring(0 , 1).toLowerCase() +
//     a.substring(1, a.length - 1).toUpperCase() +
//     a.substring(a.length  , a.length - 1).toLowerCase()
// );









//task between if and switch
// let name = "ahmed"
// let gender = "male"
// let age = 30
//  let result = gender === "male" ? "mr" : "mrs"
// document.write(`<b>hallo ${result} ${name}</b>`);
// let theName = "el zero web school";
// let bosistion = theName.includes("w") === true ?console.log("good")
//   :console.log("no")
// if (bosistion == "true") {
//     bosistion =console.log("yes");
// } else {
//     console.log("no");
// }
// ;
// let job = "IT";
// let salary = 0
// switch (job) {
//     case "manager":
//         salary = 8000
//         console.log(`${salary}`);
//         break;
//     case "IT":
//     case "support":
//                 salary = 6000;
//                 console.log(`${salary}`);
//         break;
//     case "developer":
//     case "designer":
//                 salary = 7000;
//                 console.log(`${salary}`);
//         break;


//     default:
//                 salary = 4000;
//                 console.log(`${salary}`);
//         break;
// }






//task
// let zero = 0
// let counter = 3
// let my = ["ahmed", "mazero", "elham", "osama", "Gamal", "Ameer"];
// let length = my.indexOf("mazero");
// // console.log(my.reverse(zero, counter).slice(2));
// // console.log(length);
// // console.log(my.slice(length, counter).reverse());
// // let Unshift = my.unshift("Elzeroo");
// // console.log(my.slice(zero , length));

// // for (let i = 0; i < 10; i++) {
// //     console.log(i);
// // }





//task
// let myAdmin = ["ahmed" , "osama" , "sayed" , "stop" , "samera"]
// let myEmployees = ["amgad", "samah", "ameer", "omar", "othman", "amany", "samya"]
// let admins = 3

// for (let i = 0; i < admins; i++) {
//   let firstLetter = myAdmin[i][0];
//   document.write(
//     `<h1>the admin for team ${i + 1} is ${myAdmin[i]} admins</h1>`
//   );
//   let counter = 1;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === firstLetter) {
//       document.write(`<p>${counter} - ${myEmployees[j]}</p>`);
//       counter++;
//     }
//   }
// }

// function genrateYear(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i === 2000 || i === 2005 || i === 2010) {
//             continue
//         }
//     console.log(i);
    
//     }
// }
// genrateYear(1982 , 2023);

// function calc(num1, num2) {
//     return num1 + num2
// }
// let result = calc(10, 20)
// console.log(result+100);

// function sayHallo(userName = "UnKnown", age = "UnKnown") {
//   return document.write(`<h1 style="color: red">hallo ${userName} your age is ${age}</h1>`);
// }
// sayHallo("mostsafa", 30);

// function calc(...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result +=numbers[i];
//     }
//   return result  ;
//     }
// console.log( calc(10 , 20 , 30 , 40 ,50));















// task
// function showDetails(a, b, c) {
//   let name, age, status;
//   let all =[a, b, c];
//   for (let i = 0; i < all.length; i++) {
//   if (typeof all[i] === "boolean") {
//    status = all[i]
//   }else if (typeof all[i] === "string") {
//     name = all[i];
//   }else if (typeof all[i] === "number" ) {
//     age = all[i];
//   }
//   }
//   return document.write(`<h1>hello ${name} your age is ${age} you are ${status ? "available" : "not available"}</h1>`)
// }

//     showDetails(true, "mostafa", 30);
//     showDetails(30, "mostafa", true);
//     showDetails("mostafa", false, 30);







// task
// let names = function(...nam) {
//   return nam
// }
// console.log(names(`String [osama],[mohamed], [ahmed] ,[mostafa]=>Done !`).toString());
// let names = (...nam) => nam;       //arrow function
// console.log(names(`String [osama],[mohamed], [ahmed] ,[mostafa] ,[ali]=>Done !`).toString());
// let = myNumbers = [20, 50, 10, 60]
// let calc = function (num1, num2 , ...nums) {
//   return num1+num2+nums[0]
// }
// console.log(calc(myNumbers[2] , myNumbers[0] , myNumbers[1] ));
// let = myNumbers = [20, 50, 10, 60]
// let calc =(num1, num2 , ...nums) => num1+num2+nums[0]  //arrow function
// console.log(calc(myNumbers[2] , myNumbers[0] , myNumbers[1] ));







// mapping
// let swappingCases="elZERo"
// let invertedNumber =[1, -10, -20, 15, 100, -30]
// let agnoreBooleans= "Elz123er4o"

// let sw=swappingCases.split("").map(function (ele) {
//   return ele === ele.toUpperCase() ? ele.toLowerCase():ele.toUpperCase()
// }).join("")
// console.log(sw);

// let sw=swappingCases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase():ele.toUpperCase()).join("") //arrow function
// console.log(sw);

// let inv = invertedNumber.map(function (ele) {
//   return -ele
// })
// console.log(inv);

// let inv = invertedNumber.map((ele) =>-ele) //arrow function
// console.log(inv)

// agn= agnoreBooleans.split("").map(function (ele) {
//   return isNaN(parseInt(ele)) ? ele :"";
// }).join("")
// agn= agnoreBooleans.split("").map((ele)=> isNaN(parseInt(ele)) ? ele :"" ).join("") //arrow function
// console.log(agn);






// filtter
// let frindes = ["amgad", "samah", "ameer", "omar", "othman", "amany", "samya"];
// let frindesFiltter = frindes.filter(function (ele) {
//   return ele.startsWith("A"&&"a")
// })
// console.log(frindesFiltter);

// let senten = "i love foood code too playing much";
// let word = senten.split(" ").filter(function (ele) {
//     return ele.length <= 4}).join(" ");
// console.log(word);



//mix bettween map and filter


// let mix = "A13BS2ZX"
// let mixf = mix.filter(function (ele) {
//     return !isNaN(parseInt(ele))
// }).join("")
// console.log(mixf);
// let dub = mixf.split("").map(function (ele) {
//     return ele * ele
// }).join("")
// console.log(dub);


// reduce

// let num = [10, 20, 15, 30];
// let add = num.reduce(function (acc, curr ,index , array) {
//     return acc + curr
// })
// console.log(add);
// let myString = "1,2,3,EE,l,z,e,r,o,W,e,b,_,S,c,h,o,o,l,2,0,Z"
// let solution = myString.split(",")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele + " ")) && ele !== "_" && ele !== myString[myString.length -true];
//   }).map(function (ele) {
//     return ele.length > true ? ele.slice(true) : ele || ele;
//   }).reduce(function (acc, curr) {
//     return `${acc} ${curr}`;
//   });
// console.log(solution); //ElzeroWebSchool

// let myElement = document.querySelector(".js");
// myElement.innerHTML = "hello from js <span>span</span>";
// myElement.textContent = "hello from js <span>span</span>";
// document.images[0].src = "https://google.com"
// document.images[0].alt = "altrnate"
// document.images[0].title = "picture"
// document.images[0].id = "pic"
// document.images[0].className = "pic"
// document.links[0].href = "https://facebook.com"
// document.links[0].target = "_blank"
// document.links[0].rel = "nofollow"
// document.links[0].id = "idLink"
// document.links[0].className = "link"
// document.links[0].textContent = "LINK"

// let myLink = document.querySelector(".link");

//   console.log(myLink.getAttribute("id"));
// console.log(myLink.getAttribute("href"))

// console.log(myLink.setAttribute("href" , "https://twitter.com"))
// console.log(myLink.setAttribute("tittle" , "twitter link"))
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
    
  myP.removeAttribute("data-src");
  console.log("yes");
} else {
  console.log("no");
}
if (myP.hasAttribute("data-src")) {
  console.log("yes");
} else {
  console.log("no");
}