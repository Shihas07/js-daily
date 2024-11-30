//  const obj={
//   name:"shihas",
//   place:"vadakara",
//   warrant_y:22
//  }

// console.log(obj["warrant_y"]);

//  console.log(Object.keys(obj))

//   const arr=[1,2,5,6]

// const { log } =require("console")

// arr.shift()
// arr.unshift(8)

// console.log(arr);

//  const result= arr.map((val,ind)=>val*2)

//  console.log(result)

//  const [first,second]=arr

//  console.log(first);

//  const result=  function (){

//    }

//     db.student.updateOne({rollno:1},{$set:{rollno:2}})

//   const http=require("http")

//   const port=3000;

//   const server=  http.createServer()

// server.listen(port,()=>{
//     console.log(`server create ${port}`)
// })

// const button = document.getElementById("btn");
// const img=document.getElementById("img")

//   console.log(img)
// button.addEventListener("click", () => {
//   fetch("https://random.imagecdn.app/500/150")
//  .then(response=> response.url)
//        .then(data=>{
//            console.log("data",)
//            img.src=data
//        })
// });

// const btn = document.getElementById("btn");
// const promise = new Promise((resolve, reject) => {
//   btn.addEventListener("click", () => {

//    reject("error");
//     console.log(promise);
//   });
// });

//    promise.then((data)=>{
//       console.log(data)
//    })
//    .catch((error)=>{
//       console.log(error)
//    })

//

//    function first(){

//      return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             resolve("ok")
//       },7000)
//      })

//    }
//        function second(){
//         return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                 resolve("done")
//                 return()

//           },1000)
//   })
//        }

//     first().then((data)=>console.log(data))
//     .then((data)=>console.log(data))

//    const fs =require("fs")

//    console.log("hello top level")

//    fs.readFile("text.txt","utf-8",()=>{
//       console.log("hello fs ")
// })

//       setImmediate(()=>console.log("immediate code"))
//       setTimeout(()=>console.log("settimout code"),)

//    const obj={
//        name:"shihas"
//    }

//    obj["age"]=3

//    console.log(obj)

// var a=10;

// const arr=[2,3,45]

//    arr.shift()
// const b=arr.shift()

// console.log(b)

//    db.collection.find({id:""},{$in:[2]})

//  db.colection.find({},{$eq:1})

//  db.collection.updateOne({rollno:1},{$set:{rollno:2}})

// const arr=[1,3,4,5]

//  const h= arr.some((item,ind)=>{
//        return item<9
//       //   console.log(item)
//   })

//     console.log(h)

//   const arr=[1,4,5,2,66]

//   const sortedArrY= arr.sort((a,b)=>a-b)

//     console.log(sortedArrY)

//      let result=sortedArrY.length-2
//       const u=  sortedArrY[result]
//      console.log(u)

// const arr=[1,4,5,2,,66,66]

//   function secondLargest(arr){

//       let largest=0;
//       let second=0;

//          for(let i=0;i<arr.length;i++){

//                if(arr[i]>largest){

//                     second=largest
//                     largest=arr[i]
//                }else if(arr[i]!=largest&&arr[i]>second){

//                         second=arr[i]
//                }

//          }
//           return second;
//   }

//    const h=  secondLargest(arr)

//    console.log(h)

//  const arr=[1,2,3,4,5,6,7]

//    function rotate(arr,k){

//         const size=arr.length

//              k=size%k
//              console.log(k)

//               const splicedArray= arr.splice(size-k,size)
//                 console.log(splicedArray)
//               const result=arr.unshift(splicedArray)

//               console.log(arr.flat());
//               console.log(size);

//    }

//    rotate(arr,2)

//   const arr=[1,1,1,2,3,4]
// let result=[]
//    let count=0
//       for(let i=0;i<=arr.length;i++){
//            if(arr[i]!==arr[i+1]){
//                 result.push(arr[i])
//            }
//            else{
//             count++

//            }

//       }

//          console.log(count)
//         console.log(result)

// function removeDuplicate(arr){

//      for(let i=0;i<arr.length-1;i++){

//           if(arr[i]===arr[i+1])
//           arr.splice(i+1,1)

//      }
//        return arr.length
// }

// const arr=[1,1,1,1,3,4,4,5,6]

//  console.log(removeDuplicate(arr))

//   function removeDuplicate(arr){

//         let i=0
//          for(let j=1;i<arr.length;j++){

//                 if(arr[i]!==arr[j]){
//                      i++
//                     arr[i]=arr[j]
//                   //   console.log(arr[i])
//                   // console.log(arr.length)
//                   return
//                 }

//          }
//          return i+1

//   }
//   const arr=[1,1,1,1,3,4,4,5,6]
//  console.log( removeDuplicate(arr))

// const arr=[1,-2,-3,-4,-5,6,-7,8]

//   function subArray(){
//    let maxSum = arr[0];
//    for(let i=0;i<arr.length;i++){
//       let currentSum=0;
//       for(let j=i;j<arr.length;j++){
//           currentSum=currentSum+arr[j];
//           if(currentSum>maxSum){
//              maxSum=currentSum;
//           }

