import React,{useState, useEffect,useRef} from 'react'


const ShowImages = (props) => {

  const ulRef = useRef()

const checkScroll = () => {
    //console.log('i m checking');
   // console.log('this is window inner height',window.innerHeight);
   // console.log('this is ul buttom',this.ulRef.current.getBoundingClientRect().bottom);
    if (ulRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
      console.log('reached');
      props.runNext()
      document.removeEventListener('scroll', checkScroll)
    }
}
useEffect(() => {
  document.addEventListener('scroll', checkScroll)
  return()=>{
    document.removeEventListener('scroll',checkScroll)
  }
})
//instead of componentWillUnmount
// useEffect(() => {
//   return()=>{
//     document.removeEventListener('scroll',checkScroll)
//   }
// }, []);



  const imagesElements = props.images.map((image, idx) => {
      return(
        <li key={idx} className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">Photographer:{image.user}</h5>
            <p className="font-italic text-muted mb-0 small">Tags:{image.tags}</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <a href={image.largeImageURL} className="btn btn-primary" target="_blank">Show Large Image</a>
              <ul className="list-inline small">
                <li className="list-inline-item m-0">
                  <i className="fa fa-star text-success"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fa fa-star text-success"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fa fa-star text-success"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fa fa-star text-success"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fa fa-star-o text-gray"></i>
                </li>
              </ul>
            </div>
          </div><img
            src={image.previewURL}
            alt="Generic placeholder image"
            width="200"
            className="ml-lg-5 order-1 order-lg-2"/>
        </div>
      </li>
      )
   })
return (
  <ul ref={ulRef} className="list-group shadow mb-3">
    {imagesElements}
  </ul>
)


}


// class ShowImages extends React.Component {

//   constructor(props){
//     super(props)
//     this.ulRef = React.createRef()
//   }

//     checkScroll = () => {
//         //console.log('i m checking');
//        // console.log('this is window inner height',window.innerHeight);
//        // console.log('this is ul buttom',this.ulRef.current.getBoundingClientRect().bottom);
//         if (this.ulRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
//           console.log('reached');
//           this.props.runNext()
//           document.removeEventListener('scroll', this.checkScroll)
//         }
//     }
//     componentDidMount(){
//         document.addEventListener('scroll', this.checkScroll)
//     }
//     componentDidUpdate(){
//       document.addEventListener('scroll', this.checkScroll)
//     }
//     componentWillUnmount(){
//         //console.log('i am gonna be deleted');
//         document.removeEventListener('scroll',this.checkScroll)
//     }


//   render() {
//       const imagesElements = this.props.images.map((image, idx) => {
//           return(
//             <li key={idx} className="list-group-item">
//             <div className="media align-items-lg-center flex-column flex-lg-row p-3">
//               <div className="media-body order-2 order-lg-1">
//                 <h5 className="mt-0 font-weight-bold mb-2">Photographer:{image.user}</h5>
//                 <p className="font-italic text-muted mb-0 small">Tags:{image.tags}</p>
//                 <div className="d-flex align-items-center justify-content-between mt-1">
//                   <a href={image.largeImageURL} className="btn btn-primary" target="_blank">Show Large Image</a>
//                   <ul className="list-inline small">
//                     <li className="list-inline-item m-0">
//                       <i className="fa fa-star text-success"></i>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <i className="fa fa-star text-success"></i>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <i className="fa fa-star text-success"></i>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <i className="fa fa-star text-success"></i>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <i className="fa fa-star-o text-gray"></i>
//                     </li>
//                   </ul>
//                 </div>
//               </div><img
//                 src={image.previewURL}
//                 alt="Generic placeholder image"
//                 width="200"
//                 className="ml-lg-5 order-1 order-lg-2"/>
//             </div>
//           </li>
//           )
//        })
//     return (
//       <ul ref={this.ulRef} className="list-group shadow mb-3">
//         {imagesElements}
//       </ul>
//     )
//   }
// }
//mb-3 bootstap margin to reach bottom

export default ShowImages