const React = require('react');

class ArtPost extends React.Component {
    render() {
        const { art } = this.props;
        const { _id, price, image, name } = art

        return(

            <div className='flex justify-center bg-gray-100 rounded-md drop-shadow-md mx-12'>
                
                <a href={`/arts/${_id}`}>
                   <div className='flex flex-col items-center h-52 w-52 mt-4'>
                        <img src={image} alt={name}  className="rounded-md h-44 w-44"/>
                    
                        <p className='mt-2'>
                            {price}
                    </p>

                   </div>
                </a>
            </div>
        );
    }
}

module.exports = ArtPost;