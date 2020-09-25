import React, {useEffect,useState} from 'react';
import {Link,useHistory} from 'react-router-dom';

import { deleteBookPost, myBooksPost } from '../services/api';
import ConformPop from './ConformPop';




const Mybooks = () => { 

  const history = useHistory()
    const initialState = {
        books:[],
        showModal:false,
        confoModalelement:null,
        conformModalPayload:null
      }
       
      const [state, setState] = useState(initialState);
      
      const DeleteBtnClick = (bookId) => {
        
        setState({
          ...state,
           showModal: true,
           conformModalPayload: bookId,
           confoModalelement:<p>are u sure?</p>
           
       })

      }
     
      useEffect(() => {
        myBooksPost().then(data => {
          console.log(data);
          switch (data) {
            case 10:
              history.push('/login')
              break;
              case 2:
               console.log('server error') 
  
                break;
            default:
              setState({...state, books: data})
              break;
          }
          
        }).catch(error => {
          console.log(error);
        })
      }, [])
      const closeModal = () => {
        setState({
          ...state,
           showModal: false
       }) 


    }
    const deleteConform = bookid => {
      console.log(bookid);
      deleteBookPost(bookid).then(data => {
        switch (data) {
          case 10:
            history.push('/login')
            break;
            case 2:
             console.log('server error') 
              break;
          default:
          const newBooks = [...state.books]
          newBooks.splice(newBooks.indexOf(newBooks.find(element => element._id === bookid)), 1)
          setState({...state,books:newBooks,showModal:false})
            break;
        }
        
      })
    }
    const booksElement = state.books.map(book => {
      return(
          <div key={book._id} className="col-md-3">
          <div className="item">
            <img className="bookimage" src={book.imgs[0]} alt="img"/>
            <h3>
              <Link to={"/admin/mybook/"+book._id}>{book.title}</Link>
            </h3>
            <h6>
              <Link to={"/admin/mybook/"+book._id}>Edit</Link>&nbsp;&nbsp;&nbsp;<button className="btn btn-danger" onClick={() =>{DeleteBtnClick(book._id)}}>Delete</button>
            </h6>
          </div>
        </div>
      )
  })
   return (  
   <React.Fragment>
   <ConformPop  show={state.showModal} close={closeModal} className="bg-danger" title="Warning" payload={state.conformModalPayload} onConform={deleteConform} > 
   {state.confoModalelement}
   </ConformPop>
  <div className="breadcrumb">
        <div className="container">
          <Link className="breadcrumb-item" to="/admin">Dashboard</Link>
          <span className="breadcrumb-item active">My Books</span>
        </div>
      </div>
      <section className="static about-sec">
        <div className="container">

          <h2>My books</h2>
          <div className="recent-book-sec">
            <div className="row">

              {booksElement}

            </div>
            <div className="btn-sec">
              <button className="btn gray-btn">load More books</button>
            </div>
          </div>
        </div>
      </section>
</React.Fragment>)
}

export default Mybooks