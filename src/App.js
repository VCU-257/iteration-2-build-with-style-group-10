import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BucketProvider } from './context/BucketContext';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Connections from './pages/Connections';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import New_Bucket from './pages/New_Bucket';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BucketProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/new_bucket" element={<New_Bucket />} />
        <Route path ="/overview" element={<Overview />}/>
      </Routes>
    </BrowserRouter>
    </BucketProvider>
  );
}

export default App;
