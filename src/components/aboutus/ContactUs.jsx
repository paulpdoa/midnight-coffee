import BackBtn from "../BackBtn"

const ContactUs = () => {
    return (
        <section className="flex justify-center my-10 md:-mt-16 mt-9">
            <div className="md:w-[80%] w-full">
                <h1 className="heading-color font-semibold text-4xl">Contact Us</h1>
                <form className="md:w-1/2 w-full flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col items-center justify-around gap-2">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-sm" htmlFor="first name">First name</label>
                            <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="James" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-sm" htmlFor="last name">Last name</label>
                            <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Richer" />
                        </div>
                    </div>
                    <div className="flex items-center justify-around gap-2">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-sm" htmlFor="email address">Email address</label>
                            <input className="border border-gray-300 rounded-md p-2" type="email" placeholder="email@Jamesricher.net" />
                        </div>
                    </div>
                    <div className="flex items-center justify-around gap-2">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-sm" htmlFor="message">Your message</label>
                            <textarea className="border border-gray-300 rounded-md p-2" cols="30" rows="5" placeholder="Enter your question or message"></textarea>
                        </div>
                    </div>
                    <button className="button-color rounded-md p-2 text-white">Submit</button>
                </form>
                <div className="flex items-center gap-2 justify-end md:mt-0 mt-5">
                    <BackBtn path='/product' />
                </div>
            </div>
        </section>
    )
}

export default ContactUs