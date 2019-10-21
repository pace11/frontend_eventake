import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Image,
  Table,
  Badge,
  Button,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faUsers,
  faTicketAlt,
  faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons'
import Layout from '../../common/components/Layout'
import MyDate from '../../lib/date'
import Axios from 'axios'

function EventDetail(props) {
  const [data, setData] = useState([])
  const goBack = props.history.goBack

  useEffect(() => {
    async function fetchData() {
      const result = await Axios(
        `http://127.0.0.1:8000/api/v1/event/${props.match.params.id}`,
      )
      setData(result.data.data)
    }
    fetchData()
  }, [props.match.params.id])

  console.log(props)
  return (
    <React.Fragment>
      <Layout>
        <h3>Detail Events</h3>
        {data.map((key, index) => (
          <Row key={index}>
            <Col lg={4} md={4} xs={12}>
              <Image src={key.eventImg} fluid />
            </Col>
            <Col lg={6} md={6} xs={12}>
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <td>
                      <h4>{key.eventName}</h4>
                      <p>{key.eventOrganizer}</p>
                      <small>{key.eventDesc}</small> <br />
                      <Badge pill variant="success">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        {key.eventActive}
                      </Badge>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h5>{key.eventVenue}</h5>
                      {key.eventAddress}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {MyDate(key.eventDateStart)} -
                      {MyDate(key.eventDateEnd)} <br />
                      {key.eventTimeStart} - {key.eventTimeEnd}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Badge
                        variant="info"
                        style={{ marginRight: '5px' }}
                      >
                        <FontAwesomeIcon icon={faUsers} />
                        {key.eventRegistrantQuota}
                      </Badge>
                      <Badge variant="info">
                        {key.categories['name']}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col md={3}>
                          <Button variant="danger" block onClick={goBack}>
                            <FontAwesomeIcon icon={faChevronCircleLeft}/> Back
                          </Button>
                        </Col>
                        <Col md={9}>
                          <Button variant="info" block>
                            <FontAwesomeIcon icon={faTicketAlt}/> Buy Ticket
                          </Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        ))}
      </Layout>
    </React.Fragment>
  )
}

export default EventDetail
