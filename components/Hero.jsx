import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
    return (
        <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-5">
            <div className="text-center w-full max-w-[900px] mx-auto">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl ${fugaz.className}`}>
                    <span className="text-gradient">Moody </span>
                    <span>helps you track you&apos;re </span>
                    <span className="text-gradient">daily mood!</span>
                </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-center w-full mx-auto max-w-[600px]">
                Create your mood record and see how you feel on <span className="font-semibold">every day or every year.</span>
            </p>
            <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
                <Button text="Sign Up" outline />
                <Button text="Login" />
            </div>
            <Calendar />
        </div>
    )
}