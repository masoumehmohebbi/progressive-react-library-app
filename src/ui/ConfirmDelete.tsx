import React, { MouseEventHandler } from 'react';

type ConfirmDeleteProps = {
  resourceName: string;
  disabled: boolean;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  resourceName,
  disabled,
  onConfirm,
  onClose,
}) => {
  return (
    <div>
      <h2>آیا از حذف {resourceName} مطمئن هستید؟</h2>
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
