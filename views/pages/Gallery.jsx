const React = require("react");
const Footer = require("../layout/Footer");
const Layout = require("../layout/Layout");
const Nav = require("../layout/Nav");
const ArtPost = require("../layout/ArtPost");

class Gallery extends React.Component {
    render() {
        const { arts } = this.props

        return (
           <Layout>
                <Nav/>
                <div className="flex flex-row">
                    

                        {arts.map((art, i) => {
                            return <ArtPost key={i} art={art} />;
                        })}
                   
                  
                </div>
                <Footer/>
           </Layout>
        )
    };
};


module.exports = Gallery;