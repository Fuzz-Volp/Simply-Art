const React = require("react");
const Button = require("./Button");

class AboutUs extends React.Component {
    render() {

        return (
            <main className="bg-gray-200 mt-36 drop-shadow-md w-full">
                <div className="flex justify-center m-12 relative drop-shadow-md ">
                    <img src="https://i.imgur.com/tE6w5a9.jpg" alt="" className="z-0 object-fill w-5/6 h-96"/>
                    <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        About Us
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col justify-center items-center mt-20">
                    <h3 className="text-3xl">
                        The Online Gallery For Stunning Art
                    </h3>
                    <p className="text-xl my-20">
                        We are a small group of dedicated artists, entrepreneurs and developers here to help you buy and sell art. Founded recently, we've helped out many looking to buy quality art from up and coming artists. If you are looking to buy original art, look no further! If you are looking to sell you originals on a well developed and broad reaching page like ours then sign up with us!
                    </p>
                    <Button>  
                        <a href="/arts/about">
                            Meet Our Artists!
                        </a>
                    </Button>
                </div>
            </main>
        )
    };
};


module.exports = AboutUs;