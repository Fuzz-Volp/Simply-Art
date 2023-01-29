const React = require("react");
const AboutUs = require("../layout/AboutUs");
const ArtPost = require("../layout/ArtPost");
const Contact = require("../layout/Contact");
const Layout = require("../layout/Default");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Quote = require("../layout/Quote");
const Welcome = require("../layout/Welcome");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { arts } = this.props;

    return (
      <Layout>
        <Nav></Nav>
        <Welcome></Welcome>
        <nav>
          <a href="/user/logout">
            <button className="logoutBtn">Logout</button>
          </a>
        </nav>

        <div className="flex flex-row my-10 px-10 bg-gray-100 w-11/12 h-96">
          <div className="flex items-center">
            {arts.map((art, i) => {
              return <ArtPost key={i} art={art} />;
            })}
          </div>
        </div>

        <Quote></Quote>

        <AboutUs></AboutUs>

        <Contact></Contact>

        <Footer></Footer>

      </Layout>
    );
  }
}

module.exports = Index;