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
    <div>
      <Navbar />
    <main id="main-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div id="bucket-header" className="container-fluid bg-primary text-black rounded-bottom border border-top-0 border-dark">
        <h1 id="bucket-title" className="text-center">{BUCKET_NAME}</h1>
      </div>
      <BucketProgress totalContributed={totalContributed} bucketGoal={BUCKET_GOAL} />
      <Participants participants={participants} />
      <Transactions transactions={transactions} bucketName={BUCKET_NAME} />
      <NewTransaction onSubmit={handleSubmit} />
    </main>
    </div>
  );
}

export default Overview;
