import { HiOutlineX } from 'react-icons/hi';
import useOutsideClick from '../hooks/useOutsideClick';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="w-full h-screen fixed top-0 left-0 backdrop-blur-sm bg-secondary-800 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed overflow-y-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-300 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-4"
        >
          <div className="flex gap-x-3 items-center justify-center border-b border-b-secondary-300 pb-2 mb-6">
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
            <p className="text-secondary-700 font-bold text-base">{title}</p>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
