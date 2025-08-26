import React from 'react'

const Registration = () => {

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        password: '',
        username:'',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

    if (formData.username.length < 3) {
      alert("Username must be at least 3 characters");
      return;
    }

if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    try {
        const response = await fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data= await response.json();
        if(response.ok){
            alert('Registraion Successful')
        }else{
            alert('error'+ data.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
    };
    return (
        <div>
            <section className="relative min-h-screen bg-gray-800 overflow-hidden flex items-center">
                <img
                    className="hidden lg:block absolute inset-0 mt-32"
                    src="zospace-assets/lines/line-mountain.svg"
                    alt=""
                />
                <img
                    className="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32"
                    src="zospace-assets/lines/line-right-long.svg"
                    alt=""
                />
                <div className="relative container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                                <div className="max-w-md">
                                    <span className="text-lg text-blue-400 font-bold">
                                        Register Account
                                    </span>
                                    <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                                        Start your journey by creating an account.
                                    </h2>
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="px-6 lg:px-20 py-12 lg:py-24 bg-gray-600 rounded-lg">
                                    <form onSubmit={onSubmit}>
                                        <h3 className="mb-10 text-2xl text-white font-bold font-heading">
                                            Register Account
                                        </h3>
                                        {/* full name */}
                                           <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                                                type="text"
                                                onChange={handleChange}
                                                name="fullName"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        {/* username */}
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5zM4 15v-1c0-2.76 3.58-5 8-5"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                                                type="text"
                                                onChange={handleChange}
                                                name="username"
                                                placeholder="Username"
                                            />
                                        </div>
                                        {/* email */}
                                        <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <svg
                                                    className="w-5 h-5"
                                                    width="20"
                                                    height="21"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                                                        fill="black"
                                                    ></path>
                                                    <path
                                                        d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                                                        fill="black"
                                                    ></path>
                                                    <rect
                                                        x="15"
                                                        y="15"
                                                        width="5"
                                                        height="1"
                                                        rx="0.5"
                                                        fill="black"
                                                    ></rect>
                                                    <rect
                                                        x="17"
                                                        y="18"
                                                        width="5"
                                                        height="1"
                                                        rx="0.5"
                                                        transform="rotate(-90 17 18)"
                                                        fill="black"
                                                    ></rect>
                                                </svg>
                                            </span>
                                            <input
                                                className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                                                type="email"
                                                onChange={handleChange}
                                                name="email"
                                                placeholder="example@habib.me"
                                            />
                                        </div>
                                        {/* password */}
                                                                              
                                        <div className="flex items-center pl-6 mb-6 bg-white rounded-full relative">
                                            <span className="inline-block pr-3 py-2 border-r border-gray-50">
                                                <svg
                                                    className="w-5 h-5"
                                                    width="20"
                                                    height="21"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z"
                                                        fill="black"
                                                    ></path>
                                                    <path
                                                        d="M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z"
                                                        fill="black"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <input
                                                className="w-full pl-4 pr-10 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                                                type={showPassword ? "text" : "password"}
                                                onChange={handleChange}
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                                onClick={togglePasswordVisibility}
                                                tabIndex={-1}
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                             <img
            src={showPassword ? "/password-hide.svg" : "/password-show.svg"}
            alt={showPassword ? "Hide password" : "Show password"}
            className="h-5 w-5"
        />
    </button>
</div>
                                        {/* submit button */}
                                        <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" type='submit' onClick={onSubmit}>
                                            Get started
                                        </button>
                                        <div className="mt-4 text-center">
    <span className="text-white">Already have account? </span>
    <a href="/login" className="text-blue-300 hover:underline font-semibold">Login</a>
</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
