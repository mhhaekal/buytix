import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Skeleton from "../Skeleton/Skeleton";
import axios from 'axios';
import { Link } from "react-router-dom";


function Event() {

    const [products, SetProducts] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4123/products`)
            console.log(response.data.slice(0, 8))
            SetProducts(response.data.slice(0, 8))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!products) {
        return <div>
            <Skeleton />
        </div>
    }

    return (
        <div className="mt-10">

            <div className="flex justify-between">
                <div className=" mt-16 mx-40 font-bold text-5xl pb-4">
                    Event
                </div>
                <div className="mt-16 mx-40 dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-outline btn-primary btn-block rounded-none text-white">Sort</label>
                    <div className="dropdown-content">

                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                        <li><a>Highest to Lowest Price</a></li>
                        <li><a>Lowest to Highest Price</a></li>
                    </ul>
                </div>
            </div>


            <div className=" mx-40 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]">
            </div>

            <div className="flex flex-wrap justify-between mx-40 gap-10">
                {products.map((value, index) => {
                    return (
                        <div key={index}>
                            <Card item={value} />
                        </div>
                    )
                })
                }
            </div>

            <div className="mt-20 flex justify-center">
                <Link to={'/allevents'}>
                    <button className="mx-40 btn w-[300px] font-extrabold">SHOW MORE EVENTS!</button>
                </Link>
            </div>

        </div>
    )
}


export default Event