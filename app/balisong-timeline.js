import Header from "./Header";
import Footer from "./Footer";
import styles from "./balisong-timeline.module.css";
import Image from "next/image";

const timelineData = [
  {
    title: "French Precursors",
    model: "Pied-du-Roi / Balisong-like knives",
    period: "1710–1800s",
    location: "Thiers, Paris, France",
    image: "/images/french-precursors.jpg"
  },
  {
    title: "Traditional Filipino Makers",
    model: "Veinte y nueve",
    period: "Early 1900s",
    location: "Batangas, Philippines",
    image: "/images/filipino-makers.png"
  },
  {
    title: "Bali-Song, Inc.",
    model: "Model 68",
    period: "1979–Early 1980s",
    location: "Los Angeles California, USA",
    image: "/images/balisong-inc.jpg"
  },
  {
    title: "Pacific Cutlery Corp.",
    model: "Various stainless steel balisongs",
    period: "Early 1980s–1987",
    location: "Hollywood California, USA",
    image: "/images/pacific-cutlery.jpg"
  },
  {
    title: "Benchmade",
    model: "4x Series (first titanium balisong in 2000)",
    period: "1988",
    location: "Oregon City, Oregon, USA",
    image: "/images/benchmade.jpg"
  },
  {
    title: "Bear MGC /Bear & Son Cutlery",
    model: "114, 517, etc.",
    period: "1990's",
    location: "Jacksonville, Alabama, USA",
    image: "/images/bear-son.png"
  },
  {
    title: "Microtech",
    model: "Tachyon / Tachyon II",
    period: "2000 / 2012",
    location: "Vero Beach, FL & Fletcher, NC, USA",
    image: "/images/microtech.png"
  },
  {
    title: "Cold Steel",
    model: "Arc Angel",
    period: "2000",
    location: "Ventura, California, USA",
    image: "/images/cold-steel.png"
  },
  {
    title: "HOM Design",
    model: "Basilisk",
    period: "2007",
    location: "Albertson, New York, USA",
    image: "/images/hom-design.png"
  },
  {
    title: "Bradley Cutlery",
    model: "Kimura Series",
    period: "2009",
    location: "South Bend, Indiana, USA",
    image: "/images/bradley-cutlery.png"
  },
  {
    title: "BRS",
    model: "Matt Cook Prototype (2010), Alpha Beast (2012), Replicant (2014)",
    period: "2012",
    location: "East Coast USA",
    image: "/images/brs.png"
  },
  {
    title: "Squid Industries",
    model: "Squidtrainer (2016), Krake Raken (2019), Tsunami (2021)",
    period: "2016",
    location: "Bay Area California",
    image: "/images/squid-industries.png"
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
                    {item.image && (
                      <div className={styles.timelineImage}>
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.model}`}
                          width={200}
                          height={150}
                          className={styles.timelineImageElement}
                        />
                      </div>
                    )}
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