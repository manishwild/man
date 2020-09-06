import React from 'react'
import SingleProduct from './SingleProduct'

class ShowProduct extends React.Component{
    render(){
        console.log(this.props.images);
        let productElements = []
        this.props.images.forEach((image, idx )=> {
            productElements.push(
            <SingleProduct key={idx} productData={image}/>               
            )
        });
        return (
            <div className="container">
       {productElements}
        </div>
        )
    }
}

export default ShowProduct