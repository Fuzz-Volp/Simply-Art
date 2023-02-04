const React = require("react");
const Button = require("../components/Button");
const Layout = require("../layout/Layout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../components/Spacer");

class New extends React.Component {
  render() {
    return (
      <Layout title="Add" className="hidden">
        <Nav/>

        <h1 className="text-5xl mb-20">
          Add your work
        </h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/arts" method="POST" className="flex flex-col justify-center">
          <input type="text" name="name" placeholder="name" className=""/>
          <br />
          <input type="text" name="description" placeholder="description" className=""/>
          <br />
          <input type="text" name="price" placeholder="price" className=""/>
          <br />
          <input type="text" name="image" placeholder="artwork" className="mb-2"/>
          <br />

          <Button >
            <input type="submit" value="Submit" className="cursor-pointer " />
          </Button>
        </form>

        <Spacer/>
        
        <Footer/>
      </Layout>
    );
  }
}

module.exports = New;