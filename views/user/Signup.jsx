const React = require("react");
const Layout = require("../layout/Layout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");
const Button = require("../layout/Button");
const Opacity = require("../layout/Opacity");

class Signup extends React.Component {
  render() {
    return (
      <Layout title="signup">
        <Spacer/>
        <Nav/>
        <Opacity>
          <img 
          src="https://a.1stdibscdn.com/steve-mills--paintings-landscape-with-tree-huge-clouds-green-academic-realism-shadows-blue-for-sale/a_277/a_92477021638299104300/SM_211_new_master.jpg?disable=upscale&auto=webp&quality=60&width=1318" 
          alt="background" 
          className="z-0 h-full"
          />
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl my-10 mx-auto">Signup</h1>

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
        </Opacity>
        <Spacer/>
        <Footer/>
      </Layout>
    );
  }
}

module.exports = Signup;