import React, {useState, useRef } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { addBookPost } from '../services/api';
import PopUpModal from './PopUpModal';

const AddBook = () => {

  const history = useHistory()

  const initialState = {
    bookTitle: '',
    bookDescription: '',
    ModalElement: null,
    showModal:false,
    modalTitle:'',
    modalClass:'bg-danger'

  }
    const [state, setstate] = useState(initialState);

    const pdfFileInpRef = useRef()
    const imagesFileInpRef = useRef()

    const bookSaveBtnClick = e => {
      e.preventDefault()
      if (state.bookTitle.trim() === '' || state.bookDescription.trim() === '' || pdfFileInpRef.current.files.length === 0 || imagesFileInpRef.current.files.length === 0) {
        const modalElement = (
          <ul>
            {state.bookTitle.trim() === ''?<li>Please enter book title</li>:null}
            {state.bookDescription.trim() === ''?<li>Please enter book Description title</li>:null}
            {pdfFileInpRef.current.files.length === 0 ?<li>Please upload book pdf</li>:null}
            {imagesFileInpRef.current.files.length === 0 ?<li>Please upload at least one image </li>:null}
          </ul>
        )
        setstate({...state,modalElement,showModal:true,modalTitle: 'Entries Error',modalClass:'bg-danger'})
      } else {
        addBookPost(state.bookTitle, state.bookDescription, pdfFileInpRef.current.files[0], imagesFileInpRef.current.files).then(data => {
          switch (data) {
            case 1:
              setstate({...state,modalElement:<p>The book saved successfully</p>,showModal:true,modalTitle: 'Success', modalClass:'bg-success'})
              break;
              case 2:
                setstate({...state,modalElement:<p>Book Title is already exist</p>,showModal:true,modalTitle: 'Entries Error',modalClass: 'bg-danger'})
                break;    
                case 3:
                  setstate({...state,modalElement:<p>The book saved successfully</p>,showModal:true,modalTitle: 'Title Error',modalClass: 'bg-danger'})
                  break;   
                  
                  case 4:
                  setstate({...state,modalElement:<p>Server side error</p>,showModal:true,modalTitle: 'Serverside Error',modalClass: 'bg-danger'})
                  break; 
                  case 10:
                    history.push('/login')
                    break;      
            
            default:

              break;
          }
        }).catch(error => {
          setstate({...state,modalElement:<p>Cannot send the data to server</p>,showModal:true,modalTitle: 'Sending Error',modalClass:'bg-danger'})
        })
      
    }

  }
    const closeModal = () => {
      setstate({...state,showModal:false})
   }



       return(
           <React.Fragment>
           <PopUpModal show={state.showModal} close={closeModal} className={state.modalClass} title={state.modalTitle}>{state.modalElement}</PopUpModal>
      <div className="breadcrumb">
        <div className="container">
          <Link className="breadcrumb-item" to="/admin">DashBoard</Link>
          <span className="breadcrumb-item active">Add Book</span>
        </div>
      </div>
      <section className="static about-sec">
        <div className="container">
          <h1>My Account / Add Book</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only fiveLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
          </p>
          <div className="form">
            <form>
              <div className="form-group">
                <label htmlFor="bookTitleInp">Book Title</label>
                <input
                  value={state.bookTitle}
                  onChange ={e => {setstate({...state,bookTitle:e.target.value})}}
                  id="bookTitleInp"
                  type="text"
                  className="form-control"
                  placeholder="Book Title"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Book Images</label>
                <input
                ref={imagesFileInpRef}
                  id="exampleFormControlFile1"
                  type="file"
                  className="form-control-file"
                  multiple
                  accept="image/x-png,image/gif,image/jpeg"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Book PDF</label>
                <input
                ref={pdfFileInpRef}
                  id="exampleFormControlFile1"
                  type="file"
                  className="form-control-file"
                  accept="application/pdf"/>
              </div>
              <div className="form-group">
                <label htmlFor="bookDescriptionInp">Book Description</label>
                <textarea value={state.bookDescription} className="form-control" id="bookDescriptionInp" onChange ={e => {setstate({...state,bookDescription:e.target.value})}}></textarea>
              </div>
              <button onClick={bookSaveBtnClick} className="btn btn-success mt-3">save</button>
            </form>
          </div>
        </div>
      </section>
        </React.Fragment>
    )

}
    

export default AddBook