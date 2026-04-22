import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { useUser } from '../context/UserContext';

function Profile() {
  const { user, updateUser } = useUser();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);

  function toggleEdit() {
    setEditing((current) => !current);
    setName(user.name);
  }

  function saveProfile(event) {
    event.preventDefault();
    updateUser({ name: name.trim() || user.name });
    setEditing(false);
  }

  return (
    <div>
      <Navbar activePage="Profile" />
      <div className="container pt-3 pb-5">
        <div className="d-flex align-items-center gap-3">
          <img
            src={user.avatarUrl}
            className="rounded-circle border"
            alt="User avatar"
            width="150"
            height="150"
          />
          <div>
            {editing ? (
              <form onSubmit={saveProfile} className="mb-2">
                <div className="mb-2">
                  <label htmlFor="name" className="form-label visually-hidden">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <button type="submit" className="btn btn-primary me-2">
                  Save
                </button>
                <button type="button" className="btn btn-secondary" onClick={toggleEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h1 className="mb-1">{user.name}</h1>
                <p className="text-muted mb-2">{user.email}</p>
                <button type="button" className="btn btn-outline-primary btn-sm me-2" onClick={toggleEdit}>
                  Edit Profile
                </button>
                <Link to="/connections" className="btn btn-outline-secondary btn-sm">
                  {user.friends} Friends
                </Link>
              </>
            )}
          </div>
        </div>

        <section className="mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h5 mb-1">Your Buckets</h2>
              <p className="text-muted mb-0">Track savings, goals, and progress here.</p>
            </div>
            <Link to="/overview" className="btn btn-sm btn-primary">
              View All
            </Link>
          </div>

          <div className="row g-3">
            {user.buckets.map((bucket) => {
              const progress = Math.min(100, Math.round((bucket.saved / bucket.goal) * 100));
              return (
                <div className="col-12 col-md-6" key={bucket.id}>
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h3 className="h6">{bucket.title}</h3>
                          <p className="mb-1 text-muted">Goal: ${bucket.goal.toLocaleString()}</p>
                        </div>
                        <span className="badge bg-primary">{progress}%</span>
                      </div>
                      <div className="progress mb-3" style={{ height: '8px' }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <p className="mb-1">Saved: ${bucket.saved.toLocaleString()}</p>
                      <p className="mb-3">Remaining: ${bucket.remaining.toLocaleString()}</p>
                      <Link to="/overview" className="btn btn-sm btn-outline-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
