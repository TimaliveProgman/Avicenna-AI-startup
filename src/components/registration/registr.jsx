import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import './registr.css';


function SignForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem("formData");
        return savedData ? JSON.parse(savedData) : {};
    });

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(data));
    }, [data]);

    const onSubmit = (formData) => {
        setData(formData);
        // Handle form submission logic here (e.g., API call, etc.)
        console.log(formData);
        reset(); // Reset form after submission
        navigate("/wrapper"); // Navigate to /mainpage after successful submission
    };

    return (
        <div className="font-sans  w-full h-screen">
            <div className="flex flex-wrap max-md:block">
                <div className="classBg block max-md:hidden">
                    <div className="mt-24 ml-16">
                        <h1 className="text-4xl text-white font-extrabold underline">avicenna ai</h1>
                        <p className="text-2xl w-3/5 text-white font-bold mt-52">avicenna ai - Caring from a distance Professional medical care, wherever you are  </p>
                        <img src={logo} alt="" className="colored-image" />
                    </div>
                </div>
                <div className="w-6/12 max-md:w-full ">
                    <div className="flex flex-col items-center mt-24 max-md:m-0">
                        <h1 className="font-semibold text-5xl max-md:text-4xl max-md:mt-20 max-md:text-white">Create an account</h1>
                        <p className=" text-slate-500 text-base mt-4 max-md:text-xs max-md:text-gray-300 cursor-pointer">Let’s get started with your 30 days free trial</p>
                        <form className="mt-16 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="inputName" className="cursor-pointer">
                                <p className="mt-1 max-md:text-base">Name</p>
                                <input type="text" id="inputName" {...register("firstName", { required: true })} />
                                {errors.firstName && <span className="text-red-500">Name is required</span>}
                            </label>
                            <label htmlFor="inputEmail" className="cursor-pointer">
                                <p className="mt-1 max-md:text-base">Email</p>
                                <input type="email" id="inputEmail" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </label>
                            <label htmlFor="inputPassword" className="cursor-pointer">
                                <p className="mt-1 max-md:text-base">Password</p>
                                <input type="password" id="inputPassword" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </label>
                            <button type="submit" className="w-full bg-black text-white h-14 rounded-3xl mt-16 max-md:h-12 max-md:bg-white max-md:text-black" disabled={Object.keys(errors).length > 0}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignForm;
