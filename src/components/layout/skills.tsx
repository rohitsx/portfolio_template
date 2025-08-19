"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { STACKS } from "@/common/constant/stack";
import { Section } from "lucide-react";
import SectionHeading from "@/common/component/elements/sectionHeading";
import { Container } from "@/common/component/elements/container";

// Left-to-right scroll
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Right-to-left scroll
const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Row = styled.div<{ duration: number; startOffset: number; direction?: string }>`
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: ${({ direction }) => (direction === "right" ? scrollRight : scrollLeft)} 
    ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ startOffset }) => `-${startOffset}s`};
`;

interface Props {
  items: string[];
  duration: number;
  startOffset: number;
  direction?: string;
}

function InfiniteScrollRow({ items, duration, startOffset, direction }: Props) {
  return (
    <Row duration={duration} startOffset={startOffset} direction={direction}>
      {items.concat(items).map((tech, i) => (
        <div
          key={tech + i}
          className="flex items-center gap-2 p-2 px-4 shadow-xs border rounded-4xl"
        >
          {STACKS[tech]}
          <span>{tech}</span>
        </div>
      ))}
    </Row>
  );
}

export function Skills() {
  const techList = Object.keys(STACKS);

  return (
    <Container title="Tool That I Have Used">
      <div className="w-full  overflow-hidden py-5 space-y-4">
        <InfiniteScrollRow items={techList} duration={150} startOffset={0} />
        <InfiniteScrollRow items={techList} duration={140} startOffset={5} direction="right" />
        <InfiniteScrollRow items={techList} duration={150} startOffset={10} />
      </div>
    </Container>
  );
}
