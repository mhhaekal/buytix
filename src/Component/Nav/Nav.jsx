import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <div className="navbar bg-black gap-2 px-40 h-[50px]">

                <Link to={"/"}>
                    <div className=" navbar-start mr-5 ">
                        <img src={require("./LogoBlack.png")} className=" h-[50px] w-[220px]" />
                    </div>
                </Link>


                <div className="navbar-center">
                    <div className="form-control h-8 w-[300px]">
                        <input type="text" placeholder="your journey starts here." className="input input-bordered rounded-full md:w-auto" />
                    </div>
                </div>

                <div className="navbar-end flex-none flex gap-3">

                    <div className="btn btn-ghost bg-black text-white">Location</div>
                    <Link to={"/create"}>
                        <div className="btn btn-ghost bg-black text-white">Create Event</div>
                    </Link>
                    <div className="btn btn-ghost bg-black text-white">Username</div>
                </div>


                <div>HELLO WORLD</div>

            </div>

        </div>
    )

}

export default Nav