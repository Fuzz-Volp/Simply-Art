const React = require("react");
const Layout = require("../layout/Layout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");
const Button = require("../layout/Button");

class Signup extends React.Component {
  render() {
    return (
      <Layout>
        <Nav/>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl my-10">Signup</h1>

          <form action="/user/signup" method="POST">
            <div className="flex flex-col justify-center">

            <input type="text" defaultValue="" name="username" required  placeholder="username" className="my-2 bg-transparent border-b-4 focus:outline-none"/>
            {" "}
            <input type="password" defaultValue="" name="password" required placeholder="password" className="my-2 bg-transparent border-b-4 focus:outline-none"/>
            <Button>
              <input type="submit" name="" value="Signup" />
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

module.exports = Signup;