const React = require("react");
const Button = require("../layout/Button");
const Footer = require("../layout/Footer");
const Layout = require("../layout/Layout");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <Nav/>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl my-10">Login</h1>
          <Button>
            <a href="/user/signup">Signup</a>
          </Button>

          <form action="/user/login" method="POST">
            <div className="flex flex-col justify-center">

              <input type="text" defaultValue="" name="username" required placeholder="username" className="my-2 bg-transparent border-b-4 focus:outline-none"/>
              {" "}
              <input type="password" defaultValue="" name="password" required placeholder="password" className="my-2 bg-transparent border-b-4 focus:outline-none"/>
              <Button>
                <input type="submit" name="" value="Login" />
              </Button>
              </div>
          </form>
        </div>
        <Spacer/>
        <Footer/>
      </Layout>
    );
  }
}

module.exports = Login;