import { useNavigate } from 'react-router-dom';

import { useDispatchBooks } from '../contexts/BookContext';
import bookApi from '../api/book';
import Button from './Button';
import { useState } from 'react';

const DeleteModal = ({ book, toggleDeleteModal }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatchBooks();

  const onClickDelete = () => {
    bookApi
      .delete(book)
      .then(() => {
        dispatch({ type: 'book/delete', book });
        toggleDeleteModal();
        navigate('/books');
      })
      .catch((e) => {
        console.log('error occured!', e);
        setError(e);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h3 className="page-title">
          <span>Do you want to delete the </span>[{book.title}]
          {/* <span>を削除しますか</span> */}
        </h3>
        <div className="error-msg text-center">{error}</div>
        <div className="footer">
          <Button className="gray mr-16" onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button className="red" onClick={onClickDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
