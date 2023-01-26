const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

class New extends React.Component {
    render() {
        return (
            <Layout>
               <Nav></Nav>
               <h1>New Fruit page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/arts" method="POST">
                Name: <input type="text" name="name" />
                <br />
                Description: <input type="text" name="description" />
                <br />
                price: <input type="number" name="price" />
                <br />
                <input type="image" name="" />
                <br />
                <input type="submit" name="" value="Create Art" />
                </form>
            </Layout>
        )
    }
}