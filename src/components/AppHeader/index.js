import Link from 'next/link'
import { Layout, Row, Col } from 'antd'

const linkStyle = {
  marginRight: 15,
}

const AppHeader = () => {
  const { Header } = Layout

  return (
    <Header>
      <Row gutter={16}>
        <Col span={4}>
          <span style={{ color: '#FFF' }}>React Cluj Website</span>
        </Col>
        <Col span={2}>
          <Link href='/'>
            <a style={linkStyle}>Home</a>
          </Link>
        </Col>
        <Col span={2}>
          <Link href='/about'>
            <a style={linkStyle}>About</a>
          </Link>
        </Col>
        <Col span={2}>
          <Link href='https://github.com/react-cluj'>
            <a target={'_blank'} style={linkStyle}>
              Github
            </a>
          </Link>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader
