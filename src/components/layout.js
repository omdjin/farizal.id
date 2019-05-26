import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
            title="Back to Home"
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1)} ${rhythm(3 / 4)} 0`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>

        <footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `16px`,
            borderTop: `1px solid #eee`,
            ...scale(-1 / 4),
          }}
        >
          Copiright 2017 - {new Date().getFullYear()} - Farizal.id
          <br />
          Built with {` `}
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog" target="_blank" rel="noopener noreferrer">
            Gatsby's blog starter
          </a>
        </footer>
      </>
    );
  }
}

export default Layout;
