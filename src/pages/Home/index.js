import React from 'react'
import {
  useStoreDispatch,
  useStoreState,
} from 'easy-peasy'
import { Col, Row, CardColumns } from 'react-bootstrap'
import Layout from '../../common/components/Layout'
import Card from '../../common/components/card'
import Shimmer from '../../common/components/shimmer'

function Home() {

  const dispatch = useStoreDispatch()
  const { Home: stateHome } = useStoreState(
    globalState => globalState,
  )

  React.useEffect(() => {
    dispatch.Home.init()
  }, [dispatch.Home])

  return (
    <React.Fragment>
      <Layout>
        <h3>Home</h3>
        {stateHome.initialState.loading && <Shimmer />}
        <Row>
          <Col>
            <CardColumns>
              {stateHome.initialState.items &&
                stateHome.initialState.items.data.map((item, index) => (
                  <Card
                    key={index}
                    id={item.id}
                    imgUrl={item.eventImg}
                    title={item.eventName}
                    categories={item.categories['name']}
                    venue={item.eventVenue}
                    date={item.eventDateStart}
                    active={item.eventActive}
                    registrantQuota={item.eventRegistrantQuota}
                  />
                ))}
            </CardColumns>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}

export default Home
