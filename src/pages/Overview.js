import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import BucketProgress from '../components/overview/BucketProgress';
import Participants from '../components/overview/Participants';
import Transactions from '../components/overview/Transactions';
import NewTransaction from '../components/overview/NewTransaction';

const BUCKET_GOAL = 1000;
const BUCKET_NAME = "My First Bucket";

const initialParticipants = {};

function Overview() {
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

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-4" style={{ maxWidth: '860px' }}>

        <div id="bucket-header" className="card border-0 shadow-sm rounded-3 mb-4 text-white bg-primary">
          <div className="card-body text-center py-4">
            <h1 id="bucket-title" className="fw-bold mb-1">{BUCKET_NAME}</h1>
            <p className="mb-0" style={{ opacity: 0.8 }}>Savings Goal: ${BUCKET_GOAL}</p>
          </div>
        </div>
        
        <NewTransaction onSubmit={handleSubmit} />

        <div className="row g-4 mb-4">
          <div className="col-md-5">
            <BucketProgress totalContributed={totalContributed} bucketGoal={BUCKET_GOAL} />
          </div>
          <div className="col-md-7">
            <Participants participants={participants} />
          </div>
        </div>

        <Transactions transactions={transactions} bucketName={BUCKET_NAME} />
        

      </div>
    </div>
  );
}

export default Overview;
