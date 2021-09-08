import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
const Login = () => {
    return (
        <>
        <div className="mt-20">
            <p className="text-3xl font-light text-center mb-5">Login to NTIS System</p>

            <div className="card bg-white rounded shadow-lg w-5/12 mx-auto pb-5">
            <div className="bg-first h-2 rounded-t w-full"></div>
            <div className="px-5 mt-5">
                <label className="font-semibold text-gray-500">Email Address</label>
                <input type="email" placeholder="John@Doe.com" className="block border-transparent focus:outline-none focus:ring-1 focus:ring-second focus:border-transparent border border-gray-300 hover:border-gray-400 shadow-sm w-2/4 w-full p-2 rounded mb-4 mt-1" />

                <label className="font-semibold text-gray-500">Password</label>
                <input type="password" placeholder="********" className="block border-transparent focus:outline-none focus:ring-1 focus:ring-second focus:border-transparent border border-gray-300 hover:border-gray-400 shadow-sm w-2/4 w-full p-2 rounded mb-4 mt-1" />
                
                <div className="flex justify-between space-y-1">
                <Button style={{backgroundColor: '#553c9a'}} draggable="false" size="medium" variant="contained" endIcon={<VpnKeyRoundedIcon style={{color: '#fff'}}/>}>
                    <p className="text-white">Login</p>
                </Button>

                <Link to="#" className="font-semibold text-gray-700">Forgot password?</Link>
                </div>
            </div>
            </div>
            <p className="text-lg font-light text-center mb-5 mt-3">Dont have an account? 
            <Link to="#" className="font-normal text-gray-700 ml-1 underline">Create new account</Link>
            </p>



        </div>
        </>
    );
}

export default Login;
