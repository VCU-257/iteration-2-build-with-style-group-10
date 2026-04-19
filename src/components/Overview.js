import { useState } from 'react';
import BucketProgress from './BucketProgress';
import Participants from './Participants';
import Transactions from './Transactions';
import NewTransaction from './NewTransaction';

const BUCKET_GOAL = 1000;
const BUCKET_NAME = "My First Bucket";

const initialParticipants = {
  steffen: { name: "Steffen N.", contributed: 0, goal: 500 },
  john:    { name: "John D.",    contributed: 0, goal: 500 },
};

function Overview() {
  const [participants, setParticipants] = useState(initialParticipants);
  const [transactions, setTransactions] = useState([]);

  const totalContributed = Object.values(participants).reduce((sum, p) => sum + p.contributed, 0);

  function handleSubmit(key, amount) {
    const name = participants[key].name;
    setParticipants(prev => ({
      ...prev,
      [key]: { ...prev[key], contributed: prev[key].contributed + amount },
    }));
    setTransactions(prev => [{ name, amount }, ...prev]);
  }

  return (
    <main id="main-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div id="bucket-header" className="container-fluid bg-primary text-white rounded-bottom border border-top-0 border-dark">
        <h1 id="bucket-title" className="text-center">{BUCKET_NAME}</h1>
      </div>
      <BucketProgress totalContributed={totalContributed} bucketGoal={BUCKET_GOAL} />
      <Participants participants={participants} />
      <Transactions transactions={transactions} bucketName={BUCKET_NAME} />
      <NewTransaction participants={participants} onSubmit={handleSubmit} />
    </main>
  );
}

export default Overview;
