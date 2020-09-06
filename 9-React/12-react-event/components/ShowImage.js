import React from 'react'
import SingleImage from './SingleImage';

class ShowImages extends React.Component{
    render(){
        console.log(this.props.images);
        // let imagesElements = this.props.images.map(image => { 
        //     return(
        //         <img key={image.id} src={image.previewURL}/>
        //     )
        //     })
        let imagesElements = []
        this.props.images.forEach((image, idx )=> {
            imagesElements.push(
                
                //<img key={idx}  src={image.previewURL}/>
                <SingleImage key={idx} imageData={image}/>
                
            )
        });
        return (
            <div className="container">
       {imagesElements}
        </div>
        )
    }
}

export default ShowImages