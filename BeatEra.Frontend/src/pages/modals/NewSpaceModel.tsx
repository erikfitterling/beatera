import React, { ReactNode } from 'react';
import '../../styles/modal.css';

interface NewSpaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const NewSpaceModal: React.FC<NewSpaceModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>}
        {children}
      </div>
    </div>
  );
};

export default NewSpaceModal;