import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Backdrop = props => (
  <div {...props} className={`${props.className} js--modal-backdrop`} />
)

const StyledBackdrop = styled(Backdrop)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 500;
`;

const Dialog = props => (
  <div {...props} className={`${props.className} js--modal-dialog`} />
)

const StyledDialog = styled(Dialog)`
  position: fixed;
  box-sizing: border-box;
  left: 50%;
  padding: 16px;
  width: 70%;
  max-height: 90%;
  height: auto;
  overflow: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  z-index: 501;
`;

const Modal = props => (
  <React.Fragment>
    
    <StyledBackdrop
      style={{ display: props.isVisible ? 'block' : 'none' }}
      onClick={props.onRequestClose}/>
    
    <StyledDialog style={{
      transform: props.isVisible ? 'translate(-50%, -50%)' : 'translate(-50%, -100vh)',
      top: props.isVisible ? '50%' : '0'
      }}>
        { props.children }
    </StyledDialog>

  </React.Fragment>
);

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default Modal;
