const React = require("react");
const ArtPost = require("../layout/ArtPost");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { arts } = this.props;

    return (
      <Layout>
        <Nav></Nav>
        <nav>
          <a href="/arts/new">Create a New art</a>
          <a href="/user/logout">
            <button className="logoutBtn">Logout</button>
          </a>
        </nav>
          {arts.map((art, i) => {
            return <ArtPost key={i} art={art} />;
          })}
      </Layout>
    );
  }
}

module.exports = Index;