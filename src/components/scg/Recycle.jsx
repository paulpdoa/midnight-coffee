import BackBtn from "../BackBtn"
import NextBtn from "../NextBtn"

const Recycle = () => {

    const recycleSteps = [
        { 
            id: 1, 
            title: 'Plant Fertilizers', 
            description: 'Nitrogen, which is abundant in coffee grounds, can be helpful in plant growth.', 
            photo: '/scg/IMG_5757 1.png', 
            steps: ['Collect the spent coffee grounds.', 'Allow them to dry out; this is optional but helps keep mold from forming.', 'For plants that prefer acidic soil, such as blueberries, azaleas, and roses, sprinkle the ground directly on the soil', 'To nourish the soil, add coffee grounds into it.', 'Once every few weeks, use the coffee grounds as a natural fertilizer.'] 
        },
        {
            id: 2,
            title: 'Natural Pest Repellent',
            description: 'You may use coffee grounds to keep pests like snails, ants, and slugs away.',
            photo: '/scg/SCG Pest 1.png',
            steps: ['In areas where pests are an issue, put the dried used coffee grounds on a container and lit the coffee grounds.','To serves as an alternative to repellent coil, you can also distribute the grounds in the entryway.','Refresh the grounds every few days to maintain their pest-repelling properties.']
        },
        {
            id: 3,
            title: 'Scrubbing Exfoliation',
            description: 'Because coffee grounds are gritty, you can use them as a skin exfoliator.',
            photo: '/scg/IMG_5763 1.png',
            steps: ['To make a paste, combine coffee grounds with a small amount of honey, coconut oil, or olive oil.', 'Apply gentle circular motions to massage the scrub into your skin.','Use warm water to rinse. Your skin will feel refreshed and smoother.','Use for exfoliation once a week.']
        },
        {
            id: 4,
            title: 'Deodorize the Home',
            description: 'Coffee grounds are excellent for eliminating smells because they have the ability to absorb them.',
            photo: '/scg/IMG_5761 1.png',
            steps: ['Put a small bowl of dried coffee grounds in your shoes, in the refrigerator, or next to garbage cans, or anywhere else where scents are noticeable', "To maintain the space's fresh scent, change the grounds every few weeks."]
        },
        {
            id: 5,
            title: 'Natural Dye',
            description: 'Paper, Easter eggs, and textiles can all be dyed using coffee grounds.',
            photo: '/scg/IMG_5760 1.png',
            steps: ['To make a strong brew, bring the coffee ground to a boil in water.','Allow the coffee to cool down after brewing.','Soak the fabric, paper, or eggs in the coffee for several hours, or until you achieve the desired color.','Dry the item, and you’ll have a natural, earthy color.']
        },
        {
            id: 6,
            title: 'Boost Indoor Gardening',
            description: 'Coffee grounds can improve the condition of your indoor plants.',
            photo: '/scg/IMG_5759 1.png',
            steps: ['Collect your coffee grounds and allow them to air dry.', 'Fill the bottom of your indoor plant pots with the grounds.', 'This gives the plant essential nutrients and helps in better drainage.']
        }
    ]

    return (
        <section className="my-10 flex justify-center">
            <div className="md:w-[80%] w-full z-50">
                { recycleSteps.map(recycle => (
                    <div key={recycle.id}>
                        <h2 className="heading-color font-semibold md:text-xl text-lg">{ recycle.id }. {recycle.title}</h2>
                        <p className="font-medium md:text-base text-sm">{recycle.description}</p>

                        <div className="flex justify-center items-center">
                            <img className="md:w-1/3 mt-5 self-center" src={recycle.photo} alt={recycle.title} />
                        </div>
                        <h3 className="font-medium md:mt-0 mt-4">Steps:</h3>
                        <ul className="md:my-7 my-3">
                            { recycle.steps.map(step => (
                                <li className="md:text-base text-sm">{step}</li>
                            )) }
                        </ul>                       
                    </div>
                )) }
                <div className="flex items-center gap-2 justify-end">
                    <BackBtn path='/advocacy' />
                    <NextBtn path='/product' />
                </div>
            </div>
            <img className="absolute left-0 object-fit top-[900px] w-1/2" src="/Group 2 (2).png" alt="" />
            <img className="absolute right-0 object-fit top-[2000px]" src="/Group 3.png" alt="" />
        </section>
    )
}

export default Recycle