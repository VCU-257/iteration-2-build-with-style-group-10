import { useState } from 'react';
import './NewTransaction.css';

function NewTransaction({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [contributorName, setContributorName] = useState('');
  const [amount, setAmount] = useState('');

  function handleClose() {
    setContributorName('');
    setAmount('');
    setShowModal(false);
  }

  function handleSubmit() {
    const amt = parseInt(amount, 10);
    if (!contributorName.trim() || !amt || amt <= 0) return;
    onSubmit(contributorName.trim(), amt);
    handleClose();
  }

  return (
    <>
      <div id="new-transaction-container" className="d-grid flex-grow-1">
        <button
          type="button"
          className="btn btn-success btn-lg rounded-3 shadow-sm py-3"
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-cash-coin me-2" style={{ fontSize: '1.2rem' }}></i>
          New Contribution
        </button>
      </div>

      {showModal && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade${showModal ? ' show' : ''}`}
        id="transaction-modal"
        tabIndex="-1"
        aria-labelledby="transaction-modal-label"
        aria-hidden={!showModal}
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-semibold" id="transaction-modal-label">New Contribution</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="transaction-form">
                <div className="mb-3">
                  <label htmlFor="contributor-name" className="form-label fw-medium">Contributing as</label>
                  <input
                    type="text"
                    id="contributor-name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={contributorName}
                    onChange={e => setContributorName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount-input" className="form-label fw-medium">Amount ($)</label>
                  <input
                    type="number"
                    id="amount-input"
                    className="form-control"
                    min="1"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
              <button type="button" className="btn btn-success" id="submit-transaction-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTransaction;
