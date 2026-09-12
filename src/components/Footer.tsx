import { ArrowUpRight } from 'lucide-react';
import type { Copy } from '../site';

function Footer({ copy }: { copy: Copy }) {
  return (
    <footer className="site-footer">
      <span>{copy.footer.note}</span>
      <span className="footer-note">{copy.footer.made}</span>
      <a href="#top" data-testid="link-back-to-top">{copy.footer.top} <ArrowUpRight size={13} /></a>
    </footer>
  );
}

export default Footer;
