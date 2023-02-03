const React = require('react');
const Contact = require('../layout/Contact');
const Layout = require('../layout/Layout');
const Footer = require('../layout/Footer');
const Nav = require('../layout/Nav');
const Spacer = require('../layout/Spacer');

class About extends React.Component {
    render() {

        return(
            <Layout title="about">
                <Nav/>
                <main>
                    <div className='flex flex-col items-center justify-center bg-gray-100 rounded-md w-96 p-2 my-10'>
                        <img 
                            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56596572_1912345435559779_3949594093666959360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3_NBgq1anLwAX_0B0lI&_nc_ht=scontent-sea1-1.xx&oh=00_AfA9N6xb-3ehOxmQScDjeUj3BaTxz0HFYSXIMEaCnWxTQQ&oe=6402BDC4" 
                            alt="artist female black hair"  
                            className='h-1/2 rounded-md drop-shadow-md'
                        />
                        <h3 className='text-3xl my-2'>
                            Elizabeth Volpitta
                        </h3>
                        <p className='text-xl mt-2'>
                             Elizabeth is an accomplished artist, creating a broad range of work. She specializes in wildlife and landscape art, typically incorporating farm animals in her work having grown up on a farm. She also illustrates childrens books and has been for three years.
                        </p>
                    </div>
                    <div>

                    </div>
                </main>
                <Spacer/>
                <Contact/>
                <Footer/>
            </Layout>
        )
    }
} 

module.exports = About;