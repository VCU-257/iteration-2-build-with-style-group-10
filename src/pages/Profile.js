import Navbar from '../components/navbar/Navbar';

function Profile() {
  return (
    <div>
      <Navbar activePage="Profile" />
      <div className="container pt-3 pb-5">
        <img
          src="profile-pic.png"
          className="rounded-circle"
          alt="profile picture"
          width="150"
          height="150"
          style={{ marginLeft: '20px', marginTop: '20px' }}
        />
        <div className="d-inline p-2">username</div>
        <a href="/connections" className="btn">3 friends</a>

        <div className="list-group mt-3">
          {['Bucket1', 'Bucket2', 'Bucket3'].map((id) => (
            <div key={id}>
              <a
                href="#"
                className="list-group-item list-group-item-action"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}`}
                aria-expanded="false"
              >
                Budget Bucket
              </a>
              <div className="collapse" id={id}>
                <div className="card card-body">
                  <p>Amount saved: $1000</p>
                  Amount remaining: $500
                  <a href="/" className="btn btn-primary d-grid px-2 py-1">View More Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
