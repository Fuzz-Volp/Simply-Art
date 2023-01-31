const React = require("react");
const AboutUs = require("../layout/AboutUs");
const ArtPost = require("../layout/ArtPost");
const Contact = require("../layout/Contact");
const Layout = require("../layout/Layout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Quote = require("../layout/Quote");
const Welcome = require("../layout/Welcome");
const Button = require("../layout/Button");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { arts } = this.props;

    return (
      <Layout>
        <Nav/>
        
        <Welcome/>

        <div className="flex flex-col">
          <div className="flex flex-row my-10 px-10 bg-gray-100 w-11/12 h-96 mt-32">
            <div className="flex items-center overflow-x-auto overscroll-x-contain snap-center">
              {arts.map((art, i) => {
                return <ArtPost key={i} art={art} />;
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <Button>
              <a href="/arts/gallery">Browse Our Collection</a>
            </Button>
          </div>
        </div>

        <AboutUs/>

        <Quote/>

        <Contact/>

        <Footer/>

      </Layout>
    );
  }
}

module.exports = Index;