import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Pithagola</Subheading>}
        heading="We are modern village people."
        buttonRounded={false}
        primaryButtonText="Watch video"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the desgin space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Pithagola is a clustered human settlement or community, larger than a hamlet but smaller than a town (although the word is often used to describe both hamlets and smaller towns), with a population typically ranging from a few hundred to a few thousand. Though Pithagola is often located in rural areas, the term urban village is also applied to certain urban neighborhoods. "
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "About",
            description: "Pithagola is a medium size village located in Harichandanpur Block of Kendujhar district, Orissa with total 482 families residing. The Pithagola village has population of 1778 of which 870 are males while 908 are females as per Population Census 2011."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Population",
            description: "In Pithagola village population of children with age 0-6 is 182 which makes up 10.24 % of total population of village. Average Sex Ratio of Pithagola village is 1044 which is higher than Orissa state average of 979. Child Sex Ratio for the Pithagola as per census is 701, lower than Orissa average of 941"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Education",
            description: "Pithagola village has lower literacy rate compared to Orissa. In 2011, literacy rate of Pithagola village was 71.49 % compared to 72.87 % of Orissa. In Pithagola Male literacy stands at 76.67 % while female literacy rate was 66.75 %"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
