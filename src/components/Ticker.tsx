import type { Copy } from '../site';

function Ticker({ copy }: { copy: Copy }) {
  return (
    <div className="ticker" aria-label="Areas of practice">
      <div className="ticker-track">
        {[0, 1].map((sequence) => (
          <div className="ticker-sequence" aria-hidden={sequence === 1} key={sequence}>
            {copy.ticker.map((item: string, index: number) => <span className="ticker-item" key={`${item}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
