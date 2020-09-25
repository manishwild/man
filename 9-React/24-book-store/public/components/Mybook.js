import React,{createRef, useEffect,useRef,useState} from 'react';
import {Link, useParams,useHistory  } from 'react-router-dom';
import { editBookPost, getBookPost } from '../services/api';
import PopUpModal from './PopUpModal';


const Mybook = () => {
    const params = useParams()
    const history = useHistory()
    console.log(params.id)


    const pdfSpanRef =useRef()
    const pdfInputRef =useRef()
    const imgInputRef =useRef()
    const initialState ={
        book:null,
        newImgFiles:[],
        newPdfFile:null,
        showModal:false,
        modalElement:null,
        modalTitle:'',
        modalClass:''
    }
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        getBookPost(params.id).then(data => { 
            console.log(data)
            switch (data) {
               case 2:
                   console.log('server error') 
      
                    break; 
                case 10:
                  history.push('/login')
                  break;
                  
                default:
                  setstate({...state, book: data})
                  break;
              }
            
        })
        
    }, []);

    const deleteImgclick = (image,e) => {
            e.preventDefault()
            const newBook = {...state.book}
            newBook.imgs.splice(newBook.imgs.indexOf(image),1)
            setstate({...state,book:newBook})
        }



    const pdfDeleteClick = (e) => {
        e.preventDefault()
        pdfSpanRef.current.remove()
        pdfInputRef.current.disabled = false
        const newBook = {...state.book}
        newBook.pdfUrl = ''
        setstate({...state,book:newBook})
    } 
    
    const titleInpChange = e => {
        const newBook = {...state.book}
        newBook.title = e.target.value
        setstate({...state,book:newBook})
    }
    const descriptionInpChange = e => {
        const newBook = {...state.book}
        newBook.description = e.target.value
        setstate({...state,book:newBook})
    } 
    const saveBtnClick = e => {
        e.preventDefault()
        let titleErrorElement = null
        if (state.book.title.trim() === '') {
            titleErrorElement = <li>Book title should nor be empty</li>
        }

        let imgsErrorElement = null 
        if (state.book.imgs.length === 0 && state.newImgFiles.length === 0) {
            imgsErrorElement =<li>You have to have images,you cannot delete all file</li>
        }

        let pdfErrorElement = null
        if (state.newPdfFile === null && state.book.pdfUrl === '') {
            pdfErrorElement =<li>You have to have Pdf,you cannot delete all file</li>
        }
        let descriptionErrorElement = null
        if (state.book.description.trim() === '' ) {
            descriptionErrorElement =<li>You have to have Description description cannot be empty</li>
        }

        if (titleErrorElement === null && imgsErrorElement === null && pdfErrorElement === null && descriptionErrorElement === null ) {
            //all things are goog we need to send the data to server side
            editBookPost(state.book.title, state.book.description, state.book.imgs, state.newImgFiles, state.newPdfFile, params.id).then(data => {
                switch (data) {
                   
                    case 2:
                        setstate({...state,
                                showModal:true,
                                modalClass:'bg-danger',
                                modalTitle:'update failed',
                                modalElement:<p>update failed</p>})
                            break;
                            case 100:
                                setstate({
                                  ...state,
                                  showModal: true,
                                  modalClass: 'bg-danger',
                                  modalTitle: 'hahaha you are trying to hack',
                                  modalElement: <p>nice trying hacker but not with my website</p>
                                  
                                })
                                break;    
                    case 10:
                        history.push('/login')
                
                    default:
                        pdfInputRef.current.value = ''
                        imgInputRef.current.value = ''
                        setstate({...state,
                            book:data,
                            showModal:true,
                            modalClass:'bg-success',
                            modalTitle:'update succefully',
                            modalElement:<p>the book is update succefully</p>
                          })
                        break;
                }
            }).catch(error =>{
              console.log(error);
                setstate({...state,
                    showModal:true,
                    modalClass:'bg-danger',
                    modalTitle:'update failed',
                    modalElement:<p>can not send the data to server side</p>})

            })
        }else{
            const errorElement = (
                <ul>
                    {titleErrorElement}
                    {imgsErrorElement}
                    {pdfErrorElement}
                    {descriptionErrorElement}
                </ul>
            )
            setstate({...state,showModal:true,modalClass:'bg-danger',modalTitle:'Enties Error',modalElement:errorElement})
        }
    }    

    if (state.book) {

    const imagesElement = state.book.imgs.map((image,idx) => {
         return(
            <div key={idx} className="col-md-3">
            <a href="#" className="deleteImg" onClick={(e) =>{deleteImgclick(image,e)}}>X</a>
            <img className="bookimg" src={image} alt=""/>
          </div>
         )
    }) 
    


    return ( 
        
        <React.Fragment>
        <PopUpModal show={state.showModal} close={() => {setstate({...state, showModal: false})}} className={state.modalClass} title={state.modalTitle}>{state.modalElement}</PopUpModal>
        <div className="breadcrumb">
          <div className="container">
            <Link className="breadcrumb-item" to="/admin/mybooks">My books</Link>
            <span className="breadcrumb-item active">{state.book.title}</span>
          </div>
        </div>
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / Edit Book</h1>
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
                    type="text"
                    className="form-control"
                    id="bookTitleInp"
                    placeholder="Book Title"
                    onChange={titleInpChange}
                    value={state.book.title}/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookImgsInp">Book image</label>
                  <div className="row">
                    {imagesElement}
                  </div>
                  <input
                  ref={imgInputRef}
                  onChange={e => {setstate({...state,newImgFiles:e.target.files})}}
                    type="file"
                    className="form-control-file"
                    multiple
                    id="bookImgsInp"
                    accept="image/x-png,image/gif,image/jpeg"/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookPdfInp">Book PDF</label>
                  <span ref={pdfSpanRef}  className="badge badge-default">{state.book.pdfUrl.substr(state.book.pdfUrl.lastIndexOf('/')+1)}
                    <a href="#" id="deletePdf" onClick={e => {pdfDeleteClick(e)}}>X</a>
                  </span>
                  <input
                  onChange={e => {setstate({...state,newPdfFile:e.target.files[0]})}}
                  ref={pdfInputRef}
                    type="file"
                    className="form-control-file"
                    id="bookPdfInp"
                    accept="application/pdf"
                    disabled/>
                </div>
                <div className="form-group">
                  <label htmlFor="bookDescriptionInp">Book Description</label>
                  <textarea className="form-control" id="bookDescriptionInp" value={state.book.description} onChange={descriptionInpChange}></textarea>
                </div>
                <button className="btn btn-success mt-3" onClick={saveBtnClick}>save</button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
} else{
    return(
        <div>Loading ....</div>
      )
}
 }

export default Mybook