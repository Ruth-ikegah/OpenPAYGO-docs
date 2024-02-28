import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "OpenPAYGO Token",
    WebP: require("@site/static/img/openpaygo_token.webp").default,
    description: (
      <>
        Hardware and software agnostic open technology to enable PAYGO
        functionality in any device and make products PAYGO compatible.
      </>
    ),
  },
  {
    title: "OpenPAYGO Link",
    WebP: require("@site/static/img/openpaygo_link.webp").default,
    description: (
      <>
        Free and secure open-source technology PAYGO appliances communication
        protocol that make products interoperable and provides a reliable
        connection
      </>
    ),
  },
  {
    title: "OpenPAYGO Metrics",
    WebP: require("@site/static/img/openpaygo_metric.webp").default,
    description: (
      <>
        Free Open-source API specification that provides optimised standardised
        data format transmission for PAYGO devices to exchange usage metrics in
        a compact and efficient way
      </>
    ),
  },
];

function Feature({ Svg, Png, WebP, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Png && <img src={Png} alt={title} className={styles.featurePng} />}
        {WebP && <img src={WebP} alt={title} className={styles.featureImg} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
