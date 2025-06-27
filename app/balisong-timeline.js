import Header from "./Header";
import Footer from "./Footer";
import styles from "./balisong-timeline.module.css";
import Image from "next/image";

const timelineData = [
  {
    title: "French Precursors",
    model: "Pied-du-Roi / Balisong-like knives",
    period: "1710–1800s",
    location: "Paris, France",
    image: "/images/french-precursors.jpg"
  },
  {
    title: "Traditional Filipino Makers",
    model: "",
    period: "Early 1900s",
    location: "Batangas, Philippines",
    image: "/images/filipino-makers.png"
  },
  {
    title: "Bali-Song, Inc.",
    model: "Model 68",
    period: "1979–1983",
    location: "Los Angeles, California",
    image: "/images/balisong-inc.jpg"
  },
  {
    title: "Pacific Cutlery Corp",
    model: "Various stainless steel balisongs",
    period: "Early 1983–1987",
    location: "Hollywood, California",
    image: "/images/pacific-cutlery.jpg"
  },
  {
    title: "Benchmade",
    model: "4x Series, first titanium balisong in 2000 (BM42)",
    period: "1988",
    location: "Oregon City, Oregon",
    image: "/images/benchmade.jpg"
  },
  {
    title: "Bear MGC /Bear & Son Cutlery",
    model: "Stainless steel balisongs",
    period: "1990's",
    location: "Jacksonville, Alabama",
    image: "/images/bear-son.png"
  },
  {
    title: "Microtech",
    model: "Tachyon I (2000) Tachyon II (2010), The era of titanium balisongs.",
    period: "2000",
    location: "Vero Beach, FL & Fletcher, NC",
    image: "/images/microtech.png"
  },
  {
    title: "Cold Steel",
    model: "Arc Angel (titanium)",
    period: "2000",
    location: "Ventura, California",
    image: "/images/cold-steel.png"
  },
  {
    title: "HOM Design",
    model: "Basilisk (titanium)",
    period: "2007",
    location: "Albertson, New York",
    image: "/images/hom-design.png"
  },
  {
    title: "Bradley Cutlery",
    model: "Kimura Series (stainless steel)",
    period: "2009",
    location: "South Bend, Indiana",
    image: "/images/bradley-cutlery.png"
  },
  {
    title: "BRS",
    model: "Matt Cook Prototype (2010), Alpha Beast (2012), Replicant (2014), the era of flipper focused balisongs begins.",
    period: "2012",
    location: "Maine USA",
    image: "/images/brs.png"
  },
  {
    title: "Squid Industries",
    model: "Squidtrainer (2016), Krake Raken (2019), Tsunami (2021), the era of plastic and aluminum balisongs begins.",
    period: "2016",
    location: "Bay Area, California",
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