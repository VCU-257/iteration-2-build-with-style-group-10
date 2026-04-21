import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import BucketProgress from '../components/overview/BucketProgress';
import Participants from '../components/overview/Participants';
import Transactions from '../components/overview/Transactions';
import NewTransaction from '../components/overview/NewTransaction';

const BUCKET_GOAL = 1000;

const initialParticipants = {};

function Overview() {
  const [bucketName, setBucketName] = useState('My First Bucket');
  const [editName, setEditName] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [participants, setParticipants] = useState(initialParticipants);
  const [transactions, setTransactions] = useState([]);

  const totalContributed = Object.values(participants).reduce((sum, p) => sum + p.contributed, 0);

  function handleSubmit(name, amount) {
    const key = name.toLowerCase().replace(/\s+/g, '_');

    setParticipants(prev => {
      const updated = {
        ...prev,
        [key]: {
          name,
          contributed: (prev[key]?.contributed ?? 0) + amount,
          goal: 0,
        },
      };
      const goalPerPerson = Math.round(BUCKET_GOAL / Object.keys(updated).length);
      return Object.fromEntries(
        Object.entries(updated).map(([k, p]) => [k, { ...p, goal: goalPerPerson }])
      );
    });

    setTransactions(prev => [{ name, amount }, ...prev]);
  }

  function handleEditOpen() {
    setEditName(bucketName);
    setShowEditModal(true);
  }

  function handleEditSave() {
    const trimmed = editName.trim();
    if (trimmed) setBucketName(trimmed);
    setShowEditModal(false);
  }

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-4" style={{ maxWidth: '860px' }}>

        <div id="bucket-header" className="card border-0 shadow-sm rounded-3 mb-4 text-white bg-primary">
          <div className="card-body text-center py-4">
            <h1 id="bucket-title" className="fw-bold mb-1">{bucketName}</h1>
            <p className="mb-0" style={{ opacity: 0.8 }}>Savings Goal: ${BUCKET_GOAL}</p>
          </div>
        </div>

        <div className="d-flex gap-2 mb-4 align-items-stretch">
          <button
            type="button"
            id="edit-bucket-btn"
            className="btn btn-secondary rounded-3"
            style={{ width: '52px', flexShrink: 0, padding: 0 }}
            onClick={handleEditOpen}
            title="Edit bucket name"
          >
            <i className="bi bi-pencil-square" style={{ fontSize: '1.2rem' }}></i>
          </button>
          <NewTransaction onSubmit={handleSubmit} />
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-5">
            <BucketProgress totalContributed={totalContributed} bucketGoal={BUCKET_GOAL} />
          </div>
          <div className="col-md-7">
            <Participants participants={participants} />
          </div>
        </div>

        <Transactions transactions={transactions} bucketName={bucketName} />

      </div>

      {showEditModal && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade${showEditModal ? ' show' : ''}`}
        id="edit-bucket-modal"
        tabIndex="-1"
        aria-labelledby="edit-bucket-modal-label"
        aria-hidden={!showEditModal}
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-semibold" id="edit-bucket-modal-label">Edit Bucket Name</h5>
              <button type="button" className="btn-close" onClick={() => setShowEditModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="bucket-name-input" className="form-label fw-medium">Bucket Name</label>
              <input
                type="text"
                id="bucket-name-input"
                className="form-control"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleEditSave()}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
              <button type="button" className="btn btn-primary" id="save-bucket-name-btn" onClick={handleEditSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
