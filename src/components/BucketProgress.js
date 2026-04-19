function BucketProgress({ totalContributed, bucketGoal }) {
  const pct = Math.min(100, Math.round((totalContributed / bucketGoal) * 100));

  return (
    <div id="bucket-progress" className="container-fluid border border-secondary rounded-top" style={{ margin: '5px 0px 5px 0px' }}>
      <div className="row">
        <h4 className="col-3" style={{ margin: '3px' }}>Progress</h4>
        <div className="col-8">
          <div
            id="bucket-progress-bar"
            className="progress"
            role="progressbar"
            aria-label="bucket progress"
            aria-valuenow={pct}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ margin: '1em 0px 1em 0px' }}
          >
            <div
              id="bucket-progress-fill"
              className="progress-bar text-bg-primary progress-bar-striped progress-bar-animated"
              style={{ width: pct + '%' }}
            >
              {pct}% (${totalContributed} / ${bucketGoal})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BucketProgress;
