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
          <input type="text" name="name" placeholder="name"/>
          <br />
          <br />
          <input type="text" name="description" placeholder="description"/>
          <br />
          <input type="text" name="price" placeholder="price"/>
          <br />
          <input type="url" name="image" value="" placeholder="artwork"/>

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