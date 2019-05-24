import { CenteredContent } from '../src/styledComponents'
import Layout from '../src/components/AppLayout'

export default () => (
  <Layout>
    <CenteredContent padding={2}>
      <h1>About</h1>
      <p>
        This is an open source website built using NextJs, React, Antd and
        Styled-Components.
      </p>
      <p>
        Hopefully the community will work together in order to make this website
        awesome
      </p>
    </CenteredContent>
  </Layout>
)
