const React = require("react");
const Layout = require("../layout/Default");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");

class Signup extends React.Component {
  render() {
    return (
      <Layout>
        <Nav></Nav>
        <div>
          <h1>Signup</h1>

          <form action="/user/signup" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <input type="submit" name="" value="Signup" />
          </form>
        </div>
        <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = Signup;