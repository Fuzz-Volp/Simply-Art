const React = require("react");

class Nav extends React.Component {
    render() {
        return(
            <nav className='flex flex-row justify-center items-center h-32 mb-11 w-full'>
                <div className="flex justify-start w-1/2 ml-36">
                    <h3 className="text-3xl">Simply Art</h3> 
                </div>
                <div className="flex justify-end w-1/2 mr-12 text-2xl">
                    <a href="/arts" className="px-2 border-b-4">home</a>
                    <a href="/arts/about" className="px-2 border-b-4">about</a>
                    <a href="/arts/new" className="px-2 border-b-4">post</a>
                    <a href="/arts/gallery" className="px-2 border-b-4">gallery</a>
                    <a href="#" className="px-2 border-b-4">cart</a>
                    <a href="/user/login" className="pl-10 border-b-4">Login/</a>
                    <a href="/user/logout" className="border-b-4">Logout</a>
                </div>
            </nav>
        )
    }
}

module.exports = Nav