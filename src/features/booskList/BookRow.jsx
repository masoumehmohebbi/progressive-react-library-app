import truncateText from '../../utils/truncateText';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { MdAssignmentAdd } from 'react-icons/md';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';

const projectStatus = {
  OPEN: {
    label: 'باز',
    className: 'badge--success',
  },
  CLOSED: {
    label: 'بسته',
    className: 'badge--danger',
  },
};

function BookRow({ project, index }) {
  const { status, title, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          ...
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
export default BookRow;
