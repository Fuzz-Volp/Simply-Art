const React = require("react");

class Button extends React.Component {
    render() {
        const { children } = this.props;

        return(
           <button className="bg-gray-300 rounded w-36 m-2">
                {children}
           </button>
        )
    }
}

module.exports = Button;