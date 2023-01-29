const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");
const Button = require("../layout/Button");
const Footer = require("../layout/Footer");
const Spacer = require("../layout/Spacer");


class Show extends React.Component {
  render() {
    const { art } = this.props;
    const { _id, name, description, price } = art;

    // Alternative syntax
    // const {art} = this.props

    return (
      <Layout>
        <Nav></Nav>

        <h1 className="text-5xl mb-60">{name}</h1>

        <p className="text-lg">
          {description} 
        </p>

        <p className="flex justify-center text-lg m-10">
          {price}
        </p>

        <img src="" alt="" sizes=""/>
        <Button>
          <form action={`/arts/${_id}/edit`} method="GET">
            <input type="submit" value="UPDATE"  className="cursor-pointer"/>
          </form>
        </Button>

        <Button>
          <a href="/arts/cart" className="cursor-pointer">Add To Cart</a>
        </Button>

        <Spacer></Spacer>

       <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = Show;