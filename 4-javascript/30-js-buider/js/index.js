window.onload = () =>{
    let container = document.querySelector('#container')
    let titleElm = document.createElement('h3')
    titleElm.id="header1"//adding id
    titleElm.innerText ='Manish'
    container.append(titleElm)//append will add element add the end
    let articleElm = document.createElement('p')
    articleElm.innerText='Dont worry be happy'
    articleElm.classList.add('part1')//adding class
    container.append(articleElm)


    let span1 = document.createElement('span')
    span1.innerText=' I am span'
    articleElm.append(span1)//adding span to paragraph
    let htmlText = '<section>'+
    '<h2>Title</h2>'+
    '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatibus quod illo, deserunt quis ad dolore commodi, facilis similique culpa cumque itaque totam corporis quae, eligendi quibusdam mollitia? Sed, vitae?</p>'+
'</section> '
let container2 = document.querySelector('#container2')
for (let i = 0; i < 100; i++) {
    
    container2.innerHTML += htmlText
}



}