import { Button, Col, Row } from 'antd'
import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import Error404gif from "../../images/Error404gif.gif"

const Error404 = () => {
    return (
        <div>
            <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <img src={Error404gif} alt="Error 404" style={{ maxHeight: "90vh", minWidth: "60vw" }} />
                <Col>
                    <Button type="primary">
                        <a href="https://kedarkoshti.netlify.app/">Redirect to Landing page</a>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Error404