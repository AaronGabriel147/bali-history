import Header from "./Header";
import Footer from "./Footer";
import styles from "./balisong-timeline.module.css";

const timelineData = [
  {
    title: "French Precursors",
    model: "Pied-du-Roy / Balisong-like knives",
    period: "1710–1800s",
    location: "Thiers, Paris, France",
  },
  {
    title: "Traditional Filipino Makers",
    model: "Veinte y nueve",
    period: "Early 1900s",
    location: "Taal, Batangas, Philippines",
  },
  {
    title: "Bali-Song, Inc.",
    model: "Model 68",
    period: "1979–Early 1980s",
    location: "California, USA",
  },
  {
    title: "Pacific Cutlery Corp.",
    model: "Various",
    period: "Early 1980s–1987",
    location: "California, USA",
  },
  {
    title: "Benchmade",
    model: "4x Series (Model 42)",
    period: "1988–2010",
    location: "Oregon City, Oregon, USA",
  },
  {
    title: "Bear & Son Cutlery",
    model: "114, 517, etc.",
    period: "1991–Present",
    location: "Jacksonville, Alabama, USA",
  },
  {
    title: "Microtech",
    model: "Tachyon / Tachyon II",
    period: "2000 / 2012",
    location: "Vero Beach, FL & Fletcher, NC, USA",
  },
  {
    title: "Cold Steel",
    model: "Arc Angel",
    period: "2000",
    location: "Ventura, California, USA",
  },
  {
    title: "HOM Design",
    model: "G10 Basilisk",
    period: "2007",
    location: "Albertson, New York, USA",
  },
  {
    title: "Bradley Cutlery",
    model: "Kimura Series",
    period: "2009",
    location: "South Bend, Indiana, USA",
  },
  {
    title: "BRS",
    model: "Alpha Beast, Replicant",
    period: "2012",
    location: "USA",
  },
  {
    title: "Squid Industries",
    model: "Squidtrainer, Krake Raken",
    period: "2016",
    location: "USA",
  },
];

export default function BalisongTimeline() {
  return (
    <>
      <section className={styles.timelineSection}>
        <h2 className={styles.timelineTitle}>Timeline</h2>
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineItems}>
            {timelineData.map((item, idx) => (
              <div className={styles.timelineItem} key={idx}>
                <div className={styles.timelineNodeCol}>
                  <div className={styles.timelineDot}></div>
                </div>
                <div className={styles.timelineTextCol}>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelinePeriod}>{item.period}</div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>{item.title}</div>
                      <div className={styles.timelineModel}>{item.model}</div>
                      <div className={styles.timelineLocation}>{item.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 