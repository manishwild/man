let arr = [1,3,8,2,4,6,7]
document.write(arr.toString() + '<br>')
document.write(arr.join("*") + '<br>')
arr[arr.length] = 55
document.write(arr.toString() + '<br>')
arr[arr.length] = 33// add item to the end of the array
document.write(arr.toString() + '<br>')
arr.push(66)// add item to the end of the array
document.write(arr.toString() + '<br>')
arr.pop()// removethe last item  of the array
document.write(arr.toString() + '<br>')
arr.shift()// it will remove first array
document.write(arr.toString() + '<br>')
arr.unshift(100)//it will add the first array
document.write(arr.toString() + '<br>')
// delete arr[3] clear the item but do not delete position
// document.write(arr.toString() + '<br>')
arr.splice(4,0, 5,3,9)// 4; index of the changes 2; number of the item will be deleted 5; will be added in position4
document.write(arr.toString() + '<br>')
arr.splice(1,2) //use splice to delte element 1index of start of deleted items 2; how many element should be deleted
document.write(arr.toString() + '<br>')

let arr1 =[3,3,3,3,3,3,3,3,3,5]
let arr2 = arr1.concat(arr)
document.write(arr.toString() + '<br>')
document.write(arr1.toString() + '<br>')
document.write(arr2.toString() + '<br>')
document.write(arr.toString() + '<br>')

let arr4 = arr.slice(1,3)
document.write(arr4.toString() + '<br>')
document.write(arr.toString() + '<br>')

let arr5 = ['ahmad','tim','manish','safa',"abdhul","hamoudh"]
document.write(arr5.sort() + '<br>')
arr.sort((a,b) =>{return a-b})
document.write(arr.toString() + '<br>')
arr.sort((a,b) =>{return b-a})
document.write(arr.toString() + '<br>')

let arr6 = [2,9,3,-5,7,100,20]
document.write(arr6.sort()+ '<br>')


document.write(arr6.reverse() + '<br>')

numbers =[12,10,15,11,14,13,16];
function ordre(liste){
    var result=[];
    
    
    for(i=0; i<liste.length; i++){
    
    for(j=0; j<liste.length; j++){
            if(liste[i]>liste[j+1]){
    
            }
        }
    
     }
    
     document.write( result );
    }
    
    ordre(numbers);


