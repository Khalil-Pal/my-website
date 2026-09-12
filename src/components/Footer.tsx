import { ArrowUpRight } from 'lucide-react';
import type { Copy } from '../site';

function Footer({ copy }: { copy: Copy }) {
  return (
    <footer className="site-footer">
      <span>{copy.footer.note}</span>
      <a href="#top">{copy.footer.top} <ArrowUpRight size={13} /></a>
    </footer>
  );
}

export default Footer;
