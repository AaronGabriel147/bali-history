import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Balisong<span>Evolution</span></div>
    </header>
  );
} 