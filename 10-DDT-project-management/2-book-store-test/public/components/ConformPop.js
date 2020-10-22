import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ConformPop extends React.Component {
  toggle = () => {
      this.props.close()
  }
  conform = () => {
    this.props.onConform(this.props.payload)
}
  render(){
      const {className,title,children} = this.props
      return (
      <Modal isOpen={this.props.show} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle} className={className} >{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.conform}>Delete</Button>
          <Button color="secondary" onClick={this.toggle}>no</Button>
        </ModalFooter>
      </Modal>
   
  ); 
  }
}

export default ConformPop;