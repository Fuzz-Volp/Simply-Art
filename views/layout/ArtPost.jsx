const React = require('react');

class ArtPost extends React.Component {
    render() {
        const { art } = this.props;
        const { _id, name, description, price, image } = art

        return(
            <div>
                <a href={`/arts/${_id}`}
                >
                    <h5>
                       {name} 
                    </h5>
                    <p>
                        {description}
                    </p>
                    <p>
                        {price}
                    </p>
                    <p>
                        {image}
                    </p>
                </a>
            </div>
        );
    }
}

module.exports = ArtPost;