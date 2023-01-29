const React = require('react');

class ArtPost extends React.Component {
    render() {
        const { art } = this.props;
        const { _id, name, description, price, image } = art

        return(

            <div className='bg-gray-300 rounded-md mx-12'>
                
                <a href={`/arts/${_id}`}
                >
                    <p>
                        {image}
                    </p>
                    <h5>
                       {name} 
                    </h5>
                    <p>
                        {description}
                    </p>
                    <p>
                        {price}
                    </p>
                </a>
            </div>
        );
    }
}

module.exports = ArtPost;