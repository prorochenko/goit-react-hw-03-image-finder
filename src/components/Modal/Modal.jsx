import { createPortal } from 'react-dom';

import css from './Modal.module.scss';
import Button from '../Button/Button';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClick }) => {
  return createPortal(
    <div className={css.Modal__backdrop}>
      <div className={css.Modal__content}>{children}hey</div>
      <Button onClick={onClick} />
    </div>,
    modalRoot
  );
};

export default Modal;
