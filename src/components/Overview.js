import { useState } from 'react';

const PAGE_SIZE = 5;
const BUCKET_GOAL = 1000;
const BUCKET_NAME = "My First Bucket";

const initialParticipants = {
  steffen: { name: "Steffen N.", contributed: 0, goal: 500 },
  john:    { name: "John D.",    contributed: 0, goal: 500 },
};

function Overview() {
  const [participants, setParticipants] = useState(initialParticipants);
  const [transactions, setTransactions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showModal, setShowModal] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState('steffen');
  const [amount, setAmount] = useState('');

  const totalContributed = Object.values(participants).reduce((sum, p) => sum + p.contributed, 0);
  const pct = Math.min(100, Math.round((totalContributed / BUCKET_GOAL) * 100));

  function handleSubmit() {
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) return;

    setParticipants(prev => ({
      ...prev,
      [selectedContributor]: {
        ...prev[selectedContributor],
        contributed: prev[selectedContributor].contributed + amt,
      },
    }));
    setTransactions(prev => [{ name: participants[selectedContributor].name, amount: amt }, ...prev]);
    setVisibleCount(PAGE_SIZE);
    setAmount('');
    setShowModal(false);
  }

  const visibleTransactions = transactions.slice(0, visibleCount);

  return (
    <>
      <main id="main-content" style={{ maxWidth: '600px', margin: '0 auto' }}>

        <div id="bucket-header" className="container-fluid bg-primary text-white rounded-bottom border border-top-0 border-dark">
          <h1 id="bucket-title" className="text-center">{BUCKET_NAME}</h1>
        </div>

        <div id="bucket-progress" className="container-fluid border border-secondary rounded-top" style={{ margin: '5px 0px 5px 0px' }}>
          <div className="row">
            <h4 className="col-3" style={{ margin: '3px' }}>Progress</h4>
            <div className="col-8">
              <div
                id="bucket-progress-bar"
                className="progress"
                role="progressbar"
                aria-label="bucket progress"
                aria-valuenow={pct}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ margin: '1em 0px 1em 0px' }}
              >
                <div
                  id="bucket-progress-fill"
                  className="progress-bar text-bg-primary progress-bar-striped progress-bar-animated"
                  style={{ width: pct + '%' }}
                >
                  {pct}% (${totalContributed} / ${BUCKET_GOAL})
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="participants" className="container-fluid border border-secondary" style={{ margin: '0' }}>
          <div className="row border-bottom border-secondary" style={{ margin: '5px 0px 5px 0px' }}>
            <h2 className="text-center">Participants</h2>
          </div>
          <ul id="participants-list" className="container">
            {Object.entries(participants).map(([key, p], idx, arr) => (
              <div
                key={key}
                id={`participant-${key}`}
                className={`row${idx < arr.length - 1 ? ' border-bottom' : ''}`}
                style={{ marginBottom: '5px' }}
              >
                <h6 className="col-9">{p.name}</h6>
                <span
                  className={`col-2 badge rounded-pill ${p.contributed >= p.goal ? 'text-bg-success' : 'text-bg-primary'}`}
                  style={{ maxHeight: '20px' }}
                >
                  ${p.contributed}/${p.goal}
                </span>
              </div>
            ))}
          </ul>
        </div>

        <div id="transactions" className="container-fluid border border-secondary rounded-bottom" style={{ margin: '5px 0px 0px 0px' }}>
          <div className="row border-bottom border-secondary" style={{ margin: '5px 0px 5px 0px' }}>
            <h2 className="text-center">Recent Transactions</h2>
          </div>
          <ul id="transactions-list" className="list-group">
            {transactions.length === 0 ? (
              <li id="transactions-empty" className="list-group-item text-center text-muted">
                No transactions yet
              </li>
            ) : (
              visibleTransactions.map((t, i) => (
                <li key={i} id={`transaction-${transactions.length - i}`} className="list-group-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-3 border-end" style={{ padding: '0' }}><b>{t.name}</b></div>
                      <div className="col"><p style={{ textAlign: 'end', margin: '0px' }}>added ${t.amount} to {BUCKET_NAME}</p></div>
                    </div>
                  </div>
                </li>
              ))
            )}
            {transactions.length > 0 && visibleCount < transactions.length && (
              <li id="load-more-container" className="list-group-item text-center border-0" style={{ margin: '0', padding: '0' }}>
                <button
                  id="load-more-btn"
                  type="button"
                  className="btn btn-secondary rounded-top-0"
                  style={{ width: '100%', marginBottom: '5px' }}
                  onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                >
                  Load More Transactions
                </button>
              </li>
            )}
          </ul>
        </div>

        <div id="new-transaction-container" className="container-fluid" style={{ padding: '10px 0px 0px 0px', margin: '0' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', margin: '0' }}
            onClick={() => setShowModal(true)}
          >
            Make New Transaction
          </button>
        </div>

      </main>

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
                    <option value="steffen">Steffen N.</option>
                    <option value="john">John D.</option>
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

export default Overview;
