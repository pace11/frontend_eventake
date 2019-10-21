import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faCheckCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import MyDate from '../../../lib/date'

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

function StyledCard({
  imgUrl,
  active,
  title,
  venue,
  date,
  registrantQuota,
  categories,
  id,
}) {
  return (
    <Card style={{ boxShadow: '2px 3px 10px -8px #000000' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Badge pill variant="success">
          <FontAwesomeIcon icon={faCheckCircle} /> {active}
        </Badge>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {venue}
        </Card.Subtitle>
        <Card.Text>
          <FontAwesomeIcon icon={faCalendarAlt} /> {MyDate(date)}
        </Card.Text>
        <div>
          <Badge variant="info" style={{ marginRight: '5px' }}>
            <FontAwesomeIcon icon={faUsers} /> {registrantQuota}
          </Badge>
          <Badge variant="info">{categories}</Badge>
        </div>
      </Card.Body>
      <Card.Footer>
        <StyledLink to={`/event/${id}`}>
          <Button variant="info" block>
            Get Now
          </Button>
        </StyledLink>
      </Card.Footer>
    </Card>
  )
}

export default StyledCard
