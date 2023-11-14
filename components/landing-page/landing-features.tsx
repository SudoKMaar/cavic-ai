"use client";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Collapse from "./collapse";
import Container from "./container";
import ThreeLayersCircle from "./three-layer-circle";
import { media } from "@/lib/media";

const TABS = [
  {
    title: "Conversational Companion",
    description:
      "<p>Elevate user interactions with our conversational companion, a dynamic AI chat interface that understands and responds to natural language, providing a seamless and intuitive user experience.</p>",
    imageUrl: "/conversation_demo.png",
    baseColor: "191,165,250",
    secondColor: "139,92,246",
  },
  {
    title: "Audio Generation",
    description:
      "<p>Unleash the power of sound with our AI's audio generation. Transform ideas into captivating audio content effortlessly, whether it's for podcasts, voiceovers, or music production.</p>",
    imageUrl: "/a.png",
    baseColor: "150,239,210",
    secondColor: "16,185,129",
  },
  {
    title: "Video Generation",
    description:
      "<p>Ignite creativity with our video generation feature. Describe your vision, and watch as our AI brings it to life, producing stunning and engaging videos for any purpose.</p>",
    imageUrl: "/v.png",
    baseColor: "215,134,100",
    secondColor: "194,65,12",
  },
  {
    title: "Image Generation",
    description:
      "<p>Redefine visual storytelling using our image generation capabilities. Simply describe the scene, concept, or design you envision, and let our AI craft striking visuals with precision and flair.</p>",
    imageUrl: "/c.png",
    baseColor: "183,90,129",
    secondColor: "190,24,93",
  },
  {
    title: "Code Generation",
    description:
      "<p>Turbocharge development with our code generation feature. From complex algorithms to everyday scripts, articulate your programming needs, and watch as the AI translates your ideas into clean and efficient code.</p>",
    imageUrl: "/a.png",
    baseColor: "107,165,129",
    secondColor: "21,128,61",
  },
];

export default function LandingFeatureGallary() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);
  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isactive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;
    return (
      <ImageContainer key={singleTab.title} isactive={isactive}>
        <Image src={singleTab.imageUrl} alt={singleTab.title} fill />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isactive = singleTab.title === currentTab.title;
    return (
      <Tab isactive={isactive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle
              baseColor={isactive ? "transparent" : singleTab.baseColor}
              secondColor={singleTab.secondColor}
            />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isactive} duration={300}>
          <TabContent>
            <div
              dangerouslySetInnerHTML={{ __html: singleTab.description }}
            ></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>Features</OverTitle>
        <SectionTitle>What are you signing in for?</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;

  ${media("<=desktop")} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 2rem;

  & > *:not(:first-child) {
    margin-top: 0.2rem;
  }

  ${media("<=desktop")} {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isactive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isactive ? "2" : "0")};
  box-shadow: 0 2px 4px 0 rgb(12 0 46 / 4%);

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media("<=desktop")} {
    width: ${(p) => (p.isactive ? "100%" : "0")};
  }
`;

const Tab = styled.div<{ isactive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 1rem;
  background: rgb(45, 55, 72);
  box-shadow: 0 2px 4px 0 rgb(12 0 46 / 4%);
  opacity: ${(p) => (p.isactive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media("<=desktop")} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;
  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media("<=tablet")} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media("<=tablet")} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${media("<=tablet")} {
    font-size: 4.6rem;
  }
`;
const OverTitle = styled.span`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: "";
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: 22, 115, 255;
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  color: white;
  line-height: 0;
  text-transform: uppercase;

  ${media("<=desktop")} {
    line-height: 1.5;
  }
`;
