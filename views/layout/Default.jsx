const React = require('react');
const Background = require('./Background');

// Higher Order Component (Takes in Children)
class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <Background>
                    <main className='flex flex-col justify-center items-center w-11/12 h-11/12 drop-shadow-md bg-gray-100'>
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </main>
                </Background>
            </html>
        )
    }
}

module.exports = Layout;