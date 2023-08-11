import { Link } from "react-router-dom";
import { setFirstName } from "../../redux/Features";
import { useDispatch, useSelector } from "react-redux";
// import { setFirstName } from "../../redux/Features";

function Nav() {
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSignOut = () => {
    localStorage.removeItem("idLogin");
    dispatch(setFirstName(""));
  };

  return (
    <div>
      <div className="navbar bg-black gap-2 px-40 h-[50px]">
        <Link to={"/"}>
          <div className=" navbar-start mr-5 ">
            <img src={require("./LogoBlack.png")} className=" h-[50px] w-[220px]" alt="logo" />
          </div>
        </Link>

        <div className="navbar-center">
          <div className="form-control h-8 w-[300px]">
            <input
              type="text"
              placeholder="your journey starts here."
              className="input input-bordered rounded-full md:w-auto"
            />
          </div>
        </div>

        <div className="navbar-end flex-none flex gap-3">
          <div className="btn btn-ghost bg-black text-white">Location</div>
          <div className="btn btn-ghost bg-black text-white">Create Event</div>
          {firstName ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="btn btn-ghost m-1 bg-black text-white">
                {firstName}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <Link className="bg-black text-white font-semibold" onClick={onSignOut}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login "}>
              <div className="btn btn-ghost bg-black text-white">Sign in</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