//       }

//   }

//    return maxSum
//   }

//    console.log(subArray(arr))

// console.log("hi");

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 5000  );
// }
// // console.log("hello")
// const intervalId = setInterval(() => {
//     console.log("hello");
//     clearInterval(intervalId);  // Stop the interval after logging
// }, 5000);

// var name="msnafn"
//  const obj={
//    name:"shihas",
//     hi: ()=>{
//        return this.name
//     }
//  }

//     const second={
//        name:"arjun"
//     }

//  console.log("jnjandjNDJNjdnJ",obj.hi.call(second))

//   function memoize (fn){
//    const cache={}

//    // console.log("ss'",cache)
//      return function hi(...args){

//          var result=JSON.stringify(args)
//            console.log(result)
//            if(cache[result]){
//               return cache[result]

//            }
//             else{
//                  const result=fn(...args)
//                cache[result]=result;
//                return result
//             }

//      }

//   }

//    const final=   memoize(sum)

//      final()

//   function sum(num1,num2){

//        for(let i=0;i<=2000;i++){}
//      return num1*num2
//   }

//   console.time("hello")
// //   console.log(sum(1333,23333))
//     console.log(final(1,2))
//   console.timeEnd("hello")

//   console.time("hi")
// //   console.log(sum(1333,23333))
// console.log(final(1,2))

//   console.timeEnd("hi")

//   function Occurence(str){
//    // console.log(str)

//    const string=  str.split("")
//    // console.log(string)

//      let result={}

//        for(let i=0;i<string.length;i++){
//          const char = string[i];
//          console.log(result[char])
//             if(result[char]){
//              result[char]++

//             }
//             else{
//                result[char]=1
//             }

//        }

//        return result

//   }

//  console.log(Occurence("Happy"))

// const arr=[1,2,4,5,6]

// const result=arr.map((val)=>val+2)
// console.log(arr)
// console.log(result)

// const arr=[1,2,4,5,6]

//    // const result=arr.forEach((val)=>val+2)
//    //  console.log(arr)
//    // console.log(result)

//    function loops(){

//         for(let i=0;i<3;i++){
//            setTimeout(() => {
//              console.log(i)
//            }, i*1000);
//         }
//    }
//  loops()

// //  Q,  find the common elements

//     function common(arr1,arr2,arr3){

//           const mergedArr=[...arr1,...arr2,...arr3]
//           let result=[]

//             for(let i=0;i<mergedArr.length;i++){
//                for(let j=i+1;j<mergedArr.length-1;j++){
//                     if(mergedArr[i]===mergedArr[j]&&!result.includes(mergedArr[i])){
//                         result.push(mergedArr[i])
//                     }
//                }
//             }
//             return result

//     }

//     const arr1=[1, 5, 10, 20, 40, 80]
//     const arr2=[6, 7, 20, 80, 100]
//     const arr3=[3, 4, 15, 20, 30, 70, 80, 120]

//  const answer= common(arr1,arr2,arr3)
//  console.log(answer)

// answer is :[ 20, 80 ]

// q,Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Array.prototype.last = function() {
//    if(this.length>0){
//        return this[this.length-1]
//    }
//    else{
//        return -1
//    }
// };

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// Write a program to check if a vowel is present in a Array of strings.

// function Match(arr) {
//   const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log( arr[i])
//     let h = arr[i];
//     let vowelss = false;
//    //  console.log(h);
//     for (let j = 0; j < vowels.length; j++) {
//       if (h.includes(vowels[j])) {
//         vowelss = true;
//         break;
//       }

//     }
//     if (vowelss === false) {
//       result.push(h);
//     }
//   }

//   return result;
// }

// const a = ["My", "Hai", "Dry", "Are", "You", "cry", "Nail", "Rythm"];

// console.log(Match(a));

//reverse a string

// These are just a starting point, and you can create variations or add more questions based on these:

// Task: Reverse an Array

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// const reverse = (num) => {
//   const result = num.sort((a, b) => b-a);
//   return result
// };
// let Input = [1, 2, 3, 4, 5];

// console.log(reverse(Input));

// let Input = [1, 2, 3, 4, 5];

// const reverse=(num)=>{

//   let result=[]

//    for(let i=num.length-1;i>0;i--){

//        result.push(num[i])

//    }

//    return result

// }

// console.log(reverse(Input))

// let Input = [1, 2, 3, 4, 5];

//  let result= Input.reverse()

//  console.log(result)

// let arr = [1, 2, 3, 4, 5];

// let i=0
// let j=arr.length-1
// let temp;

//    while(i<j){

//        temp =arr[j]
//         arr[j]=arr[i];
//         arr[i]=temp

//          i++
//          j--
//    }

//    console.log(arr)

// Task: Find the Maximum Element

// Input: [3, 7, 2, 8, 1]
// Output: 8

