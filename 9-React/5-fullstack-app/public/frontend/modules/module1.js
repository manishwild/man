class Article {
    constructor(title, descrption, category){
        this.title = title;
        this.descrption = descrption;
        this.category = category;
    }
    render(container){
        const titleElement = document.createElement('h2');
        titleElement.innerText = this.title;

        const categoryElement = document.createElement('h4');
        categoryElement.innerText = this.category.name;

        const descriptionElement = document.createElement('p')
        descriptionElement.innerText = this.descrption;

        container.append(titleElement)
        container.append(categoryElement)
        container.append(descriptionElement)
    }
}

class Category {
    constructor(categoryName){
        this.name = categoryName;
    }
    static News(){
        return new Category('News')
    }
    static Sport(){
        return new Category('Sport')
    }
    static Politics(){
        return new Category('Politics')
    }
    static Beauty(){
        return new Category('Beauty')
    }

}
// import validator from 'validator';
// class ValidateFields {
//     /*
//      * A method that takes in the email
//      * Validates it
//      * Returns the response either error or false if there is no error
//      */
//     validateEmail(title) {
//       if (validator.isEmpty(title)) {
//         return 'title is required';
//       } else if (!validator.isEmail(title)) {
//         return 'Invalid titlel';
//       }
//       return false;
//     }
  
//     validatePassword(description) {
//       if (validator.isEmpty(description)) {
//         return 'description is required';
//       } else if (!validator.isLength(password, { min: 8 })) {
//         return 'description should be minimum 8 characters';
//       }
//       return false;
//     }
//   }
  
//   const validateFields = new ValidateFields();
  
  // export the class instance, so we can import and use it anywhere
  

export{Article,Category}