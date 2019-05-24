import { CenteredContent } from '../src/styledComponents'
import Layout from '../src/components/AppLayout'

export default () => (
  <Layout>
    <CenteredContent padding={2}>
      <h1>React Cluj</h1>
      <img className={'react-logo'} src={'/static/images/react.svg'} />
    </CenteredContent>
  </Layout>
)
