const React = require('react');

// Higher Order Component (Takes in Children)
class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;