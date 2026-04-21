function BucketProgress({ totalContributed, bucketGoal }) {
  const pct = Math.min(100, Math.round((totalContributed / bucketGoal) * 100));

  const topY = 30;
  const bottomY = 96;
  const interiorHeight = bottomY - topY;
  const waterHeight = (pct / 100) * interiorHeight;
  const waterY = bottomY - waterHeight;

  // 4 wave periods spanning x=-50 to x=150, amplitude ±3 units.
  // Animating translateX by -50 (one full period) creates a seamless loop.
  const buildWavePath = (y) => [
    `M -50 ${y}`,
    `Q -37.5 ${y - 3} -25 ${y}`,
    `Q -12.5 ${y + 3}   0 ${y}`,
    `Q  12.5 ${y - 3}  25 ${y}`,
    `Q  37.5 ${y + 3}  50 ${y}`,
    `Q  62.5 ${y - 3}  75 ${y}`,
    `Q  87.5 ${y + 3} 100 ${y}`,
    `Q 112.5 ${y - 3} 125 ${y}`,
    `Q 137.5 ${y + 3} 150 ${y}`,
    `L 150 ${bottomY} L -50 ${bottomY} Z`,
  ].join(' ');

  return (
    <div id="bucket-progress" className="card border-0 shadow-sm rounded-3 h-100">
      <div className="card-body text-center d-flex flex-column align-items-center justify-content-center py-4">
        <h5 className="fw-semibold mb-3">Progress</h5>
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

          {pct === 100 && (
            <polygon points="14,30 86,30 76,96 24,96" fill="var(--bs-primary)" />
          )}

          {pct > 0 && pct < 100 && (
            <g clipPath="url(#bucket-clip)">
              <path d={buildWavePath(waterY)} fill="var(--bs-primary)">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-50 0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          )}

          <path
            d="M 14 30 L 24 96 L 76 96 L 86 30"
            fill="none"
            stroke="#444"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-2 mb-0 text-muted small">
          ${totalContributed} of ${bucketGoal} raised &mdash; {pct}%
        </p>
      </div>
    </div>
  );
}

export default BucketProgress;
