function BucketProgress({ totalContributed, bucketGoal }) {
  const pct = Math.min(100, Math.round((totalContributed / bucketGoal) * 100));

  // Interior bucket coordinates within the SVG viewBox
  const rimY = 30;
  const bottomY = 96;
  const interiorHeight = bottomY - rimY;
  const waterHeight = (pct / 100) * interiorHeight;
  const waterY = bottomY - waterHeight;

  return (
    <div
      id="bucket-progress"
      className="container-fluid border border-secondary rounded-top text-center"
      style={{ margin: '5px 0px 5px 0px', padding: '8px 0' }}
    >
      <h4>Progress</h4>
      <svg
        viewBox="0 0 100 110"
        role="img"
        aria-label={`Bucket ${pct}% full`}
        style={{ width: '120px', height: '132px' }}
      >
        <defs>
          <clipPath id="bucket-clip">
            <polygon points="14,30 86,30 76,96 24,96" />
          </clipPath>
        </defs>

        {/* Water fill, clipped to bucket shape */}
        <rect
          x="0"
          y={waterY}
          width="100"
          height={waterHeight}
          fill="var(--bs-primary)"
          clipPath="url(#bucket-clip)"
          style={{ transition: 'y 0.6s ease, height 0.6s ease' }}
        />

        {/* Wave at water surface */}
        {pct > 0 && pct < 100 && (
          <ellipse
            cx="50"
            cy={waterY}
            rx="35"
            ry="3"
            fill="var(--bs-primary)"
            opacity="0.5"
            clipPath="url(#bucket-clip)"
            style={{ transition: 'cy 0.6s ease' }}
          />
        )}

        {/* Bucket outline */}
        <polygon
          points="14,30 86,30 76,96 24,96"
          fill="none"
          stroke="#444"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Rim */}
        <line x1="11" y1="30" x2="89" y2="30" stroke="#444" strokeWidth="4.5" strokeLinecap="round" />

        {/* Handle */}
        <path d="M 30 30 Q 50 6 70 30" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <p style={{ margin: '2px 0 6px', fontSize: '0.9rem' }}>
        {pct}% (${totalContributed} / ${bucketGoal})
      </p>
    </div>
  );
}

export default BucketProgress;
