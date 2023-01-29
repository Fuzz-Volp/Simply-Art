const React = require("react");

class Welcome extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="">
                <span className="flex flex-row">
                    <div className="flex flex-col justify-center mx-96">
                        <h1 className="text-6xl my-3 w-72">Welcome to Simply Art</h1>
                        <h4 className="">Choose Your Art</h4>
                    </div>
                    <div className="">
                        <img src="https://www.yukon-news.com/wp-content/uploads/2018/06/12330624_web1_180615_YKN_FRONT_arts_Created_at_the_canyon2WEB.jpg" alt="Outdoor Drawing" className="drop-shadow-lg"/>
                    </div>
                </span>
            </div>
        )
    };
};


module.exports = Welcome;