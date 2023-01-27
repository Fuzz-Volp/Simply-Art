const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

class Login extends React.Component {
  render() {
    return (
      <Layout>
      <Nav></Nav>
      <div>
        <h1>Login</h1>
        <a href="/user/signup">
          <h3>Signup</h3>
        </a>

        <form action="/user/login" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
      </Layout>
    );
  }
}

module.exports = Login;