//  const arr=[3, 7, 2, 8, 1]

//   let i=0;

//   let max=arr[0]

//      while(i<arr.length){

//            if(arr[i]>max){
//             max=arr[i]
//            }
//            i++
//      }

//      console.log(max)

// Task: Rotate an Array

// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

// const rotate = (arr, num) => {
//   for (let i = 0; i < num; i++) {
//     const result = arr.unshift(arr.pop());
//   }

//   console.log(arr);
//   //  return result
// };

// console.log(rotate([1, 2, 3, 4, 5], 2));

// Task: Remove Duplicates

// Input: [2, 4, 3, 2, 7, 4, 1]
// Output: [2, 4, 3, 7, 1]

// const RemoveDuplicates=(arr)=>{
//     //  console.log(arr)
//          for(let i=0;i<arr.length;i++)  {

//             for(let j=i+1;j<=arr.length;j++){

//                  if(arr[i]===arr[j]){
//                      arr.shift()

//                  }
//             }
//          }

//          return arr

// }

//  console.log(RemoveDuplicates([2, 4, 3, 2, 7, 4, 1]))

// Task: Two Sum

// Input: [2, 7, 11, 15], 9
// Output: [0, 1]

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {

//            return [i,j]
//       }
//     }
//     const element = arr[i];
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));

//kadens algorithem

// Task: Kadane's Algorithm

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Subarray [4, -1, 2, 1] has the maximum sum)

// const kadensSum = (arr) => {
//   let subarr = [];

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       subarr.push(arr.slice(i, j));
//     }
//   }
//   console.log(subarr.length);

//     const result= subarr.map(item=>item.reduce((a,b)=>a+b,0))
//     const max= result.sort((a,b)=>b-a)
//     // subarr.map(item => item.reduce((a, b) => a + b, 0));
//     // console.log(max)

//       return max[0]
//   // return subarr;
// };

// console.log(kadensSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// const kadensSum = (arr) => {
//   let subarr = [];

//   let sum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let currentsum = 0;
//     for (let j = i; j < arr.length; j++) {
//       currentsum += arr[j];
//       if (sum < currentsum) {
//         sum = currentsum;
//       }
//     }

//     console.log(subarr.length);
//   }
//   return sum;
// };

// console.log(kadensSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// const kadensSum = (arr) => {
//   let maxSum = arr[0];
//   let sum = 0;

//   // let sum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (maxSum < sum) {
//       maxSum = sum;
//     }

//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return maxSum;
// };

// //time=o(n)  because the loop itreating only n length;
// //space =o(1)  here we didint make any new array so we taking o(1)

// console.log(kadensSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// to upperCase one after one

// const Upper=str=>{

//   const result=str.split("").map((a,b)=>b%2===0?a.toUpperCase():a).join("")

//      return result

//  }

//  console.log(Upper("shihas"))

// //array [1,2,3,4]  n=1

// //output like [[1] [2] [3] [4]]

// const arrayFunc=(arr,n)=>{
//   let a=[]

//   for(let i=0;i<arr.length;i++){

//           a.push(arr.slice(i,i+n))
//   }
//   return a
// }
// console.log(arrayFunc([1,2,3,4],1))

// //time=0(n)
// //space=0(n)

// Task: Merge Two Sorted Arrays

// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

//  const MergeSort=(arr1,arr2)=>{

//         const mergedArr=[...arr1,...arr2]

//           return mergedArr.sort((a,b)=>a-b)
//  }

//  console.log( MergeSort([1, 3, 5],[2, 4, 6]))

// Task: Move Zeros to the End

// Input: [0, 2, 0, 4, 0, 5, 6]
// Output: [2, 4, 5, 6, 0, 0, 0]

// 5. Longest Palindromic Substring  leetcode

// var longestPalindrome = function(s) {
//   let longest = "";

//   for (let i = 0; i < s.length; i++) {
//       for (let j = i + 1; j <= s.length; j++) {
//           let subStr = s.slice(i, j);
//           let reversed = subStr.split('').reverse().join('');

//           if (subStr === reversed && subStr.length > longest.length) {
//               longest = subStr;
//           }
//       }
//   }

//   return longest;
// };   answer 1 but time is too long


// // two sum approach

// const twoSum = (arr, target) => {
//   let store = [];
//   let val;

//   for (let i = 0; i < arr.length; i++) {
//     val = target - arr[i];

//     if (store.includes(val)) {
//       return [arr[i], val];
//     } else {
//       store.push(arr[i]);
//     }
//   }
// };

// console.log(twoSum([1, 2, 3, 4, 5], 9));


// const twoSum = (arr, target) => {
//   let store = new Set();
 
 
//   for (let i = 0; i < arr.length; i++) {
//     let val = target - arr[i];

//     if (store.has(val)) {
//       return [arr[i], val];
//     }

//     store.add(arr[i]);
//   }

//   return null;
// };

// console.log(twoSum([1, 2, 3, 4, 5], 9)); // [5, 4]



 //here is starting ....