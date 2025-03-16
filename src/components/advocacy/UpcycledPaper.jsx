import BackBtn from "../BackBtn"
import NextBtn from "../NextBtn"

const UpcycledPaper = () => {
    return (
        <section className="my-10 flex justify-center">
            <div className="w-[80%]">
                <h1 className="heading-color font-bold text-4xl">Upcycled Paper</h1>
                <img className="rounded-md mt-5" src="/advocacy/Image (2).png" alt="Upcycled Paper" />

                <div className="mt-16">
                    <h2 className="heading-color font-semibold text-3xl">How to Make Upcycled Paper with Scent Coffee Grounds</h2>
                    <p className="mt-5">Recycle used coffee grounds into eco-friendly handmade paper!</p>
                </div>
                
                <div className="mt-7">
                    <h3 className="font-semibold">Materials:</h3>
                    <ul className="mt-7">
                        <li>Dried spent coffee grounds.</li>
                        <li>Recycled paper scraps</li>
                        <li>Blender</li>
                        <li>Water</li>
                        <li>Frame with mesh (or embroidery hoop with screen).</li>
                        <li>Sponge, Cloth, or felt sheets</li>
                        <li>Rolling pin (optional).</li>
                    </ul>
                </div>

                <div className="mt-7">
                    <h3 className="font-semibold">Steps:</h3>
                    <ul className="mt-7 flex flex-col gap-7 w-1/2 text-justify">
                        <li>Make Pulp: Soak shredded paper scraps in water for more than an hour before blending into a smooth pulp. Add the coffee grounds and blend briefly.</li>
                        <li>Pour and spread the pulp onto a large container filled with water</li>
                        <li>Next is dip and filter with the mesh screen, ensuring a uniform layer.</li>
                        <li>Transfer to a cloth and press: Using a sponge, drain excess water.
                        (Optional) Transfer to a towel and press with a rolling pin.</li>
                        <li>Dry: Allow to air dry for 24 hours. Once dried, remove the sheet from the cloth.</li>
                        <li>Use: Trim the edges as needed and use your coffee-infused paper for crafts or packing!</li>
                        <li>Simple, sustainable, and creative! ♻️</li>
                    </ul>
                </div>

                <div className="flex items-center gap-2 justify-end">
                    <BackBtn path='/' />
                    <NextBtn path='/scg' />
                </div>
            </div>
            <img className="absolute right-0 object-fit" src="/Group 3.png" alt="" />
            {/* <img className="absolute right-26 object-fit top-[1300px]" src="/Group 2 (3).png" alt="" /> */}
            <img className="absolute -left-5 object-fit top-[3000px]" src="/Group 2 (4).png" alt="" />
        </section>
    )
}

export default UpcycledPaper