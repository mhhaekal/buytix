import { Link } from "react-router-dom"
import { useRef } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function Create() {

    const inputProductName = useRef()
    const inputImage = useRef()
    const inputTicketCat = useRef()
    const inputStocks = useRef()
    const inputPrice = useRef()
    const inputDetails = useRef()
    const inputDate = useRef()
    const inputTime = useRef()
    const inputLocation = useRef()
    const inputSeller = useRef()
    const inputCategory = useRef()
    const inputDiscount = useRef()


    const onCreateEvent = async () => {
        try {
            const inputs = {
                productName: inputProductName.current.value,
                image: inputImage.current.value,
                ticketCat: inputTicketCat.current.value,
                stocks: inputStocks.current.value,
                price: inputPrice.current.value,
                details: inputDetails.current.value,
                date: inputDate.current.value,
                time: inputTime.current.value,
                location: inputLocation.current.value,
                seller: inputSeller.current.value,
                category: inputCategory.current.value,
                discount: inputDiscount.current.value
            }
            await axios.post(`http://localhost:4123/products`, inputs)
            toast.success('Create Event Success!')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Toaster />
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
                        <input type="text" ref={inputProductName} className="input input-bordered w-[500px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Date</span>
                        </label>
                        <input type="date" ref={inputDate} className="input input-bordered w-[300px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Time</span>
                        </label>
                        <input type="time" ref={inputTime} className="input input-bordered w-[200px]" />
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Location</span>
                            </label>
                            <input type="text" ref={inputLocation} className="input input-bordered w-[400px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Image (Link)</span>
                            </label>
                            <input type="text" ref={inputImage} className="input input-bordered w-[400px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Stock </span>
                            </label>
                            <input type="text" ref={inputStocks} className="input input-bordered w-[400px]" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Event Description</span>
                            </label>
                            <textarea ref={inputDetails} className="w-[620px] textarea textarea-bordered" placeholder="tell us about your event!"></textarea>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Event Category</span>
                            </label>
                            <select onSelect={inputCategory} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Music</option>
                                <option>Comedy</option>
                                <option>Education</option>
                                <option>Racing</option>
                                <option>Football</option>
                                <option>Basketball</option>
                                <option>Tennis</option>
                                <option>Badminton</option>
                            </select>
                        </div>

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
                        <select ref={inputTicketCat} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>VIP</option>
                            <option>CAT1</option>
                            <option>CAT2</option>
                        </select>
                    </div>
                    <div className="form-control flex">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Ticket Price</span>
                            </label>
                            <input type="text" ref={inputPrice} className="input input-bordered w-[300px]" />
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
                    <input type="number" ref={inputDiscount} className="input input-bordered w-[300px]" />
                </div>

                <div className="pt-20">
                    <Link to={'/'}>
                        <div className="btn bg-black text-white w-[200px] hover:bg-black">CANCEL</div>
                    </Link>
                    <div onClick={onCreateEvent} className="btn w-[200px] btn-primary ml-10 text-white">CREATE EVENT</div>
                </div>
            </div>

        </div>
    )

}