const React = require("react");

class Nav extends React.Component {
    render() {
        return(
            <nav className=''>
            <h3>Simply Art</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">artists</a>
            <a href="#">shop</a>
            <a href="#">contact</a>
            <a href="#">cart</a>
            <a href="#">Login</a>
        </nav>
        )
    }
}

module.exports = Nav