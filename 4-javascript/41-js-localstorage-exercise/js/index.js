window.onload = function () {


    let studentName = document.querySelector('#studentNameinp')
    let coursesList=document.querySelector('#coursesList')
    let gradeInp = document.querySelector('#studentGradeinp')
    let inp = document.querySelector('#addGradeBtn')
    let gradeElement =document.querySelector('#gradeListElement')
    let saveBtn = document.querySelector('#saveStudentBtn')
    let body = document.querySelector('body')
    let studentArray = []
    let gradesArr = []
    inp.addEventListener('click', function (e) {
        //console.log(coursesList.selectedIndex);
        //console.log(coursesList.options[coursesList.selectedIndex].value)
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let Grade = gradeInp.value
        if (selectedCourse !=='' && Grade.trim() !== "") {
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse +': '+Grade + '%'
            
            gradeElement.append(listItem)
            
            let obj = {}
            obj[coursesList.value.replace(/ /g, "_")] = Grade
            gradesArr.push(obj);
            
            
        } 
    })
        saveBtn.addEventListener('click',function (e) {
            let student = {
                     'name':studentName.value,
                    'grades':gradesArr
                     }
                     studentArray.push(student);
                     localStorage.setItem('StudentData',JSON.stringify(studentArray))
            
                     //console.log(studentName.value)
                     gradeElement.innerHTML =''
                     gradesArr = []
                     gradeInp.value = ''
                     studentName.value = ''
        })

        let storageData = localStorage.getItem('StudentData')
        console.log(storageData);
        if (storageData) {
            let dataobj = JSON.parse(storageData)
            console.log(dataobj);

            let containerDiv = document.createElement('div')
            body.append(containerDiv)
            dataobj.forEach(element => {
                console.log(element);
                let nameh3 = document.createElement('h3')
                nameh3.innerText = element.name
                containerDiv.append(nameh3)
                element.grades.forEach(grade => {
                    console.log(Object.keys(grade));
                    let gradeUl = document.createElement('ul')
                    containerDiv.append(gradeUl)
                    Object.keys(grade).forEach(key => {
                        console.log(key);
                        console.log(grade[key]);
                        let gradeLI = document.createElement('li')
                        gradeLI.innerText = key +": " + grade[key] +'%'
                        gradeUl.append(gradeLI)
                        
                        
                    });
                    
                });
                
            });
            
        }



}


// 1=='1' true check the value
// 1 === '1' false check type and value
//homework first show the students and its grade at the end of the page on save student click\
//load the students from the local storage to studentsArr so we keeep them
