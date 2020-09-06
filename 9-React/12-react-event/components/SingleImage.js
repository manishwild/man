import React from 'react'


class SingleImage extends React.Component{
    constructor(props){
        super(props)
        this.overallDivRef = React.createRef()
    }
    onThumImageClick = () =>{
        this.overallDivRef.current.classList.add('active')
        this.overallDivRef.current.addEventListner('click',this.onThumImage)
    }
    onThumImage = () =>{
        this.overallDivRef.current.classList.remove('active')
    }
    render() {
        return (
            <div>
            <img onClick={this.onThumImageClick} src={this.props.imageData.previewURL}/>
            <div onClick={this.onThumImage} ref={this.overallDivRef} className="ui  dimmer">
            <img onClick={(e) =>{e.stopPropagation()}}  src={this.props.imageData.largeImageURL} />
            </div>
            </div>
        ) 
    }
}

export default SingleImage