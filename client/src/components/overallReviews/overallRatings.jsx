import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import starbar from '../ratingBars/starbar.jsx';

function OverallRatings({ currentProduct }) {
  const Ratings = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Button = styled.button`
    padding: 12px 28px;
    background-color: rgb(0, 109, 183);
    color: rgb(255, 255, 255);
    border-color: rgb(0, 109, 183);
    border-radius: 4px;
    cursor: pointer;
  `;

  const StarsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
  `;

  const AvgScore = styled.span`
    font-weight: bold;
  `;

  return (
    <Ratings>
      <StarsWrapper>
        <div>Overall Rating</div>
        <div>
          {starbar(currentProduct.avg_score)}
          {' '}
          <AvgScore id="avgScore">{currentProduct.avg_score}</AvgScore>
          {` (${currentProduct.total_reviews} Reviews) `}
        </div>
      </StarsWrapper>
      <Button type="button"> Write a Review </Button>
    </Ratings>
  );
}

export default OverallRatings;
