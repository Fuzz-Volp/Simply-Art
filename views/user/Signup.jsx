const React = require("react");
const LoginLayout = require("../layout/LoginLayout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Button = require("../components/Button");
const Opacity = require("../components/Opacity");

class Signup extends React.Component {
  render() {
    return (
      <LoginLayout title="signup">
        <Nav/>
        <div className="relative flex flex-col justify-content w-full">

          <Opacity>
            <img 
            src="https://a.1stdibscdn.com/steve-mills--paintings-landscape-with-tree-huge-clouds-green-academic-realism-shadows-blue-for-sale/a_277/a_92477021638299104300/SM_211_new_master.jpg?disable=upscale&auto=webp&quality=60" 
            alt="background" 
            className="z-0 h-600 rounded"
            />
          </Opacity>
            <div className="flex flex-col justify-center absolute w-full">
              <h1 className="text-5xl my-28 mx-auto border-b-4">Signup</h1>

              <form action="/user/signup" method="POST">
                <div className="flex flex-col justify-center">

                <input type="text" defaultValue="" name="username" required  placeholder="username" className="my-2 bg-transparent border-b-4 focus:outline-none w-1/8 mx-auto"/>
                {" "}
                <input type="password" defaultValue="" name="password" required placeholder="password" className="my-2 bg-transparent border-b-4 focus:outline-none w-1/8 mx-auto"/>
                <Button>
                  <input type="submit" name="" value="Signup" />
                </Button>
                </div>
              </form>
            </div>
        </div>
        <Footer/>
      </LoginLayout>
    );
  }
}

module.exports = Signup;