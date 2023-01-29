const React = require("react");

class Contact extends React.Component {
    render() {

        return(
            <div className=" w-full h-96 flex flex-row justify-center items-center drop-shadow-md">
                <div className="mr-96">
                    <h1 className="text-2xl my-10">Contact Us</h1>
                    <p className="my-2">
                        <a href="mailto:gmail.com">johnvolpitta@gmail.com</a>
                    </p>
                    <p className="my-2">
                        2544881605
                    </p>
                </div>
                <div className="flex flex-col items-center ml-96 text-gray-400 bg-gray-100">
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="px-2">
                            <input type="text" name="name" value="name" className="bg-gray-100" />
                        </div>
                        <div>
                            <input type="text" name="email" value="email" className="bg-gray-100" />
                        </div>
                    </span>
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="px-2">
                            <input type="number" name="phone" value="phone" className="bg-gray-100" />
                        </div>
                        <div>
                            <input type="text" name="address" value="address" className="bg-gray-100"/>
                        </div>
                    </span>
                    <div className="p-2 w-96 underline-offset-auto">
                         <input type="text" name="subject" value="subject" className="w-full bg-gray-100"/>
                    </div>
                    <div className="flex p-2 w-96 h-36 underline-offset-auto">
                         <input type="text" name="message" value="message" className="w-full h-full bg-gray-100"/>
                    </div>

                    <div className="m-2 text-xl text-white bg-gray-300 rounded-md w-20 flex justify-center cursor-pointer">
                        <input type="button" value="submit" className="cursor-pointer"/>
                    </div>
                    <div className="m-2 text-xl">
                        <p className="">Thank you for submitting!</p>
                    </div>
                </div>
            </div>
        )
    }
} 

module.exports = Contact;