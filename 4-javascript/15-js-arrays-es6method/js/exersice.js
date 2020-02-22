let treeArray = ['ahmad',30,['omar', 5,['Ali',2,['fbw5',20,[]]]],['blabla',99,[]]]
function recursivePrint(arr){
    let min = arr[0]
    arr.forEach(item => {
        if (typeof(item)=='string') {
               document.write(item + '<br>')
                
            }else{
                if(typeof(item)== 'object'){
                    recursivePrint(item)
                }
            }
            
    })
}
recursivePrint(treeArray)