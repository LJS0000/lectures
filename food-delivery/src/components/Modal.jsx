import ReactDOM from 'react-dom'
import styles from '../styles/Modal.module.css' // 모달 스타일 추가

const Modal = ({ isModalOpen, onClose, children }) => {
  if (!isModalOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.modal__overlay}>
      <div className={styles.modal__container}>
        <button className={styles.modal__container__close} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
