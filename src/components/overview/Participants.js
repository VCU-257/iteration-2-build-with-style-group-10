import './Participants.css';

function Participants({ participants }) {
  const entries = Object.entries(participants);

  return (
    <div id="participants" className="card border-0 shadow-sm rounded-3 h-100 overflow-hidden">
      <div className="card-header bg-white border-bottom d-flex align-items-center">
        <h5 className="mb-0 fw-semibold">Participants</h5>
        {entries.length > 0 && (
          <span className="badge bg-primary rounded-pill ms-2">{entries.length}</span>
        )}
      </div>
      <div className="card-body p-0">
        <ul id="participants-list" className="list-group list-group-flush">
          {entries.length === 0 ? (
            <li className="list-group-item text-center text-muted py-4" style={{ listStyle: 'none' }}>
              No participants yet
            </li>
          ) : (
            entries.map(([key, p]) => {
              const pct = p.goal > 0 ? Math.min(100, Math.round((p.contributed / p.goal) * 100)) : 0;
              const met = p.contributed >= p.goal;
              return (
                <li
                  key={key}
                  id={`participant-${key}`}
                  className="list-group-item d-flex align-items-center gap-3 py-3"
                >
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: 36, height: 36, fontSize: '0.85rem', flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    {p.name[0].toUpperCase()}
                  </div>

                  {/* Mobile: name + pill */}
                  <span className="flex-grow-1 fw-medium d-md-none">{p.name}</span>
                  <span className={`badge rounded-pill d-md-none ${met ? 'text-bg-success' : 'text-bg-primary'}`}>
                    ${p.contributed} / ${p.goal}
                  </span>

                  {/* Desktop: name above progress bar */}
                  <div className="flex-grow-1 d-none d-md-block">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium">{p.name}</span>
                      <span className={`small ${met ? 'text-success' : 'text-muted'}`}>
                        ${p.contributed} / ${p.goal}
                      </span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div
                        className={`progress-bar ${met ? 'bg-success' : ''}`}
                        role="progressbar"
                        style={{ width: `${pct}%` }}
                        aria-valuenow={pct}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Participants;
