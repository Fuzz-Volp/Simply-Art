const React = require('react');
const Background = require('../layout/Background');

// Higher Order Component (Takes in Children)
class Opacity extends React.Component {
    render() {
        return (
            <html>
                <Background>
                    <div className='flex flex-col justify-center items-center drop-shadow-md opacity-25 w-full max-h-screen'>
                        <h1 className='hidden'>{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </Background>
            </html>
        )
    }
}

module.exports = Opacity;