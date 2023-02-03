const React = require("react");
const Button = require("../layout/Button");
const Layout = require("../layout/Layout");
const Footer = require("../layout/Footer");
const Nav = require("../layout/Nav");
const Spacer = require("../layout/Spacer");

class Edit extends React.Component {
  render() {
    const { art } = this.props;
    const { _id, name, description, price, image } = art;

    return (
      <Layout title={`Edit ${name}`} className="hidden">
        <Nav/>
        <div className="flex flex-col justify-center">
          <form action={`/arts/${_id}?_method=PUT`} method="POST" className="w-1/2 h-1/2 rounded-md">
            <input type="text" name="name" placeholder="name" defaultValue={name} className="my-2 bg-transparent border-b-4 focus:outline-none "/>
            <br />
            <input type="text" name="description" placeholder="description" defaultValue={description} className="my-2 h-24 w- place-content-start bg-transparent border-b-4 focus:outline-none"/>
            <br />
            <input type="text" name="price" placeholder="price" defaultValue={price}  className="my-2 bg-transparent border-b-4 focus:outline-none"/>
            <br />
            <input type="text" name="image" placeholder="artwork" defaultValue={image} className="my-2 mb-2 bg-transparent border-b-4 focus:outline-none w-48"/>
            <br />

            <Button>
              <input type="submit" value="Submit Changes" className="cursor-pointer my-2"/>
            </Button>
            
          </form>
        </div>
          

        <Spacer/>

        <Footer/>
      </Layout>
    );
  }
}

module.exports = Edit;