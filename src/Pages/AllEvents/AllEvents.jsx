import axios from "axios";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import CatPageCard from "../Category Page/CatPageCard";
import { useEffect, useState } from "react";
import Checkbox from "../../Component/Checkbox/Checkbox";

function AllEvents() {
  const [backupProducts, setBackupProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedType, setselectedType] = useState([]);
  const [type, setType] = useState([]);
  const [location, setLocation] = useState([]);
  // ini dibuat untuk menampung id
  const [activefilters, setActiveFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);

  // const name = "Gelora Bung Karno Stadium, Jakarta, Indonesia";

  const fetchData = async () => {
    try {
      const ticket = await axios.get(`http://localhost:4123/products`);
      const loc = await axios.get(`http://localhost:4123/locations`);
      const type = await axios.get("http://localhost:4123/category");
      // const

      // console.log(loc);
      setBackupProducts(ticket.data);
      setProducts(ticket.data);
      setType(type.data);
      setLocation(loc.data);
      // console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCheckbox = (_typeId) => {
  //   const tempSelectedType = [...selectedType];
  //   // console.log(tempSelectedType)
  //   const tempProducts = [...backupProducts];

  //   if (tempSelectedType.includes(_typeId)) {
  //     tempSelectedType.splice(tempSelectedType.indexOf(_typeId), 1);
  //   } else {
  //     tempSelectedType.push(_typeId);
  //   }

  //   const filtered = tempProducts.filter((value) => {
  //     // console.log(value);
  //     return tempSelectedType.includes(value.category);
  //   });

  //   setselectedType(tempSelectedType);
  //   filtered.length ? setProducts(filtered) : setProducts(tempProducts);
  // };
  const handleChange = (categoryId) => {
    // 1
    console.log(categoryId);
    // setSelectedFilter(e);
    // console.log(e);
    if (activefilters.includes(categoryId)) {
      // []
      // dengan cara ini dapat menghapus sebuah id yang sudah ditampung pada
      // ActiveFilters
      setActiveFilters((prev) => prev.filter((id) => id !== categoryId));
    } else {
      // jika categoriId belum terdapat pada activeFilters maka akan ditambahkan ke variable tsb
      setActiveFilters((prev) => [...prev, categoryId]); // [1]
      // console.log(activefilters);
    }
  };

  const handleChange1 = (locationId) => {
    console.log(locationId);
    // setSelectedFilter(e);
    // console.log(e);
    if (selectedFilter.includes(locationId)) {
      // dengan cara ini dapat menghapus sebuah id yang sudah ditampung pada
      // ActiveFilters
      setSelectedFilter((prev) => prev.filter((id) => id !== locationId));
    } else {
      // jika categoriId belum terdapat pada activeFilters maka akan ditambahkan ke variable tsb
      setSelectedFilter((prev) => [...prev, locationId]);
      // console.log(activefilters);
    }
  };
  let filteredData = products.filter((item) => {
    if (selectedFilter.length && !activefilters.length) {
      return selectedFilter.includes(item.locationId);
    } else if (!selectedFilter.length && activefilters.length) {
      return activefilters.includes(item.category);
    } else {
      return selectedFilter.includes(item.locationId) && activefilters.includes(item.category);
    }
  });

  useEffect(() => {
    fetchData();
    console.log(filteredData);
  }, [activefilters, selectedFilter]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="flex-1 ">
          <div>
            <div className="mt-20">
              <div className="">
                <div className="w-[51%] mx-40 font-bold text-5xl pb-4">ALL EVENTS</div>
              </div>
            </div>

            <div className="flex ml-40 mr-20 mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>

            <div className="flex gap-10 ml-40 mr-20 pb-10">
              <div className="sticky top-10 h-[70%]">
                <div className="collapse collapse-plus bg-base-200 mb-5">
                  <input type="radio" name="my-accordion-3" className="" />
                  <div className="collapse-title text-xl font-semibold">CATEGORIES</div>
                  <div className="collapse-content">
                    {type &&
                      type.map((value, index) => {
                        // console.log(value.id);
                        return (
                          <Checkbox
                            typeName={value.name}
                            typeId={value.id}
                            handleFunction={handleChange}
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-semibold">LOCATION</div>
                  <div className="collapse-content">
                    {location &&
                      location.map((value, index) => {
                        // console.log(value.id);
                        return (
                          <Checkbox
                            typeName={value.name}
                            // value={value.id}
                            typeId={value.id}
                            handleFunction={handleChange1}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5 mb-32 ">
                {/* {backupProducts.map((value, index) => {
                  return (
                    <div key={index}>
                      <CatPageCard item={value} />
                    </div>
                  );
                })} */}
                {!activefilters.length && !selectedFilter.length ? (
                  backupProducts.map((value, index) => {
                    return (
                      <div key={index}>
                        <CatPageCard item={value} />
                      </div>
                    );
                  })
                ) : !filteredData.length ? (
                  // <div className="">
                  <img
                    src="https://img.freepik.com/free-vector/search-concept-landing-page_52683-21330.jpg?w=826&t=st=1691869742~exp=1691870342~hmac=f27681b86f3a0cce7620acb8890b5ec59c5b1dec72673909ad52ea45474ca4c7"
                    alt=""
                    className="h-full w-full"
                  />
                ) : (
                  filteredData.map((value, index) => {
                    return (
                      <div key={index}>
                        <CatPageCard item={value} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="  w-[10%] h-[vh] bg-gradient-to-r from-black to-purple-800"></div>
      </div>

      <Footer />
    </div>
  );
}

export default AllEvents;
