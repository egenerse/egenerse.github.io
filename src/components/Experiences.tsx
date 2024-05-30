import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import mvstLogo from "../assets/mvst.png";
import abbLogo from "../assets/abb.png";
import gopuffLogo from "../assets/gopuff.png";
import medyasoftLogo from "../assets/medyasoft.png";
import hesapkurduLogo from "../assets/hesapkurdu.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 90%;
  max-width: 900px;
  margin-top: 2rem;
`;

const Experiences: React.FC = () => {
  return (
    <Grid>
      <Card
        title="Working Student"
        subtitle="MVST, Munich, Germany (11/2023 - Present)"
        content={[
          "Developing a production-ready React Native application from scratch with a 5-member team.",
          "Implementing core components, screens, and API integrations, ensuring high performance and usability.",
          "Coordinating with clients and team members to align project goals and deliverables.",
        ]}
        logo={mvstLogo}
      />
      <Card
        title="Working Student"
        subtitle="ABB, Munich, Germany (04/2023 - 09/2023)"
        content={[
          "Collaborated with the R&D Manager to enhance the internal user experience within Polarion.",
          "Developed a custom workflow using JavaScript to automate the creation of user accounts and assigning roles in projects by dynamically checking Active Directory tables.",
          "Created reusable project templates to enhance efficiency in project management.",
        ]}
        logo={abbLogo}
      />
      <Card
        title="Full-Time React Native Contractor Mobile Developer"
        subtitle="StartupHeroes & GoPuff, Remote, Istanbul, USA (09/2021 – 09/2022)"
        content={[
          "Proficient in cross-platform mobile frontend development.",
          "Developed an application for the delivery of consumer goods and food using React Native, TypeScript, and GraphQL for GoPuff, collaborating with an international team.",
          "Took ownership of pages, components, and user flows, ensuring their high-quality development and carefully reviewing all changes for accuracy and efficiency.",
        ]}
        logo={gopuffLogo}
      />
      <Card
        title="Full-Time React Native Mobile Developer"
        subtitle="Medyasoft Inc, Ankara, Turkey (03/2021 – 08/2021)"
        content={[
          "Proficient in project development and mobile app development using React Native.",
          "Actively contributed to the development of mobile pages and components for ”Kizilay Mobil” and ”Kizilay GYS” applications, benefiting The Turkish Red Crescent and its volunteers.",
          "Engaged in regular meetings with The Turkish Red Crescent team, presenting development progress and updating them on the latest enhancements.",
        ]}
        logo={medyasoftLogo}
      />
      <Card
        title="Internship, Part-Time, Full-Time Backend Developer"
        subtitle="Hesapkurdu.com Inc, Remote, Turkey (07/2020 – 02/2021)"
        content={[
          "Resolved system bugs, SEO enhancements for improved online visibility, enhanced user experience, and also improved content management system.",
          "Developed new controllers and services, enhancing user interactions.",
          "Developed a new scheduled job to monitor real-time fuel price and optimized it with Redis cache.",
        ]}
        logo={hesapkurduLogo}
      />
    </Grid>
  );
};

export default Experiences;
