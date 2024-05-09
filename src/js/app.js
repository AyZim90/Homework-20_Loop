//1.reqemlerden ibaret bir array yaradin ve hemen arryin icinde gezerek (dovr) tek edeleri tapib her birini 1 vahid artirin.

// let myArr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<myArr.length; i++){
//     if(myArr[i] %2!==0){
//         myArr[i]++;
//     }
// }
// console.log(myArr)

//2.reqemlerden ibaret bir array yaradin ve icinde gezerek cut olan ededleri arrain 1-ci elemtine, tek olan edeleri ise arrayin sonuncu elementine vurun. 
// let numbs=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbs=[];
// let oddNumbs=[];
// for(let numb of numbs){
//     if(numb %2===0){
//         evenNumbs.push(numb);
//     }
//     else{
//         oddNumbs.push(numb);
//     }
// }
// let newArr=evenNumbs.concat(oddNumbs);

// console.log(newArr)

//3. reqemlerden ibaret bir array yaradin ve icinde gezerek arrayin en boyuk ve en kicik elementini tapin daha sonra tapdiginiz bu iki reqemin hasilini console-a yazdirin.

// let arr=[5, 8, 3, 12, 9, 4, 6];
// let minNumb=arr[0];
// let maxNumb=arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]<minNumb){
//         minNumb=arr[i];
//     }
//     if(arr[i]>maxNumb){
//         maxNumb=arr[i];
//     }
// }
// let prodArr=minNumb*maxNumb;
// console.log(prodArr)