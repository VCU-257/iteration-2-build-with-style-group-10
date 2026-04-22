import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BucketProvider } from './context/BucketContext';
import { UserProvider } from './context/UserContext';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Connections from './pages/Connections';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NewBucket from './pages/New_Bucket';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <UserProvider>
      <BucketProvider>
        <BrowserRouter basename="/iteration-2-build-with-style-group-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/newbucket" element={<NewBucket />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </BucketProvider>
    </UserProvider>
  );
}

export default App;
