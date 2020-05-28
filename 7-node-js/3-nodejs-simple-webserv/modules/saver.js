const fs = require('fs')

function saveContent(content,path) {
    //fs.writefileSync
    fs.appendFileSync(path,content)//two ways
    //another way to save multiple file
    // let oldData = fs.readFileSync(path)
    // let newData = oldData + content
    // fs.writeFileSync(path,newData)

}

module.exports = {
    saveContent
}

