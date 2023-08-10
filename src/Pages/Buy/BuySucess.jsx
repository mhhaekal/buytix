function BuySuccess() {
    return (
        <div>
            <div className="flex min-h-screen">
                <div className="w-[80%]">

                    <div className="mx-36 mt-10 mb-[100px]">
                        <div>
                            <div className=" text-6xl font-bold pb-5">Coldplay : Music of The Spheres Concert </div>

                            <div className="flex gap-1 font-bold mb-3">
                                <div className="text-gray-500">15 Nov 2023 -</div>
                                <div className="text-gray-500">08:00pm -</div>
                                <div className="text-gray-500">Gelora Bung Karno, Jakarta, Indonesia |</div>
                                <div className="text-purple-800">by M Hafidz Haekal</div>
                            </div>

                            <div className=" mb-10 bg-gradient-to-r from-black to-purple-800 h-[8px]"></div>
                        </div>


                        <div className="alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Thank you. Your purchase has been confirmed!</span>
                        </div>


                        <div className="py-10">

                            <div className="flex justify-center text-xl py-3 font-bold">REFERRAL CODE: XXXXX</div>

                            <div className="flex justify-center text-center">You can earn 100 points for every friend you refer to Buytix. They will get 10% off for their first purchase!
                                Points can be redeem to available discounts </div>

                        </div>



                        <div className="flex justify-center">
                            <div>
                                <button className="mt-10 btn btn-neutral w-[300px] font-bold">BACK TO MENU</button>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="w-[40%] bg-gradient-to-r from-black to-purple-800">


                </div>

            </div>

        </div>
    )

}

export default BuySuccess