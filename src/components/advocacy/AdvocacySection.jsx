const AdvocacySection = () => {
    return (
        <section className="my-10 flex justify-center">
            <div className="md:w-[80%] w-full">
               <div>
                    <h1 className="heading-color font-bold md:text-5xl text-3xl">Advocacy</h1>
                    <p className="text-justify md:text-base text-sm mt-5">Midnight Coffee advocates for the upcycling of used coffee grounds to reduce environmental impact and promote sustainability. Our website raises awareness of innovative methods to repurpose used coffee grounds, transforming waste into valuable resources. Join us in making each cup count towards a greener future!</p>
                    <img className="mt-4" src="/advocacy/Image.png" alt="Future Begins After Midnight" />
               </div>

               <div className="flex flex-col gap-5 mt-5">
                    <div>
                        <h2 className="font-semibold">Brews-Ko Po: Advocating for Upcycling Used Coffee Grounds Through a Website for Midnight Coffee’s Brand Awareness</h2>
                        <p className="text-justify mt-4 md:text-base text-sm">At Midnight Coffee, we believe that each cup of coffee serves a purpose that transcends beyond its last sip. Our advocacy campaign, "Future Begins, After Midnight," aims to raise awareness about the possibilities for upcycling used coffee grounds (SCG) to minimize waste and contribute to a more sustainable future. We hope that our website will educate, inspire, and motivate coffee lovers to view leftover coffee grounds as a valuable resource that can be recycled in innovative and environmentally beneficial ways.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Why Upcycling Coffee Grounds Matters</h2>
                        <p className="text-justify mt-4 md:text-base text-sm">The global coffee industry produces millions of tons of wasted coffee grounds each year, the majority of which end up in landfills, adding to environmental damage and greenhouse gas emissions. However, coffee grounds are high in nutrients and natural qualities, making them ideal for upcycling into sustainable goods such as compost, fertilizer, natural exfoliants, biofuels, and even eco-friendly paper and packaging materials. By reusing coffee waste, we assist to prevent landfill accumulation, lower carbon footprints, and encourage a circular economy in which resources are continuously repurposed.</p>
                    </div>
               </div>

               <div className="grid grid-cols-2 mt-5 gap-5">
                    <img src="/advocacy/WEB2.png" alt="WEB2" />
                    <img src="/advocacy/Image (1).png" alt="Image (1)" />
               </div>

                <div className="flex flex-col gap-5 mt-5">
                    <div>
                        <h2 className="font-semibold">Our Mission Through the Website.</h2>
                        <p className="text-justify mt-4 md:text-base text-sm">Our website provides a platform for informing and inspiring individuals, businesses, and communities about every possibility of coffee upcycling. We offer insights into the benefits of repurposing coffee grounds, explain practical projects for DIY, and highlight cooperation with environmentally conscious companies.   By raising awareness of these efforts, we seek to foster a culture of conscious consumption in which sustainability is an important part of every coffee experience.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Be A Part Of the Change</h2>
                        <p className="text-justify mt-4 md:text-base text-sm">Sustainability begins with minor decisions, and through our advocacy, we encourage coffee consumers, environmentally concerned people and businesses to reconsider waste and embrace upcycling. Every effort, whether it's supporting sustainable practices, finding inventive methods to reuse coffee grounds, or simply raising awareness, helps to create a greener future—one that begins after midnight.</p>
                        <p className="mt-6">Join us in making coffee more than just a drink—it’s a step toward sustainability. Let’s brew a better future, together!</p>
                    </div>
               </div>
            </div>
            <img className="absolute right-0 object-fit top-0" src="/Group 2 (1).png" alt="" />
            <img className="absolute left-0 object-fit top-0" src="/Group 2 (2).png" alt="" />
        </section>
    )
}

export default AdvocacySection;