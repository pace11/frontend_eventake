import React from 'react'
import styled, { keyframes} from 'styled-components'
import { Card, Row, Col, CardColumns } from 'react-bootstrap'
import theme from '../../theme'

const shimmerAnimation = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

const StyledDivShimmer = styled.div`
  animation-name: ${shimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${theme.colors.shimmer_primary};
  background-image: linear-gradient(
    125deg,
    ${props =>
      `${theme.colors.shimmer_primary} 5%, ${theme.colors.shimmer_secondary} 100%, ${theme.colors.shimmer_primary} 30%`}
  );
  height: ${props => props.height};
  background-size: 50rem 10rem;
  margin-bottom: 10px;
  border-radius: 5px;
`


export default function StyledShimmer({variant}) {
  const ShimmerItem = () => {
    return(
      <React.Fragment>
        <Card style={{ border: 'none' }}>
          <StyledDivShimmer height="10rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
        </Card>
        <Card style={{ border: 'none' }}>
          <StyledDivShimmer height="10rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
        </Card>
        <Card style={{ border: 'none' }}>
          <StyledDivShimmer height="10rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
          <StyledDivShimmer height="1rem" />
        </Card>
      </React.Fragment>
    )
  }
  switch(variant){
    case 'list': 
    return (
      <Row>
        <Col>
          <ShimmerItem />
        </Col>
      </Row>
    )
    default:
    return (
      <Row>
        <Col>
          <CardColumns>
            <ShimmerItem />
          </CardColumns>
        </Col>
      </Row>
    )
  }
}