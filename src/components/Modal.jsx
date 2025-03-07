import './Modal.css'

function Modal() {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">Are you sure?</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel">Cancel</button>
          <button className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;