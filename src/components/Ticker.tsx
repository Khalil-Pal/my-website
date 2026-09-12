import type { Copy } from '../site';

// The track is two identical halves scrolled by translateX(50%), so the loop restarts on
// an identical frame. That only reads as seamless if each half is at least as wide as the
// viewport — otherwise the tail of the track scrolls into view as a blank gap before the
// jump. The label set is ~1000px, so four repeats per half covers ultra-wide screens.
const REPEAT = 4;

function Ticker({ copy }: { copy: Copy }) {
  const labels: string[] = copy.ticker;
  const half: string[] = Array.from({ length: REPEAT }, () => labels).flat();

  return (
    <div className="ticker" aria-label="Areas of practice">
      <div className="ticker-track">
        {[0, 1].map((index) => (
          <div className="ticker-sequence" aria-hidden={index === 1} key={index}>
            {half.map((item, position) => (
              // Only the first pass of the first half is exposed to assistive tech.
              <span className="ticker-item" aria-hidden={position >= labels.length} key={`${item}-${position}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
