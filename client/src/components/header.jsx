import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-white p-4">
      <div className="mx-auto w-full max-w-[1280px] max-lg:max-w-[768px] max-md:max-w-[578px] max-sm:max-w-[420px]">
        <div className="flex items-center gap-4">
          <span className="grid place-items-center md:hidden">
            <FaBars
              fill="#3b6e8f"
              size={26}
            />
          </span>
          <Link to="/">
            <img
              src="/images/Logo.png"
              alt="SchoolsFirst FCU"
              className="w-[155px] md:w-[260px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
