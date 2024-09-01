import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {
    return (
        <>
            <div className="flex flex-col flex-1 justify-center items-center gap-4">
                <h3 className={`text-xl sm:text-2xl md:text-3xl ${fugaz.className}`}>Log In / Register</h3>
                <p>You're one step away!</p>
                <div className="max-w-[400px] w-full mx-auto">
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Password"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <Button text="Submit" full />
                    <div className="my-3 text-center">
                        <p>Don't have an account? <span className="text-primary">Sign Up</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
