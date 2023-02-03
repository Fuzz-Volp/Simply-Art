const React = require("react");
const Button = require("./Button");

class Contact extends React.Component {
    render() {

        return(
            <div className=" w-full h-96 flex flex-row justify-center items-center drop-shadow-md">
                <div className="mr-80 ml-56">
                    <h1 className="text-5xl my-10">Contact Us</h1>
                    <p className="my-2 text-xl">
                        <a href="mailto:gmail.com">johnvolpitta@gmail.com</a>
                    </p>
                    <p className="my-2 text-xl">
                        (254) 488-1605
                    </p>
                </div>
                <div className="flex flex-col items-center text-gray-400 bg-gray-100 rounded">
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="px-2">
                            <input type="text" name="name" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="name"/>
                        </div>
                        <div>
                            <input type="text" name="email" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="email"/>
                        </div>
                    </span>
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="px-2">
                            <input type="number" name="phone" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="number"/>
                        </div>
                        <div>
                            <input type="text" name="address" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="address"/>
                        </div>
                    </span>
                    <div className="p-2 w-full underline-offset-auto">
                         <input type="text" name="subject" value="" className="w-full bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="subject"/>
                    </div>
                    <div className="flex p-2 w-full h-36 ">
                         <input type="text" name="message" value="" className="w-full h-full bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="message"/>
                    </div>

                    <Button>
                        <input type="button" value="submit" className="cursor-pointer"/>
                    </Button>
                    <div className="m-2 text-xl">
                        <p className="">Thank you for submitting!</p>
                    </div>
                </div>
            </div>
        )
    }
} 

module.exports = Contact;