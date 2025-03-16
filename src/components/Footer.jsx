const Footer = () => {

    const datas = [
        { id: 1, icon: '/icons/00.png', title: 'Midnight Coffee', description: 'Explore Midnight Coffee Online! Stay connected with us through our website, where you can learn about our unique brews, sustainability advocacy, and exclusive items. Click the link to explore more and share the love of coffee and sustainability!' },
        { id: 2, icon: '/icons/tempImagedUEfIm.png', title: 'Future Begins After Midnight', description: 'Join the movement on Facebook! ♻️☕ Stay up to date on Future Begins After Midnight, our campaign to upcycle coffee grounds and promote sustainability. Follow us for updates, eco-friendly suggestions, and ways to help the cause. Share the link and take part in the change! ' }
    ]

    return (
        <footer className="my-10 flex justify-center">
            <div className="w-[80%]">
                <h1 className="heading-color font-semibold text-4xl">Social Media</h1> 
                <div className="grid grid-cols-2 gap-10 mt-8">
                    { datas.map(data => (
                        <div key={data.id} className="flex flex-col">
                            <img className="h-[32px] w-[32px] self-start" src={data.icon} alt={data.title} />
                            <h2 className="font-semibold">{data.title}</h2>
                            <p className="mt-3 text-gray-500">{data.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </footer>
    )
}

export default Footer;