const React = require("react");

class Nav extends React.Component {
    render() {
        return(
            <nav className='flex flex-row justify-end'>
                <h3 className="mx-">Simply Art</h3> 
                <div className="">
                    <a href="/arts" className="px-2">home</a>
                    <a href="#" className="px-2">about</a>
                    <a href="#" className="px-2">artists</a>
                    <a href="#" className="px-2">shop</a>
                    <a href="#" className="px-2">contact</a>
                    <a href="#" className="px-2">cart</a>
                    <a href="/user/login" className="px-10">Login</a>
                </div>
            </nav>
        )
    }
}

module.exports = Nav