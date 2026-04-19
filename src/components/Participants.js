function Participants({ participants }) {
  const entries = Object.entries(participants);

  return (
    <div id="participants" className="container-fluid border border-secondary" style={{ margin: '0' }}>
      <div className="row border-bottom border-secondary" style={{ margin: '5px 0px 5px 0px' }}>
        <h2 className="text-center">Participants</h2>
      </div>
      <ul id="participants-list" className="container">
        {entries.length === 0 && (
          <li className="list-group-item text-center text-muted" style={{ listStyle: 'none' }}>
            No participants yet
          </li>
        )}
        {entries.map(([key, p], idx) => (
          <div
            key={key}
            id={`participant-${key}`}
            className={`row align-items-center${idx < entries.length - 1 ? ' border-bottom' : ''}`}
            style={{ marginBottom: '5px' }}
          >
            <h6 className="col-8">{p.name}</h6>
            <span
              className={`col-4 badge rounded-pill ${p.contributed >= p.goal ? 'text-bg-success' : 'text-bg-primary'}`}
            >
              ${p.contributed}/${p.goal}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Participants;
