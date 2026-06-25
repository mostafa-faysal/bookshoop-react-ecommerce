// // document.querySelector("h1").style.color="red";
// // window.alert("hello");
// document.write("<h2>me</h2>");





//task-1 folder-1

// let theTittle = "mostafa";
// let theDescribtion = "mostafa web school";
// let theDate = "25/10";
// let creatElment = `
// <div>
//   <h3>${theTittle} </h3>
//   <p>${theDescribtion}</p>
//   <span>${theDate}</span>
// </div>
// `;
// let repet = creatElment.repeat(6)
// document.write(repet)






//task-2 folder-2

// let d ="-100";
// let e ="20";
// let f ="30";
// let g =true;
// console.log(-d*e);  //2000
// console.log(- (--d) + +e * + ++g+ +g + +f);  //173







//  //task-3 folder-3 (num)

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
//1
// console.log(Math.round(Math.min(a , b , c , d)));
// //2
// console.log(Math.pow(a , Math.floor(d)));
// //3
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(d.toFixed(0));
// //3
// console.log();





// task-4 folder-3 (string)

//1
// let a = "Elzero web school"
// console.log(a.charAt(2).toUpperCase()+a.slice(3 , 6)) ;
// //2
// console.log(a.charAt(13).toUpperCase().repeat(8));
// //3
// console.log(a.split(" web school", 1));
// //4
// console.log(a.substring(0 , 6) + a.substring(10 , 17));
// //5
// console.log(a.charAt(0).toLocaleLowerCase() + a.slice(1 , a.length-1).toUpperCase() + a.substring(a.length-1).toLocaleLowerCase());


//task-5  folder-4 if,else

//1
// let a = 10
//     a < 10 ? console.log("10")
//         : a >= 10 && a <= 40 ? console.log("10 To 40")
//             : a > 40 ? console.log(">40")
//                 : console.log("Unknown");



// 2 , 3 , 4 , 5 , 6
// let st = "Elzero Web School"
// let w = st.charAt(st.indexOf("W"))
// b = "34"
// str = 5
// Num = "55"
// repeat = st.substring(st.indexOf("E"), st.indexOf(" "))
// repeat2 = repeat.repeat(2)
// repeat3 = repeat2.trim()
// //2
// if (b ==="34") {
//  console.log("good")
// }
// //3
// if (w === "W") {
//     console.log("good");
// } else {
//     console.log("not3");
// }
// // 4
// if (str !== String(str)) {
//     console.log("good");
// }else {
//     console.log("not4");
// }
// // 5
// if (Num !== Number(Num)) {
//     console.log("good");
// } else {
//     console.log("not5");
// }
// //6
// if (repeat3 =="ElzeroElzero") {
//     console.log("good");
// }else {
//     console.log("not6");
// }


//task -6   folder 4
//1
// let job = "designer";
// let salary = 0;
// switch (job) {
//     case "manager":
//         salary = 8000;
//         console.log(salary);
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(salary);
//         break;
//     case "developer":
//         case "designer":
//         salary = 7000;
//         console.log(salary);
//         break;

//     default:
//         salary = 4000;
//         console.log(salary);
//         break;
// };
// //2
// let = holidays = 8;
// let money = 0;
// if (holidays === 0) {
//     money = 5000;
//     console.log(`my money is ${money}`);
// }else if (holidays === 1 || holidays === 2) {
//     money = 3000;
//     console.log(`my money is ${money}`);
// }else if (holidays === 3) {
//     money = 2000;
//     console.log(`my money is ${money}`);
// }else if (holidays === 4) {
//     money = 1000;
//     console.log(`my money is ${money}`);
// }else if (holidays === 5) {
//     money = 0;
//     console.log(`my money is ${money}`);
// } else {
//     money = 0;
//     console.log(`my money is ${money}`);
// };
// ###################function#######################
// function sayHello(userName) {
//     console.log(`Hi ${userName}`);
// }
// sayHello("mostafa")
function calc(...Numbers) {
      let h= 0
    for (let i = 0; i < Numbers.length; i++) {
        h += Numbers[i];
       
    }
     return h
    
}
console.log( calc(10, 20, 30, 40));