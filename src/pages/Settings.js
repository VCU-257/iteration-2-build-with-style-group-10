import Navbar from '../components/navbar/Navbar';

function Settings() {
  return (
    <div>
      <Navbar activePage="Settings"/>
      <div className="container pt-4 pb-5">
        <h1 className="mb-4">Settings</h1>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card mb-4">
              <div className="card-header">Account Information</div>
              <div className="card-body">
   
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Amy Orellana" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress" placeholder="amy@example.com" pattern="^[^\s@]+@[^\s@]+\.com$" title="Email must end with domain name" required/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder="(555) 555-5555" pattern="[0-9]*" inputMode="numeric" title="Only enter numbers" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Change Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter new password" />
                  </div>
     
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">Bank Information</div>
              <div className="card-body">
          
                  <div className="mb-3">
                    <label htmlFor="bankSelect" className="form-label">Select Bank Account</label>
                    <select className="form-select" id="bankSelect" defaultValue="">
                      <option value="" disabled>Choose an account</option>
                      <option>Chase Checking ••••1234</option>
                      <option>Capital One Savings ••••5678</option>
                      <option>Discover Credit Card ••••9012</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="accountType" className="form-label">Account Type</label>
                    <select className="form-select" id="accountType" defaultValue="">
                      <option value="" disabled>Choose type</option>
                      <option>Checking</option>
                      <option>Savings</option>
                      <option>Credit Card</option>
                    </select>
                  </div>
                  <button type="button" className="btn btn-outline-primary">Manage Account</button>
      
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">Notifications</div>
              <div className="card-body">
                {[
                  { id: 'budgetAlerts', label: 'Budget alerts', defaultChecked: true },
                  { id: 'transactionAlerts', label: 'Large transaction alerts', defaultChecked: true },
                  { id: 'weeklySummary', label: 'Weekly spending summary', defaultChecked: false },
                  { id: 'emailNotifications', label: 'Email notifications', defaultChecked: true },
                ].map(({ id, label, defaultChecked }) => (
                  <div className="form-check form-switch mb-3" key={id}>
                    <input className="form-check-input" type="checkbox" id={id} defaultChecked={defaultChecked} />
                    <label className="form-check-label" htmlFor={id}>{label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <button type="submit" className="btn btn-primary me-2">Save Changes</button>
              <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Account Actions</div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-danger w-100 mb-2">Disconnect Bank</button>
                <button type="button" className="btn btn-outline-dark w-100">Log Out</button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Changes saved successfully!");
};

export default Settings;
