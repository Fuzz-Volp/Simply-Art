const React = require("react");
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

        <ul>
          {arts.map((art, i) => {
            return (
              <li key={i}>
                The <a href={`/arts/${art.id}`}> {art.name} </a> is{" "}
                {art.description}
                {" - "}
                {art.price}
                {art.image}
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;