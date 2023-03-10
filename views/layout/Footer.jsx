const React = require("react")

class Footer extends React.Component {
    render() {

        return(
            <footer className="h-96 flex flex-col items-center justify-center">
                <div className="text-xl">Simply Art</div>
                <div>
                    <a href="mailto:johnvolpitta@gmail.com">johnvolpitta@gmail.com</a>
                </div>
                <div className="mt-16">
                    2023 by Simply Art. 
                </div>
            </footer>
        )
    }
}

module.exports = Footer;