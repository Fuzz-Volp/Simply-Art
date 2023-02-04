const React = require("react");
const Footer = require("../layout/Footer");
const Layout = require("../layout/Layout");
const Nav = require("../layout/Nav");
const GalleryPost = require("../components/GalleryPost");


class Gallery extends React.Component {
    render() {
        const { arts } = this.props

        return (
           <Layout title="gallery">
                <Nav/>
                <h1 className="text-5xl my-28 mx-auto border-b-4">Gallery</h1>
                <div className="flex flex-row grid grid-cols-3">
                    

                        {arts.map((art, i) => {
                            return <GalleryPost key={i} art={art} />;
                        })}
                   
                  
                </div>
                <Footer/>
           </Layout>
        )
    };
};


module.exports = Gallery;