
const Footer = () =>
{
    return (
        <>
            <div className="pt-6 bg-black"></div>            
                <div className="w-full bg-black font-poppins text-white h-64 px-24 md:px-48">
                    <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <h1>Sign Up To Our Newsletter</h1>
                                <p className="text-xs font-extralight">Be the first to hear about the latest offers.</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="bg-black border-x border-y rounded-sm font-light pl-2 text-xs p-1 w-96" type="text" placeholder="Your Email" />
                                <button className="text-sm bg-blue-600 rounded-3xl w-32 p-2">Subscribe</button>
                            </div>
                    </div>
                    <div className="py-6"></div>
                    <div className="flex flex-row justify-between text-sm text-gray-500">
                        <p>Information</p>
                        <p>PC Parts</p>
                        <p>Desktop PCs</p>
                        <p>Laptops</p>
                        <p>Address</p>
                    </div>
                    <div>
                        <div>
                     
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>        
        </>
    )
}

export default Footer;