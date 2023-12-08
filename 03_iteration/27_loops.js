Skip to content
hiteshchoudhary
/
js-hindi-youtube

Code
Issues
3
Pull requests
9
Actions
Projects
Security
Insights
Commit
for loop
 main
@hiteshchoudhary
hiteshchoudhary committed on May 21 
1 parent 5b168f5
commit 11596d4
Showing 1 changed file with 49 additions and 0 deletions.
 49 changes: 49 additions & 0 deletions49  
05_iterations/one.js
@@ -0,0 +1,49 @@
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);

}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }

}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);

}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);

}
0 comments on commit 11596d4
@AshishKumar555
Comment
 
Leave a comment
 
 You’re not receiving notifications from this thread.
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookiesDo not share my personal informationfor loop · hiteshchoudhary/js-hindi-youtube@11596d4
