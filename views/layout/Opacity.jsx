const React = require('react');
const Background = require('./Background');

// Higher Order Component (Takes in Children)
class Opacity extends React.Component {
    render() {
        return (
            <html>
                <Background>
                    <div className='flex flex-col justify-center items-center w-11/12 h-11/12 drop-shadow-md bg-gray-300 opacity-25 w-full h-3/4'>
                        <h1 className='hidden'>{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </Background>
            </html>
        )
    }
}

module.exports = Opacity;