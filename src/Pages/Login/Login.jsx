import InputText from "../../Component/Input Text/InputText"

function Login() {
    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <div className="w-[60%] ">

                    <div className="ml-20 mt-32">
                        <img src={require("./LogoWhite.png")} className=" h-[100px] w-[210px]" />


                        <div className="ml-4">
                            <span className="font-bold">Username</span>
                            <InputText handleStyle={{ width: "500px" }} handlePlaceholder={('username')} handleType={('text')} />
                        </div>

                        <div className="ml-4 my-3">
                            <span className="font-bold">Password</span>
                            <InputText handleStyle={{ width: "500px" }} handlePlaceholder={('password')} handleType={('password')} />
                        </div>
                    </div>

                    <div>
                        <button className="w-[500px] my-3 ml-24 rounded-lg bg-purple-800 h-[50px] text-white">SIGN IN</button>
                    </div>

                    <div>
                        <button className="w-[500px] my-3 ml-24 rounded-lg bg-black h-[50px] text-white">CREATE AN ACCOUNT</button>
                    </div>


                </div>
                <div className="w-[40%] bg-gradient-to-r from-black to-purple-800"></div>
            </div>
        </div>
    )

}


export default Login