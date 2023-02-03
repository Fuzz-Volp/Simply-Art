const React = require("react");
const Button = require("../components/Button");

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
                <form action="/contact" method="post" className="flex flex-col justify-start text-gray-400 bg-gray-100 rounded">
                    <span className="flex flex-row p-2 underline-offset-auto">
                        <div className="pr-2">
                            <input type="text" name="name" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="name" required/>
                        </div>
                        <div>
                            <input type="number" name="phone" value="" className="bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="number"  required/>
                        </div>
                    </span>
                    
                    <div className="px-2 underline-offset-auto">
                        <input type="text" name="email" value="" className="w-full bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="email" required/>
                    </div>
                       
                    <div className="px-2 underline-offset-auto">
                         <input type="text" name="subject" value="" className="w-full bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="subject"/>
                    </div>
                    <div className="p-2 w-full h-36">
                         <textarea type="text" name="message" value="" className="w-full h-full bg-gray-100 bg-transparent border-b-4 focus:outline-none text-2xl" placeholder="your message"/>
                    </div>

                    <Button>
                        <input type="button" value="submit" className="cursor-pointer" placeholder="submit" ></input>
                        
                    </Button>
                    <div className="m-2 text-xl mx-auto">
                        <p className="">Thank you for submitting!</p>
                    </div>
                </form>
            </div>
        )
    }
} 

module.exports = Contact;