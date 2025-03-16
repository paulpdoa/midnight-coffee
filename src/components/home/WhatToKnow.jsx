const WhatToKnow = () => {

    const products = [
        { id: 1, photo: '/home/tempImageQ58vOQ.png', title: 'SPENT COFFEE GROUNDS USES', description: 'Coffee grounds can be repurposed into compost, cosmetics, odor neutralizers, and other products. Click to learn more!'},
        { id: 2, photo: '/home/tempImageUG0INw.png', title: "UPCYCLING (SCG's)", description: 'Spent coffee grounds can be upcycled into sustainable paper. Click to learn more!'},
        { id: 3, photo: '/home/IMG_5767.png', title: 'EXCLUSIVE MERCHANDISE', description: 'Support sustainability with our exclusive Midnight Coffee merchandise. Shop now!'},
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="w-[80%]">
                <h1 className="heading-color font-bold text-4xl">What to know:</h1>
                <div className="grid grid-cols-3 gap-6 mt-5">
                    { products.map(product => (
                        <div key={product.id}>
                            <img src={product.photo} alt={product.title} />
                            <div className="mt-3">
                                <h2 className="font-semibold">{product.title}</h2>
                                <p className="text-gray-500">{product.description}</p>
                            </div>
                        </div>
                    )) } 
                </div>
            </div>
        </section>
    )
}

export default WhatToKnow