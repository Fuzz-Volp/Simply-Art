const React = require("react");
const Button = require("../layout/Button");
const Layout = require("../layout/Default");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");

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
          Artwork Upload <input type="image" src="" alt="" />
          <br />

          <Button>
            <input type="submit" value="Submit" className="cursor-pointer" />
          </Button>
        </form>

        <Spacer></Spacer>
        
        <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = New;