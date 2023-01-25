const React = require('react');
const ArtPost = require('../layout/ArtPost');
const Layout = require('../layout/Default');


class Index extends React.Component {
    render() {
        const { arts } = this.props;

        return(
            <Layout title='Home Page'>
                <nav className=''>
                    <h3>Simply Art</h3>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">artists</a>
                    <a href="#">shop</a>
                    <a href="#">contact</a>
                    <a href="#">cart</a>
                    <a href="#">Login</a>
                </nav>
                
                <header>
                    <h1>Welcome to Simply Art</h1>
                    <div>
                    <img src="" alt="" />
                    </div>
                </header>

                <main>
                   {arts.map((art, i) => {
                    return <ArtPost key={i} art={art} />;
                   })}
                </main>

                <footer>
                    <div>Contact us</div>
                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="number" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="button" value="" href="" />
                    </div>
                </footer>
            </Layout>
    
        )

    }
}