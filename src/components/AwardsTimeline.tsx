'use client';

import React from 'react';
import styled from 'styled-components';
import { awardsData, AwardItem } from '@/data/awards';

/* --- STYLED COMPONENTS --- */

const TimelineContainer = styled.div`
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  padding: 1rem 0;
`;

const YearBlock = styled.div`
  position: relative;
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const YearHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.75rem;

  .year-badge {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.card};
    padding: 0.25rem 1rem;
    border-radius: ${({ theme }) => theme.radius.sm};
    border: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .year-line {
    flex-grow: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`;

const EventsList = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-left: 1.25rem;
  border-left: 2px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0.65rem;
    padding-left: 1.25rem;
    gap: 1rem;
  }
`;

const EventNode = styled.div`
  position: relative;

  /* Timeline Dot Marker */
  &::before {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: calc(-2rem - 6px);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    transition: transform ${({ theme }) => theme.transitions.default}, background-color ${({ theme }) => theme.transitions.default};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: calc(-1.25rem - 6px);
      top: 1rem;
    }
  }

  &:hover::before {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.3);
  }
`;

const EventCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  padding: 1.25rem 1.5rem;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateX(4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 1.15rem;
  }
`;

const EventTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    line-height: 1.3;
  }

  .org-tag {
    font-size: 0.725rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accentDark};
    background-color: ${({ theme }) => theme.colors.cardSecondary};
    padding: 0.2rem 0.55rem;
    border-radius: ${({ theme }) => theme.radius.xs};
    white-space: normal;
    word-break: break-word;
    display: inline-block;
  }
`;

const EventDesc = styled.p`
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const AwardsTimeline: React.FC = () => {
  // Group awards by year
  const years = Array.from(new Set(awardsData.map((a) => a.year))).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <TimelineContainer>
      {years.map((year) => {
        const awardsInYear = awardsData.filter((a) => a.year === year);
        return (
          <YearBlock key={year}>
            <YearHeader>
              <div className="year-badge">{year}</div>
              <div className="year-line" />
            </YearHeader>

            <EventsList>
              {awardsInYear.map((award: AwardItem, idx: number) => (
                <EventNode key={`${award.year}-${idx}`}>
                  <EventCard>
                    <EventTop>
                      <h3>{award.category}</h3>
                      <span className="org-tag">{award.organization}</span>
                    </EventTop>
                    {award.description && (
                      <EventDesc>{award.description}</EventDesc>
                    )}
                  </EventCard>
                </EventNode>
              ))}
            </EventsList>
          </YearBlock>
        );
      })}
    </TimelineContainer>
  );
};
