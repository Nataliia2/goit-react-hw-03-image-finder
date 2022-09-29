import { Component } from "react";
import { createPortal } from 'react-dom';
import { Overlay, Modals, ModalImg } from './Modal.style';

const modalRoot = document.getElementById('root');

export default class Modal extends Component {
    componentDidMount() {
      document.addEventListener('keydown', this.closeModal);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.closeModal);
    }
  
    closeModal = (event) => {
      if (event.code === "Escape" || event.target === event.currentTarget) {
        this.props.onClose();
      }
    }
  
      render() {
        const { imageUrlLarge, imageTitle } = this.props.content;
        return createPortal(
        <Overlay onClick={this.closeModal}>
                  <Modals>
              <ModalImg src={imageUrlLarge} alt={imageTitle} />
                  </Modals>
              </Overlay>,
        modalRoot
      )
    }
  }