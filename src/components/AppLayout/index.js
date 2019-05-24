import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Header from '../AppHeader'
import AppFooter from '../AppFooter'
import '../../style/style.css'

const { Content } = Layout

const AppLayout = props => (
  <Layout>
    <Header />
    <Content>{props.children}</Content>
    <AppFooter />
  </Layout>
)

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppLayout
