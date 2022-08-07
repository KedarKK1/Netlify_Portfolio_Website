import React from 'react'
import { Layout} from 'antd'
import { Content } from 'antd/lib/layout/layout'
// import { Col, Layout, Row } from 'antd'

const VisitorsCount = () => {
      
  return (
    <>
        <Layout>
            <Content style={{ marginTop: 15}} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h1> <b><u>Total Visitors</u></b> </h1>
                <div className="text-center"><b><h4>45</h4></b></div>

            </Content>
        </Layout>
    </>
  )
}

export default VisitorsCount