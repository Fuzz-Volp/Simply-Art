const React = require("react");

class Button extends React.Component {
    render() {
        const { children } = this.props;

        return(
           <button className="bg-gray-400 hover:bg-gray-500 text-white rounded w-36 my-4 py-2 mx-auto">
                {children}
           </button>
        )
    }
}

module.exports = Button;