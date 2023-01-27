const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <Nav></Nav>
        <h1>New art page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/arts" method="POST">
          Name: <input type="text" name="name"/>
          <br />
          Description: <input type="text" name="description"/>
          <br />
          Price: <input type="text" name="price"/>
          <br />
          Artwork Upload: <input type="image" src="" alt="" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    );
  }
}

module.exports = New;