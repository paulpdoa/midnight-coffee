const OurCoffeeBeans = () => {

    const coffees = [
        { id: 1, title: 'Arabica Coffee Beans', description: 'Arabica beans (Coffea arabica) have a smooth, sweet, and intricate flavor that includes fruity or flowery notes.   Grown at higher altitudes, they contain less caffeine (1.2%) and are renowned for their refined flavor. However, they are more sensitive and require careful cultivation.' },
        { id: 2, title: 'Robusta Coffee Beans', description: 'Robusta beans (Coffea canephora) have a strong, bitter, and earthy flavor with a higher caffeine level (2.2%). They are more resilient when grown at lower altitudes and are often used in espresso and instant coffee due to their strong flavor and thick crema.' }
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="md:w-[80%] w-full grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="my-5">
                    <h1 className="heading-color font-bold md:text-4xl text-2xl">Our Coffee Beans:</h1>
                    <div className="my-5">
                    { coffees.map(coffee => (
                        <div key={coffee.id} className="mt-4">
                            <h2 className="font-bold text-gray-500 md:text-base text-sm">{coffee.title}</h2>
                            <p className="text-gray-400 mt-1 md:text-base text-xs">{coffee.description}</p>
                        </div>
                    )) }
                    </div>
                </div>
                <img src="/home/tempImagezSxcju.png" alt="Our Coffee Beans" />
            </div>
            <img className="absolute right-26 object-fit top-[1300px]" src="/Group 2 (3).png" alt="" />
        </section>
    )
}

export default OurCoffeeBeans