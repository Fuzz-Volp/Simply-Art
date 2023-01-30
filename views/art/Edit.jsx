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
          <input type="text" name="name" placeholder="name" defaultValue={name} />
          <br />

          <input type="text" name="description" placeholder="description" defaultValue={description} className="h-24" />
          <br />
          <input type="text" name="price" placeholder="price" defaultValue={price}  />
          <br />
          <input type="url" name="image" value="" placeholder="artwork" defaultValue={image}/>
          <br />

          <Button>
            <input type="submit" value="Submit Changes" className="cursor-pointer"/>
          </Button>
          
        </form>

        <Spacer></Spacer>

        <Footer></Footer>
      </Layout>
    );
  }
}

module.exports = Edit;