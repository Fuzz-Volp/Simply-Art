const React = require('react');

class GalleryPost extends React.Component {
    render() {
        const { art } = this.props;
        const { _id, price, image, name } = art

        return(

            <div className='bg-gray-100 rounded-md drop-shadow-md mx-12 my-12 '>               
                <a href={`/arts/${_id}`} className="">
                   <div className='flex flex-col items-center h-96 w-96'>
                        <img src={image} alt={name}  className="rounded-md h-80 w-80"/>
                    
                        <p className='mt-2'>
                            {price}
                        </p>
                   </div>
                </a>
            </div>
        );
    }
}

module.exports = GalleryPost;