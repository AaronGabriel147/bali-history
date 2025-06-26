import Header from "./Header";
import BalisongTimeline from "./balisong-timeline";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.centered}>
        {/* <h1 className={styles.title}>Balisong Evolution</h1> */}
        <div className={styles.timelineFlexContainer}>
          <BalisongTimeline />
        </div>
      </div>
    </>
  );
}
