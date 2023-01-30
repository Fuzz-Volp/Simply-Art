const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");
const Button = require("../layout/Button");
const Footer = require("../layout/Footer");
const Spacer = require("../layout/Spacer");


class Show extends React.Component {
  render() {
    const { art } = this.props;
    const { _id, name, description, price, image } = art;

    // Alternative syntax
    // const {art} = this.props

    return (
      <Layout>
        <Nav></Nav>

        <div className="">
          
          <h1 className="text-5xl mb-60 flex justify-center">
            {name}
          </h1>

          <div>
          <img src={image} width={300} height={300} />
          </div>

          <p className="text-lg flex justify-center">
            {description} 
          </p>

          <p className="flex justify-center text-lg m-10">
            {price}
          </p>

          <Button>
            <form action={`/arts/${_id}/edit`} method="GET">
              <input type="submit" value="UPDATE"  className="cursor-pointer"/>
            </form>
          </Button>

          <Button>
            <form action={`/arts/${art._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE" className="cursor-pointer"/>
            </form>
          </Button>

          <Button>
            <a href="/arts/cart" className="cursor-pointer">Add To Cart</a>
          </Button>

        </div>

        

        <Spacer></Spacer>

       <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = Show;