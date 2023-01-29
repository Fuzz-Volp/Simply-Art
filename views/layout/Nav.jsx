const React = require("react");

class Nav extends React.Component {
    render() {
        return(
            <nav className='flex flex-row justify-center items-center h-32 mb-11 w-full'>
                <div className="flex justify-start w-1/2 ml-36">
                    <h3 className="text-2xl">Simply Art</h3> 
                </div>
                <div className="flex justify-end w-1/2 mr-12 text-xl">
                    <a href="/arts" className="px-2">home</a>
                    <a href="/arts/about" className="px-2">about</a>
                    <a href="arts/new" className="px-2">create</a>
                    <a href="/arts/show" className="px-2">shop</a>
                    <a href="#" className="px-2">cart</a>
                    <a href="/user/login" className="pl-10">Login/</a>
                    <a href="/user/logout" className="">Logout</a>
                </div>
            </nav>
        )
    }
}

module.exports = Nav