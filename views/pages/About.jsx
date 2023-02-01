const React = require('react');
const Contact = require('../layout/Contact');
const Layout = require('../layout/Layout');
const Footer = require('../layout/Footer');
const Nav = require('../layout/Nav');
const Spacer = require('../layout/Spacer');

class About extends React.Component {
    render() {

        return(
            <Layout>
                <Nav/>
                <main>some text</main>
                <Spacer/>
                <Contact/>
                <Footer/>
            </Layout>
        )
    }
} 

module.exports = About;