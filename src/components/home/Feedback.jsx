import { Link } from "react-router-dom"
import NextBtn from "../NextBtn"

const Feedback = () => {

    const feedbacks = [
        { id: 1, photo: '/home/Avatar.png', comment: 'Just got my free tumbler b...', name: 'Andres W.' },
        { id: 2, photo: '/home/Avatar (1).png', comment: 'Solid ang mga coffee at m...', name: 'Jasper O.' },
        { id: 3, photo: '/home/Avatar (2).png', comment: 'Sure bibili uli, ang ganda n...', name: 'Yuri A.' }
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="md:w-[80%] w-full">
                <div className="flex items-center justify-between">  
                    <h1 className="heading-color font-bold md:text-4xl text-2xl">Feedback</h1>
                    <NextBtn path='/advocacy' />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 relative">
                { feedbacks.map(feedback => (
                    <div key={feedback.id} className="border rounded-md md:p-7 p-4 z-50">
                        <h2 className="font-semibold md:text-2xl text-lg">"{feedback.comment}"</h2>
                        <div className="grid grid-cols-2 items-center my-4">
                            <div className="flex items-center gap-3">
                                <img src={feedback.photo} alt={feedback.name} />
                                <h3 className="font-medium">{feedback.name}</h3>
                            </div>
                            <img className="object-fit" src="/home/tempImageWU7s85 1.png" alt="rating" />
                        </div>
                    </div>
                )) }
                </div>
            </div>
            <img className="absolute -left-5 object-fit top-[2000px]" src="/Group 2 (4).png" alt="" />
        </section>
    )
}

export default Feedback