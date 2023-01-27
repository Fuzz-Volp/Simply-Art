const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

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
          <input type="image" src={image} alt={name} />
          <br />
          <form action={`/arts/${art._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;