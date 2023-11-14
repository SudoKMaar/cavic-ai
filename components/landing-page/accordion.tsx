import { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import { media } from "@/lib/media";
import Collapse from "./collapse";
import RichText from "./rich-text";

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({
  title,
  isOpen,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isactive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isactive={isactive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
            ></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isactive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h3`
  font-size: 2rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div<{ isactive: boolean }>`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isactive ? 180 : 0)}deg);
`;

const Description = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  background: rgb(45, 55, 72);
  box-shadow: 0 2px 4px 0 rgb(12 0 46 / 4%);
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media("<=desktop")} {
    width: 100%;
  }
`;
