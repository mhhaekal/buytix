import { Link } from "react-router-dom"


function Create() {
    return (

        <div>
            <div className="h-[200px] bg-gradient-to-r from-black to-purple-800">
                <div className="mx-36 py-16 text-6xl font-bold text-white">LETS CREATE AN EVENT!</div>
            </div>

            <div className="mx-36 pt-10">
                <div>
                    <div className="text-2xl font-extrabold">Event Details</div>
                    <div className="mt-3 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                </div>

                <div className="flex gap-5 flex-wrap">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Event Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-[500px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Date</span>
                        </label>
                        <input type="date" className="input input-bordered w-[300px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Time</span>
                        </label>
                        <input type="time" className="input input-bordered w-[200px]" />
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Location</span>
                            </label>
                            <input type="text" className="input input-bordered w-[400px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Image (Link)</span>
                            </label>
                            <input type="text" className="input input-bordered w-[400px]" />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Event Description</span>
                        </label>
                        <textarea className="w-[620px] textarea textarea-bordered" placeholder="tell us about your event!"></textarea>
                    </div>



                </div>
            </div>


            <div className="mx-36 pt-10 pb-20">
                <div>
                    <div className="text-2xl font-extrabold">Ticket Pricing</div>
                    <div className="mt-3 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                </div>


                <div className="flex gap-5 items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Ticket Category</span>
                        </label>
                        <input type="text" className="input input-bordered w-[300px]" />
                    </div>
                    <div className="form-control flex">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Ticket Price</span>
                            </label>
                            <input type="text" className="input input-bordered w-[300px]" />
                        </div>

                    </div>
                    <div className="h-full mt-8">
                        <div className="btn">SUBMIT</div>
                    </div>
                </div>

                <div className="mt-5 h-[200px] border w-[65%] shadow-sm"></div>
                <div className="mt-5">
                    <label className="label">
                        <span className="label-text font-bold">Referral Discount</span>
                    </label>
                    <input type="number" className="input input-bordered w-[300px]" />
                </div>

                <div className="pt-20">
                    <Link to={'/'}>
                        <div className="btn bg-black text-white w-[200px] hover:bg-black">CANCEL</div>
                    </Link>
                    <div className="btn w-[200px] btn-primary ml-10 text-white">CREATE EVENT</div>
                </div>
            </div>

        </div>
    )

}

export default Create