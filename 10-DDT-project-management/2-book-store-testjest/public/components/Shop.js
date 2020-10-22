import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom';
import { allBookPost } from '../services/api';

const Shop = () =>{

    const initialState = {
        books:[]
    }
    const [state, setstate] = useState(initialState);

    useEffect(() => {
        allBookPost().then(data => {
            console.log(data)
            
            if (data !=2) {
                 setstate({...state, books:data})
            }
           
        })
    }, []);
     
       const bookElement = state.books.map(book => {
           return (
            <div key={book._id} className="col-md-3">
            <div className="item">
                <img className="bookimage" src={book.imgs[0]} alt="img"/>
                <h3><Link to={'/book/' + book.title.trim().replace(/ /g,'_')+'/'+book._id}>{book.title}</Link></h3>
                
            <h3><Link to={'/book/' + book.title.trim().replace(/ /g,'_')+'/'+book._id}>Download</Link></h3>
            </div>
        </div>
           )
       }) 
       return(
           <React.Fragment>
        <div className="breadcrumb">
        <div className="container">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <span className="breadcrumb-item active">Shop</span>
        </div>
    </div>
    <section className="static about-sec">
        <div className="container">
            <h2>recently added books to our store</h2>
            <div className="recent-book-sec">
                <div className="row">
                   
                   {bookElement}
                    
                    
                </div>
                <div className="btn-sec">
                    <button className="btn gray-btn">load More books</button>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
    )

}
    

export default Shop