import { Link } from "react-router-dom";
const BackBtn = ({ path }) => {
    return (
        <Link className="font-medium bg-gray-100 p-2 rounded-md flex items-center gap-2 z-50" to={path}>
            <img className="w-[20px] rotate-180" src="/icons/skip_next_filled.png" alt="Back" />
            Back
        </Link>
    )
}

export default BackBtn;