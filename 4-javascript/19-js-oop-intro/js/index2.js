let teacher = {}
teacher.name = 'gggaga'
teacher.lastname = 'kkk'
teacher.fullname = function () {
    return this.name + ' ' + this.lastname
}
let participant = {...teacher}
participant.name = 'Manish'
participant.lastname = 'shahi'

document.write(teacher.fullname() + '<br>')
document.write(participant.fullname() + '<br>')