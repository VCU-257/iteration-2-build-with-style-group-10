import { useState } from 'react';
import './Transactions.css';

const PAGE_SIZE = 5;

function TransactionRow({ t, bucketName }) {
  return (
    <li className="list-group-item d-flex align-items-center gap-3 py-3">
      <div
        className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center fw-bold"
        style={{ width: 36, height: 36, fontSize: '0.85rem', flexShrink: 0 }}
        aria-hidden="true"
      >
        {t.name[0].toUpperCase()}
      </div>
      <div className="flex-grow-1">
        <span className="fw-medium">{t.name}</span>
        <span className="text-muted"> contributed to {bucketName}</span>
      </div>
      <span className="fw-bold text-success">+${t.amount}</span>
    </li>
  );
}

function Transactions({ transactions, bucketName }) {
  const [showAll, setShowAll] = useState(false);

  const visibleTransactions = transactions.slice(0, PAGE_SIZE);
  const hasMore = transactions.length > PAGE_SIZE;

  return (
    <>
      <div id="transactions" className="card border-0 shadow-sm rounded-3 mb-4">
        <div className="card-header bg-white border-bottom d-flex align-items-center" style={{ borderRadius: 'var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0' }}>
          <h5 className="mb-0 fw-semibold">Recent Transactions</h5>
          {transactions.length > 0 && (
            <span className="badge bg-secondary rounded-pill ms-2">{transactions.length}</span>
          )}
        </div>
        <div className="card-body p-0">
          <ul id="transactions-list" className="list-group list-group-flush">
            {transactions.length === 0 ? (
              <li id="transactions-empty" className="list-group-item text-center text-muted py-4">
                No transactions yet
              </li>
            ) : (
              visibleTransactions.map((t, i) => (
                <TransactionRow key={i} t={t} index={i} bucketName={bucketName} />
              ))
            )}
            {hasMore && (
              <li id="load-more-container" className="list-group-item text-center py-3">
                <button
                  id="load-more-btn"
                  type="button"
                  className="btn btn-sm btn-outline-secondary px-4"
                  onClick={() => setShowAll(true)}
                >
                  View All Transactions
                </button>
              </li>
            )}
          </ul>
        </div>
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
          <div className="modal-content border-0 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-semibold" id="all-transactions-modal-label">All Transactions</h5>
              <button type="button" className="btn-close" onClick={() => setShowAll(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
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
