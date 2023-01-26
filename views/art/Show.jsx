const React = require("react");
const Layout = require("../layout/Default");
const Nav = require("../layout/Nav");

class Show extends React.Component {
    render() {
        const { art } = this.props

        return (
            <Layout>
                <Nav></Nav>

            </Layout>
        )
    }
}