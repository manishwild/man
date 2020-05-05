//task 1 what will this code print

// var x = 5
// {
//     let d = 3
//     console.log(x);
   ///////////////////////////////////////// 
// }
// console.log(d);
// it will print 5 and error d is not defined is not defined
//task 2
// let x = 5
// {
//    var d = 3
//     console.log(x);
   //////////////////////////////// 
// }
// console.log(d);
//answer 5 and 3 var will be

//task 3
// const i = 6
// console.log(i);
// i = 2
// console.log(i);
//answer is 6 and second is type error because const cannot be change
///////////////////////////////////////////////////////////////
// const arr = [1,3,6]
// console.log(arr[2]);
// arr[2] = 8
// console.log(arr[2]);
//array is object
//it will print 6 then 8///////////
////////////////////////////////////////
//task 5
//whwt thic code will print
// let c = 3
// let y = c
// y=7
// console.log(y);
// console.log(c);
//it will print 7 and 3
//////////////////////////////////////////
//task 6 what is result
// let obj ={
//     prop1:2,
//     prop2:'dummy',
//     prop3:true

// }
// obj.prop2 = 'hello'
// console.log(obj.prop1);
// console.log(obj.prop2);
//answer it will print 2 then hello
/////////////////////////////////
//task 7 what is result
// let obj ={
//          prop1:2,
//          prop2:'dummy',
//         prop3:true
//     }   
//     let obj2 =obj
//     obj2.prop1=6
//     console.log(obj2.prop1);
//     console.log(obj.prop1);
    // it will print 6 then 6
    ////////////////////////////////////
    //task 8 write shortest code to print item in the following array which are greater or equal
   let arr = [2,6,7,9,2,6,-9,3,10,12,66,-6]
    //let num = arr.filter(element => element >=6)
    //console.log(num);
    console.log(arr.filter(element => element >=6));
    
    //task 9
    //print new array which contains item from arr multiable 2
    // let newArr = arr.map(item => item*2)
    // console.log(newArr);
    console.log(arr.map(item => item*2));
    
    // let arr1 =arr.forEach(element => {
    //     console.log(element*2);
    //     })
 /////////////////////////
 //task10 combined
 console.log(arr.filter(element => element >=6).map(item => item*2))

//  let newArr = arr.filter(element => element >=6).map(item => item*2)
//  console.log(newArr);
 //////////////////////////////////////


//task 11
 
 