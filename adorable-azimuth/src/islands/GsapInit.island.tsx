import { useEffect } from 'preact/hooks';
import initGsapReveal from '../lib/gsap-reveal';

export default function GsapInit() {
  useEffect(() => {
    void initGsapReveal();
  }, []);
  return null;
}
