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
            padding: `16px`,
            borderTop: `1px solid #eee`,
          }}
        >
          Copiright 2017 - {new Date().getFullYear()} Farizal.id, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
        </footer>
      </>
    );
  }
}

export default Layout;
