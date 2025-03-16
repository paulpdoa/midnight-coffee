const HowItWorks = () => {
    return (
        <section className="flex justify-center mt-[600px]">
            <div className="w-[80%] z-50">
                <h1 className="heading-color font-bold text-3xl">How it works:</h1>
                
                <div className="my-7 font-medium">
                    <h2 className="font-semibold text-2xl">Midnight Coffee Loyalty Card.</h2>
                    <p className="mt-5">Enjoy your favorite brews and get rewarded! Every time you buy a drink at Midnight Coffee you'll be given a loyalty card and your drink will be stickered. Collect 12 stickers to redeem one exclusive Midnight Coffee merchandise of your choice! Best of all, this promotion has no deadline for redemption, allowing you to take your time and enjoy the journey to rewards.</p>
                    <p className="mt-5">Start collecting today!</p>
                </div>

                <div className="bg-base flex items-center justify-center p-7 rounded-md my-5">
                    <p className="text-white text-3xl font-semibold text-center">You can also purchase our exclusive merch at our physical store, where 50% of sales proceeds go towards funding upcycled paper for sustainable use.</p>
                </div>
            </div>
            <img className="absolute right-0 object-fit top-[500px]" src="/Group 2 (1).png" alt="" />
            <img className="absolute right-0 object-fit top-[1000px]" src="/Group 2 (1).png" alt="" />
        </section>
    )
  
}

export default HowItWorks;