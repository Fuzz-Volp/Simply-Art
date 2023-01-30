const React = require('react');
const Contact = require('../layout/Contact');
const Layout = require('../layout/Default');
const Footer = require('../layout/Footer');
const Nav = require('../layout/Nav');

class About extends React.Component {
    render() {

        return(
            <Layout>
                <Nav></Nav>
                <main>some text</main>
                <Contact></Contact>
                <Footer></Footer>
            </Layout>
        )
    }
} 

module.exports = About;