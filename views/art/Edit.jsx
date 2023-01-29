const React = require("react");
const Button = require("../layout/Button");
const Layout = require("../layout/Default");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");

class Edit extends React.Component {
  render() {
    const { art } = this.props;
    const { _id, image, name, description, price } = art;

    return (
      <Layout title={`${name} Edit Page`}>
        <Nav></Nav>

        <form action={`/arts/${_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          Description: <input type="text" name="description" defaultValue={description} />
          <br />
          Price: <input type="text" name="price" defaultValue={price} />
          <br />
          Artwork:
          <input type="image" src="" alt="" />
          <br />
          <Button>
            <input type="submit" value="Submit Changes" className="cursor-pointer"/>
          </Button>
          <Button>
          <form action={`/arts/${art._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" className="cursor-pointer"/>
          </form>
          </Button>
        </form>

        <Spacer></Spacer>

        <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = Edit;