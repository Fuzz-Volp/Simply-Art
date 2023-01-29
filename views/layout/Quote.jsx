const React = require('react');

class Quote extends React.Component {
    render() {

        return(
            <main className='flex flex-row items-center my-36 bg-gray-200 drop-shadow-md w-fit h-5/6'>
                <div>
                    <img src="https://www.oxy.edu/sites/default/files/landing-page/banner-images/art-art-history_main_1440x800.jpg" alt="" className=" w-3/4"/>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl '>
                    “Great things are not done by impulse, but by a series of small things brought together.”
                    </h2>
                    <p className='my-4'>
                        Vincent Van Gogh
                    </p>
                </div>
            </main>
        )
    }
}

module.exports = Quote;