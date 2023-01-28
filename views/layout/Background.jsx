const React = require("react");

class Background extends React.Component {
    render() {
        const { children } = this.props;

        return <body className="flex flex-col justify-center items-center bg-gray-400">{children}</body>
    };
};


module.exports = Background;