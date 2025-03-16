import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

const Merch = () => {

    const products = [
        { id: 1, title: 'Midnight Shirt V1', photo: '/product/IMG_5767.png', price: '₱ 450', description: 'Embrace the night in style with our Midnight Shirt V1. Comfortable, sleek, and perfect for any occasion.' },
        { id: 2, title: 'Midnight Tumbler', photo: '/product/Untitled_Artwork 6 1.png', price: '₱ 550', description: 'Keep your drinks at the perfect temperature with the Midnight Tumbler. Durable, stylish, and ready for any adventure.' },
        { id: 3, title: 'Midnight Tote Bag', photo: '/product/IMG_5769 1.png', price: '₱ 400', description: 'Keep your drinks at the perfect temperature with the Midnight Tumbler. Durable, stylish, and ready for any adventure.' },
        { id: 4, title: 'Midnight Arabica Beans', photo: '/product/tempImagetCwJ8h 1.png', price: '₱ 500', description: 'Keep your drinks at the perfect temperature with the Midnight Tumbler. Durable, stylish, and ready for any adventure.' }
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="w-[80%] z-50">
                <h1 className="heading-color font-bold text-3xl">Exclusive Merchandise</h1>
                <div className="my-16">
                    { products.map(product => (
                        <div key={product.id} className="flex justify-between items-center">
                            <img className={`object-fit w-1/3 ${product.id % 2 == 0 ? 'order-last' : 'order-first'}`} src={product.photo} alt={product.title} />
                            <div className="flex flex-col gap-5 w-1/2">
                                <h2 className="heading-color text-2xl font-semibold">{product.title}</h2>
                                <span className="text-sm">{product.price}</span>
                                <p className="text-gray-500">{product.description}</p>                        
                            </div>
                        </div>
                    )) }
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <BackBtn path='/scg' />
                    <NextBtn path='/about-us' />
                </div>
            </div>
            <img className="absolute -left-5 object-fit top-[1200px]" src="/Group 2 (4).png" alt="" />
            <img className="absolute right-0 object-fit top-[2000px]" src="/Group 2 (1).png" alt="" />
        </section>
    )
  
}

export default Merch;