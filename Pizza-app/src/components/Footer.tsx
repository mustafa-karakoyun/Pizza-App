import React, { useContext, type JSX } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Footer(): JSX.Element {
  const { color } = useContext(ThemeContext);
  return(
    <footer className={`footer bg-${color} text-center text-white py-3`}>
      <p>
        © 2025 Pizza
        <span role='img' aria-label='pizza'>
          🍕🍕🍕 Built by{' '}
          <a href='https://github.com/mustafa-karakoyun' target='_blank' rel='noopener noreferrer' >
            Mustafa Karakoyun
          </a>
        </span>
      </p>
    </footer>
  );
}