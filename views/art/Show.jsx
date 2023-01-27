const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

class Show extends React.Component {
  render() {
    const { art } = this.props;
    const { name, description, price, image } = art;

    // Alternative syntax
    // const {art} = this.props

    return (
      <Layout>
        <Nav></Nav>
        <h1>arts show page</h1>
        <nav>
          <a href="/arts">Back</a>
        </nav>
        {name} {" - "}
        {description} 
        {price}
        {image}
        <form action={`/arts/${art._id}/edit`} method="GET">
          <input type="submit" value="UPDATE" />
        </form>
      </Layout>
    );
  }
}

module.exports = Show;