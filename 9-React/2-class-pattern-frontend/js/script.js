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

document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#titleInp').value;
    const category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;
    const description = document.querySelector('#descriptionText').value;
    let categoryObg;
    switch (category) {
        case 'news':
            categoryObg = Category.News();
            break;
        case 'sport':
            categoryObg = Category.Sport();
            break;
        case 'politics':
            categoryObg = Category.Politics();
            break;
        case 'Beauty':
            categoryObg = Category.Beauty();
            break;
    
        default:
            categoryObg = new Category('No Category')
            break;
    }
    
    const container = document.querySelector('#container')
    const article = new Article(title, description, categoryObg);
    article.render(container)


})