import { Link } from "react-router-dom";
const NextBtn = ({ path }) => {
    return (
        <Link className="font-medium bg-gray-100 p-2 rounded-md flex items-center gap-2 z-50 md:text-base text-sm" to={path}>
            Next
            <img className="w-[20px]" src="/icons/skip_next_filled.png" alt="Next" />
        </Link>
    )
}

export default NextBtn;