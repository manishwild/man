import React from "react";
import {connect} from "react-redux"
import {selectImage} from '../actions'


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ImageDetail extends React.Component{
     close = () => {
         this.props.selectImage(null)
     }

    render(){
        if (this.props.selectedImage) {
            return(
            <div>
            <Modal isOpen={true} toggle={this.close} size="lg" >
              <ModalHeader toggle={this.close}>{this.props.selectedImage.tags}</ModalHeader>
              <ModalBody>
                <img className="w-100" src={this.props.selectedImage.largeImageURL} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.close}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
        } else {
            return null
        }
        
    }
}
const mapStateToProps = (state) => {
    return {selectedImage:state.selectedImage}
}
export default connect(mapStateToProps,{selectImage})(ImageDetail)