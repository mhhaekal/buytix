import Nav from "../../Component/Nav/Nav"
import CatPageCard from "./CatPageCard"
import Footer from "../../Component/Footer/Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"




function CatPage() {


    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])


    const search = useLocation().search;
    const id = new URLSearchParams(search).get("category")
    // console.log(id)


    const fetchData = async () => {
        try {
            const ticket = await axios.get(`http://localhost:4123/products?category=${id}`)
            console.log(ticket.data);
            setProducts(ticket.data)

        } catch (error) {
            console.log(error);
        }
    }

    const fetchCatName = async () => {
        try {
            const catName = await axios.get(`http://localhost:4123/category/${id}`)
            console.log(catName.data.name)
            setCategory(catName.data.name.toUpperCase())
        } catch (error) {

        }

    }


    useEffect(() => {
        fetchData()
        fetchCatName()
    }, [])


    return (
        <div className="">

            <Nav />

            <div className="flex">
                <div className=" flex-1 h-[1000px] ">

                    <div className="mt-20">

                        <div className="flex">
                            <div className="w-[51%] mx-40 font-bold text-5xl pb-4">
                                {category}
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-outline btn-primary btn-block rounded-full text-white m-1">LOCATION</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Location 1</a></li>
                                    <li><a>Location 2</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className=" ml-40 mr-20 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                    </div>

                    <div className="ml-40 mr-20 flex flex-col gap-5">
                        {
                            products.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <CatPageCard item={value} />
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
                <div className="w-[25%] h-[vh] bg-gradient-to-r from-black to-purple-800">


                </div>
            </div>

            <Footer />

        </div >

    )
}

export default CatPage