const React = require('react');
const Layout = require('../layout/Default');
const Footer = require('../layout/Footer');
const Nav = require('../layout/Nav');

class About extends React.Component {
    render() {

        return(
            <Layout>
                <Nav></Nav>
                <main>some text</main>
                <Footer></Footer>
            </Layout>
        )
    }
} 

module.exports = About;