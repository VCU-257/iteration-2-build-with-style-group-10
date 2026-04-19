import { useState } from 'react';

function NewTransaction({ participants, onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState(Object.keys(participants)[0]);
  const [amount, setAmount] = useState('');

  function handleSubmit() {
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) return;
    onSubmit(selectedContributor, amt);
    setAmount('');
    setShowModal(false);
  }

  return (
    <>
      <div id="new-transaction-container" className="container-fluid" style={{ padding: '10px 0px 0px 0px', margin: '0' }}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={() => setShowModal(true)}
        >
          Make New Transaction
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
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transaction-modal-label">New Transaction</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="transaction-form">
                <div className="mb-3">
                  <label htmlFor="contributor-select" className="form-label">Contributing as</label>
                  <select
                    id="contributor-select"
                    className="form-select"
                    value={selectedContributor}
                    onChange={e => setSelectedContributor(e.target.value)}
                  >
                    {Object.entries(participants).map(([key, p]) => (
                      <option key={key} value={key}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="amount-input" className="form-label">Amount ($)</label>
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
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="button" className="btn btn-success" id="submit-transaction-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTransaction;
