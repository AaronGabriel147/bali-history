import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <div>Created by Human Evolution ©2025</div>
        <a href="https://www.instagram.com/human_evolution_1?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <Image src="/instagram.png" alt="Instagram" width={28} height={28} className={styles.instagramLogo} />
          Instagram
        </a>
      </div>
    </footer>
  );
} 