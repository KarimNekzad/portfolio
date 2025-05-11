'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Typewriter() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software <span class="font-bold text-orange-600">Engineer</span>',
        'Software <span class="font-bold text-orange-600">Developer</span>',
        'Software <span class="font-bold text-orange-600">Enthusiast</span>',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: false,
      smartBackspace: true,
      contentType: 'html',
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return <span ref={el} />;
}
