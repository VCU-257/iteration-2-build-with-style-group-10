import { useState, useEffect } from 'react';

const PAGE_SIZE = 5;

function Transactions({ transactions, bucketName }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset to first page whenever a new transaction is added
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [transactions.length]);

  const visibleTransactions = transactions.slice(0, visibleCount);

  return (
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
                  <div className="col"><p style={{ textAlign: 'end', margin: '0px' }}>added ${t.amount} to {bucketName}</p></div>
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
  );
}

export default Transactions;
