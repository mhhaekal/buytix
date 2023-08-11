import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Buy() {
    const [products, setProduct] = useState(null);
    const { id } = useParams();
    const [selected, setSelected] = useState({})
    const qty = useRef()

    const onFetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4123/products/${id}`);
            console.log(res);
            const totalStock = res.data.stocks.reduce((a, b) => {
                return a + b
            })

            setSelected({ ...selected, stockSize: totalStock })
            setProduct(res.data);
        } catch (error) { }
    };

    useEffect(() => {
        onFetchData();
    }, []);

    return (
        <div >
            {
                !products ? null : (
                    <div className="flex">
                        <div className="w-[70%]">

                            <div className="mx-36 mt-10 mb-[100px]">
                                <div>
                                    <div className=" w-[700px] text-6xl font-bold pb-5">{products.productName} </div>

                                    <div className="flex gap-1 font-bold mb-3">
                                        <div className="text-gray-500">{products.date} -</div>
                                        <div className="text-gray-500">{products.time} -</div>
                                        <div className="text-gray-500">{products.location} |</div>
                                        <div className="text-purple-800">by {products.seller}</div>
                                    </div>

                                    <div className=" mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                                </div>

                                <div>
                                    <div className="pb-3 font-bold text-2xl">Ticket Information</div>
                                    <div className="flex gap-10">
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-bold">Ticket Category</span>
                                            </label>
                                            <select className="select select-bordered">
                                                <option disabled selected>Pick one</option>
                                                <option>VIP</option>
                                                <option>CAT1</option>
                                                <option>CAT2</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Choose Ammount</span>
                                            </label>
                                            <select className="select select-bordered">
                                                <option disabled selected></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-3 mt-12 font-bold text-2xl">Contact Information</div>

                                    <div className="w-[auto] flex flex-wrap gap-5 ">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">First Name</span>
                                            </label>
                                            <input type="text" className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Last Name</span>
                                            </label>
                                            <input type="text" className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Email</span>
                                            </label>
                                            <input type="text" className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Phone Number</span>
                                            </label>
                                            <input type="text" className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control flex flex-row gap-5">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text font-bold">Referral Code</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-[300px]" /></div>

                                            <button className="mt-9 btn w-44 font-bold">SUBMIT</button>
                                        </div>

                                    </div>


                                </div>


                                <div className="flex gap-5">
                                    <Link to={'/'}>
                                        <div>
                                            <button className="mt-16 btn bg-black hover:bg-black text-white w-[300px] font-bold">CANCEL</button>
                                        </div>
                                    </Link>
                                    <Link to={``}>
                                        <div>
                                            <button className="mt-16 btn btn-primary w-[300px] font-bold">BUY</button>
                                        </div>
                                    </Link>
                                </div>

                            </div>


                        </div>


                        <div className="w-[40%] bg-gradient-to-r from-black to-purple-800">

                            <div className="text-white text-xl font-medium px-10 flex flex-col gap-5 justify-end h-full pb-[220px]">
                                <div className="flex justify-end text-3xl font-extrabold">Order Summary</div>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div>x</div>
                                        <div>VIP</div>
                                    </div>
                                    <div>Rpxxxxx</div>
                                </div>

                                <div className="flex justify-between">
                                    <div>Discount</div>
                                    <div>-Rpxxxx</div>
                                </div>

                                <div className="h-2 bg-white"></div>

                                <div className="flex justify-between font-extrabold">
                                    <div>TOTAL</div>
                                    <div>Rpxxxx</div>
                                </div>

                            </div>



                        </div>

                    </div>
                )}

        </div >
    )
}