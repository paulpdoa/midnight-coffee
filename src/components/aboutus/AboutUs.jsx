const AboutUs = () => {

    const paragraphs = [
        { id: 1, description: "Welcome to Midnight Coffee PH, where we believe that coffee is more than just a beverage—it's a catalyst for inspiration and community empowerment. Located in 1039 G. Tolentino St., Sampaloc, Manila, Philippines 1008, our specialty coffee shop is open daily from 12 p.m. to 3 a.m., providing a haven for night owls, students, professionals, and anybody who seeks a unique coffee experience." },
        { id: 2, description: 'Our mission extends beyond providing outstanding coffee; we hope to inspire and empower individuals and communities through our passion for the craft of coffee. Embracing the phrase "It is more than just coffee," we create an environment that encourages creativity, connection, and sustainability.' },
        { id: 3, description: "Whether you're looking for a peaceful space to study, an inviting spot to catch up with friends, or just a cup of meticulously brewed coffee, Midnight Coffee welcomes you to join a community where every cup contributes to a bigger purpose."}
    ]

    return (
        <section className="my-10 flex justify-center mb-0">
            <div className="w-[80%] grid grid-cols-2 gap-24">
                <div className="my-5">
                    <h1 className="heading-color font-bold text-5xl">About us</h1>
                    <div className="my-20">
                    { paragraphs.map(paragraph => (
                        <div key={paragraph.id} className="mt-4">
                            <p className="mt-1 font-semibold text-justify">{paragraph.description}</p>
                        </div>
                    )) }
                    </div>
                </div>
                <img className="h-[80%] w-full" src="/about/Image (3).png" alt="About" />
            </div>
        </section>
    )
}

export default AboutUs