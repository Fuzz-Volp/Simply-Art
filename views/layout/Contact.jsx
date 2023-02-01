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
                            <input type="text" name="name" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="name"/>
                        </div>
                        <div>
                            <input type="text" name="email" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="email"/>
                        </div>
                    </span>
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="px-2">
                            <input type="number" name="phone" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="number"/>
                        </div>
                        <div>
                            <input type="text" name="address" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="address"/>
                        </div>
                    </span>
                    <div className="p-2 w-96 underline-offset-auto">
                         <input type="text" name="subject" value="" className="w-full bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="subject"/>
                    </div>
                    <div className="flex p-2 w-96 h-36 ">
                         <input type="text" name="message" value="" className="w-full h-full bg-gray-100 bg-transparent border-b-4 focus:outline-none" placeholder="message"/>
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