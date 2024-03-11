const ConfirmDelete = ({ resourseName, disabled, onConfirm, onClose }) => {
  return (
    <div>
      <h2>آیا از حذف {resourseName} مطمئن هستید؟</h2>
      <div className="flex justify-between items-center gap-x-16">
        <button className="btn btn--primary flex-1" onClick={onClose} disabled={disabled}>
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn-danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
