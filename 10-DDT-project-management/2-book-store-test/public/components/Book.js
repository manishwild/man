import React, {useEffect,useState} from 'react';
import ImageGallery from 'react-image-gallery';
import {Link, useParams} from 'react-router-dom';
import {getBookPost} from '../services/api';

const Book = () => {
  const params = useParams()
  //console.log(params);
  
  const initialState = {
    book:null
  }
  const [state, setstate] = useState(initialState);
  
  useEffect(() => {
    getBookPost(params.id).then(data => {
      console.log(data);
      if (data !=2) {
        setstate({...state, books:data})
   }
      
    })
  }, []);
  if (state.book) {
    console.log(state.book);
    const imagesSet = state.book.imgs.map(image => {
      return({original:image,thumbnail:image})

    })
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <div className="container">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <span className="breadcrumb-item active">{state.book.title}</span>
          </div>
        </div>
        <section className="product-sec">
          <div className="container">
            <h1>{state.book.title}</h1>
            <div className="row">
              <div className="col-md-6 slider-sec">
              <ImageGallery thumbnailPosition="right"  showFullscreenButton={false} showPlayButton={false} showNav={false} items={imagesSet} />
              </div>
              <div className="col-md-6 slider-content">
                {state.book.description}

                <div className="btn-sec">
                  {state.book.pdfUrl != null
                    ? <a href={state.book.pdfUrl} target="_blank" className="btn btn-success">download</a>
                    : <Link to="/login" className="btn btn-success">Login for Download</Link>}

                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  } else {
    return(
      <div>Loading ...</div>
    )
  }
}

export default Book