import { useState } from 'react';
import './Transactions.css';

const PAGE_SIZE = 5;

function TransactionRow({ t, bucketName }) {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <div className="col-3 border-end" style={{ padding: '0' }}><b>{t.name}</b></div>
          <div className="col"><p style={{ textAlign: 'end', margin: '0px' }}>added ${t.amount} to {bucketName}</p></div>
        </div>
      </div>
    </li>
  );
}

function Transactions({ transactions, bucketName }) {
  const [showAll, setShowAll] = useState(false);

  const visibleTransactions = transactions.slice(0, PAGE_SIZE);
  const hasMore = transactions.length > PAGE_SIZE;

  return (
    <>
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
              <TransactionRow key={i} t={t} index={i} bucketName={bucketName} />
            ))
          )}
          {hasMore && (
            <li id="load-more-container" className="list-group-item text-center border-0" style={{ margin: '0', padding: '0' }}>
              <button
                id="load-more-btn"
                type="button"
                className="btn btn-secondary rounded-top-0"
                style={{ width: '100%', marginBottom: '5px' }}
                onClick={() => setShowAll(true)}
              >
                View All Transactions
              </button>
            </li>
          )}
        </ul>
      </div>

      {showAll && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade${showAll ? ' show' : ''}`}
        id="all-transactions-modal"
        tabIndex="-1"
        aria-labelledby="all-transactions-modal-label"
        aria-hidden={!showAll}
        style={{ display: showAll ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="all-transactions-modal-label">All Transactions</h5>
              <button type="button" className="btn-close" onClick={() => setShowAll(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: '0' }}>
              <ul className="list-group list-group-flush">
                {transactions.map((t, i) => (
                  <TransactionRow key={i} t={t} index={i} bucketName={bucketName} />
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAll(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
