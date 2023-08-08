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

                <div className="flex gap-5 border flex-wrap">
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
                        <input type="text" className="input input-bordered w-[300px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Time</span>
                        </label>
                        <input type="text" className="input input-bordered w-[200px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <input type="text" className="input input-bordered w-[400px]" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea className="w-[400px] textarea textarea-bordered" placeholder="tell us about your event!"></textarea>
                    </div>

                </div>



            </div>


            <div className="bg-white h-screen">





            </div>


        </div>
    )

}

export default Create