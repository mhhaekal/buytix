import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Buy() {
    const [products, setProduct] = useState(null);
    const { id } = useParams();
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputEmail = useRef();
    const inputPhoneNumber = useRef();
    const inputRefCode = useRef();
    const navigate = useNavigate();
    const [discount, setDiscount] = useState(null)
    const [price, setPrice] = useState(null)
    // const inputPriceTotal = useRef();

    const onFetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4123/products/${id}`);
            console.log(res);
            setProduct(res.data);
        } catch (error) { }
    };

    const onCheckRef = async () => {
        try {
            const checkRef = await axios.get(`http://localhost:4123/products/${id}`);
            // console.log(checkRef.data.code)
            if (inputRefCode.current.value === checkRef.data.code) {
                console.log("sama guys")
                const fixPrice = (checkRef.data.discount / 100) * checkRef.data.price
                setDiscount(fixPrice)
                // console.log(fixPrice)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onPrice = async () => {
        try {
            const checkRef = await axios.get(`http://localhost:4123/products/${id}`);
            console.log(checkRef.data.price)
            setPrice(checkRef.data.price)
        } catch (error) {

        }
    }

    const onBuyEvent = async () => {
        try {
            const inputs = {
                firstName: inputFirstName.current.value,
                lastName: inputLastName.current.value,
                email: inputEmail.current.value,
                phoneNumber: inputPhoneNumber.current.value,
                refCode: inputRefCode.current.value,

            };
            if (inputs.email == "") {
                alert("Gaboleh Kosong Guys")
            } else {
                await axios.post(`http://localhost:4123/tickets`, { ...inputs });
                console.log(inputs)
                if (inputs) return navigate(`/buy/success/${id}`)
            }

            // toast.success('Create Event Success!')
            // alert("Create Event Success!");
            // setTimeout(() => {
            //     <Link to={'/'}></Link>
            // }, 3000)
            // if (inputs) return navigate('/create/success')
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        onPrice();
        console.log(discount)
        onFetchData();
    }, [discount]);


    return (
        <div >
            {
                !products ? null : (
                    <div className="flex h-screen">
                        <div className="w-[70%]">

                            <div className="mx-36 mt-10 mb-[50px]">
                                <div>
                                    <div className=" w-[700px] text-6xl font-bold pb-5">{products.productName} </div>

                                    <div className="flex gap-1 font-bold mb-3">
                                        <div className="text-gray-500">{products.date} |</div>
                                        <div className="text-gray-500">{products.time} |</div>
                                        <div className="text-gray-500">{products.location} |</div>
                                        <div className="text-purple-800">by {products.seller}</div>
                                    </div>

                                    <div className=" mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                                </div>

                                <div>
                                    <div className="pb-3 mt-12 font-bold text-2xl">Contact Information</div>

                                    <div className="w-[auto] flex flex-wrap gap-5 ">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">First Name</span>
                                            </label>
                                            <input type="text" ref={inputFirstName} className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Last Name</span>
                                            </label>
                                            <input type="text" ref={inputLastName} className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Email</span>
                                            </label>
                                            <input type="text" ref={inputEmail} className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Phone Number</span>
                                            </label>
                                            <input type="text" ref={inputPhoneNumber} className="input input-bordered w-[300px]" />
                                        </div>
                                        <div className="form-control flex flex-row gap-5">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text font-bold">Referral Code</span>
                                                </label>
                                                <input type="text" ref={inputRefCode} className="input input-bordered w-[300px]" /></div>

                                            <button onClick={onCheckRef} className="mt-9 btn w-44 font-bold">SUBMIT</button>
                                        </div>

                                    </div>


                                </div>


                                <div className="flex gap-5">
                                    <Link to={'/'}>
                                        <div>
                                            <button className="mt-16 btn bg-black hover:bg-black text-white w-[300px] font-bold">CANCEL</button>
                                        </div>
                                    </Link>
                                    <div>
                                        <button onClick={onBuyEvent} className="mt-16 btn btn-primary w-[300px] font-bold">BUY</button>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="w-[40%] bg-gradient-to-r from-black to-purple-800">

                            <div className="text-white text-xl font-medium px-10 flex flex-col gap-5 justify-end h-full pb-[220px]">
                                <div className="flex justify-end text-3xl font-extrabold">Order Summary</div>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div>Price</div>
                                    </div>
                                    <div>Rp. {price}</div>
                                </div>


                                <div className="flex justify-between">
                                    <div>Discount</div>
                                    {discount ?
                                        <div>- Rp. {
                                            discount
                                        }</div>
                                        :
                                        <div>Rp. 0</div>
                                    }

                                </div>

                                <div className="h-2 bg-white"></div>

                                <div className="flex justify-between font-extrabold">
                                    <div>TOTAL</div>
                                    <div>Rp. {price - discount}</div>
                                </div>

                            </div>



                        </div>

                    </div>
                )}

        </div >
    )
}