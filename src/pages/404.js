import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="404: Not Found"
          meta={[
            {
              name: 'robots',
              content: 'noindex',
            },
          ]}
        />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <p>
          <Link to={`/`}>Back to Homepage</Link>
        </p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
