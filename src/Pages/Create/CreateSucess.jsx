import { Link } from "react-router-dom"

function CreateSuccess() {
    return (
        <div>
            <div className="h-[auto] bg-gradient-to-r from-black to-purple-800 w-[auto]">
                <div className="mx-36 py-16 text-6xl font-bold text-white">LETS CREATE AN EVENT!</div>
            </div>

            <div className="bg-white h-screen">

                <div className="mx-36 my-10 mb-[100px]">
                    <div className="">
                        <div className="mt-40 alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Thank you. Your purchase has been confirmed!</span>
                        </div>
                    </div>


                    <div className="flex justify-center mt-20">
                        <div>
                            <Link to={'/'}>
                                <button className=" btn btn-neutral w-[300px] font-bold">BACK TO MENU</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default CreateSuccess