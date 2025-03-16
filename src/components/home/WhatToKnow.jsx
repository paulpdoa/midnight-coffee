const WhatToKnow = () => {

    const products = [
        { id: 1, photo: '/home/tempImageQ58vOQ.png', title: 'SPENT COFFEE GROUNDS USES', description: 'Coffee grounds can be repurposed into compost, cosmetics, odor neutralizers, and other products. Click to learn more!'},
        { id: 2, photo: '/home/tempImageUG0INw.png', title: "UPCYCLING (SCG's)", description: 'Spent coffee grounds can be upcycled into sustainable paper. Click to learn more!'},
        { id: 3, photo: '/home/IMG_5767.png', title: 'EXCLUSIVE MERCHANDISE', description: 'Support sustainability with our exclusive Midnight Coffee merchandise. Shop now!'},
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="md:w-[80%] w-full">
                <h1 className="heading-color font-bold md:text-4xl text-2xl">What to know:</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                    { products.map(product => (
                        <div className="grid grid-cols-2 md:flex md:flex-col md:flex-wrap md:gap-0 gap-2" key={product.id}>
                            <img className="md:w-full w-auto object-fit" src={product.photo} alt={product.title} />
                            <div className="md:mt-3 mt-0">
                                <h2 className="font-semibold text-sm md:text-base">{product.title}</h2>
                                <p className="text-gray-500 md:text-base text-sm">{product.description}</p>
                            </div>
                        </div>
                    )) } 
                </div>
            </div>
        </section>
    )
}

export default WhatToKnow