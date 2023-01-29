const React = require("react");

class Background extends React.Component {
    render() {
        const { children } = this.props;

        return <body className="flex flex-col justify-center items-center bg-stone-500 w-screen h-full drop-shadow-md">{children}</body>
    };
};


module.exports = Background;