const React = require("react");
const Footer = require("../layout/Footer");
const Layout = require("../layout/Layout");
const Nav = require("../layout/Nav");
const GalleryPost = require("./GalleryPost");


class Gallery extends React.Component {
    render() {
        const { arts } = this.props

        return (
           <Layout title="gallery">
                <Nav/>
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