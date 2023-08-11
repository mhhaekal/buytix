import axios from "axios"
import Footer from "../../Component/Footer/Footer"
import Nav from "../../Component/Nav/Nav"
import CatPageCard from "../Category Page/CatPageCard"
import { useEffect, useState } from "react"
import Checkbox from "../../Component/Checkbox/Checkbox"



function AllEvents() {

    const [backupProducts, setBackupProducts] = useState(null)
    const [products, setProducts] = useState([])
    const [selectedType, setselectedType] = useState([])
    const [type, setType] = useState([])
    const [location, setLocation] = useState([])

    const name = "Gelora Bung Karno Stadium, Jakarta, Indonesia"


    const fetchData = async () => {
        try {
            const ticket = await axios.get(`http://localhost:4123/products`)
            const loc = await axios.get(`http://localhost:4123/products?location=${name}`)
            const type = await axios.get('http://localhost:4123/category')

            console.log(loc);
            setBackupProducts(ticket.data);
            setProducts(ticket.data)
            setType(type.data)

        } catch (error) {
            console.log(error);
        }
    }


    const handleCheckbox = (_typeId) => {
        const tempSelectedType = [...selectedType]
        // console.log(tempSelectedType)
        const tempProducts = [...backupProducts]

        if (tempSelectedType.includes(_typeId)) {
            tempSelectedType.splice(tempSelectedType.indexOf(_typeId), 1)
        } else {
            tempSelectedType.push(_typeId)
        }

        const filtered = tempProducts.filter((value) => {
            // console.log(value);
            return tempSelectedType.includes(value.category)
        })

        setselectedType(tempSelectedType)
        filtered.length ? setProducts(filtered) : setProducts(tempProducts)

    }

    useEffect(() => {
        fetchData();
    }, [])


    if (!products) {
        return <div>Loading...</div>
    }

    return (

        <div>
            <Nav />
            <div className="flex">
                <div className="flex-1 ">
                    <div>
                        <div className="mt-20">
                            <div className="">
                                <div className="w-[51%] mx-40 font-bold text-5xl pb-4">
                                    ALL EVENTS
                                </div>
                            </div>
                        </div>



                        <div className="flex ml-40 mr-20 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]">
                        </div>

                        <div className="flex gap-10 ml-40 mr-20 pb-10">

                            <div className="sticky top-10 h-[70%]">

                                <div className="collapse collapse-plus bg-base-200 mb-5">
                                    <input type="radio" name="my-accordion-3" checked="checked" className="" />
                                    <div className="collapse-title text-xl font-semibold">
                                        CATEGORIES
                                    </div>
                                    <div className="collapse-content">
                                        {

                                            type.map((value, index) => {
                                                console.log(value.id);
                                                return (
                                                    <Checkbox typeName={value.name}
                                                        typeId={value.id}
                                                        handleFunction={handleCheckbox} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-semibold">
                                        LOCATION
                                    </div>
                                    <div className="collapse-content">
                                        <p>hello</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-5 mb-32 ">
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

                    </div>
                </div>

                <div className="  w-[10%] h-[vh] bg-gradient-to-r from-black to-purple-800"></div>
            </div>

            <Footer />
        </div>)

}

export default AllEvents