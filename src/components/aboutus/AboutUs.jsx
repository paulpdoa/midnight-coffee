const AboutUs = () => {

    const paragraphs = [
        { id: 1, description: "Welcome to Midnight Coffee PH, where we believe that coffee is more than just a beverage—it's a catalyst for inspiration and community empowerment. Located in 1039 G. Tolentino St., Sampaloc, Manila, Philippines 1008, our specialty coffee shop is open daily from 12 p.m. to 3 a.m., providing a haven for night owls, students, professionals, and anybody who seeks a unique coffee experience." },
        { id: 2, description: 'Our mission extends beyond providing outstanding coffee; we hope to inspire and empower individuals and communities through our passion for the craft of coffee. Embracing the phrase "It is more than just coffee," we create an environment that encourages creativity, connection, and sustainability.' },
        { id: 3, description: "Whether you're looking for a peaceful space to study, an inviting spot to catch up with friends, or just a cup of meticulously brewed coffee, Midnight Coffee welcomes you to join a community where every cup contributes to a bigger purpose."}
    ]

    return (
        <section className="my-10 flex justify-center mb-0">
            <div className="md:w-[80%] w-full grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-3">
                <div className="my-5">
                    <h1 className="heading-color font-bold md:text-5xl text-3xl">About us</h1>
                    <div className="md:my-20 my-5">
                    { paragraphs.map(paragraph => (
                        <div key={paragraph.id} className="mt-4">
                            <p className="mt-1 font-semibold text-justify md:text-base text-sm">{paragraph.description}</p>
                        </div>
                    )) }
                    </div>
                </div>
                <img className="md:h-[80%] h-auto object-fit w-full" src="/about/Image (3).png" alt="About" />
            </div>
        </section>
    )
}

export default AboutUs