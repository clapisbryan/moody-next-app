import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
    const statuses = {
        num_days: 14,
        time_remaining: '13:14:26',
        date: new Date().toDateString()
    }

    const moods = {
        'Crying': '😭',
        'Sad': '😢',
        'Existing': '😐',
        'Good': '😊',
        'Elated': '😍'
    }

    return (
        <>
            <div className="flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4">
                    {Object.keys(statuses).map((status, idx) => {
                        return (
                            <div key={idx} className="p-3 sm:p-3 md:p-4 flex flex-col gap-2">
                                <p className="font-medium text-xs sm:text-sm uppercase">{status.replaceAll('_', ' ')}</p>
                                <p className={`text-base sm:text-lg !font-bold truncate ${fugaz.className}`}>{statuses[status]}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="text-center">
                    <h4 className={`text-2xl sm:text-3xl md:text-5xl ${fugaz.className}`}>How do you <span className="text-gradient">feel</span> today?</h4>
                </div>
                <div className="flex items-stretch flex-wrap gap-4">
                    {Object.keys(moods).map((mood, idx) => {
                        return (
                            <button className={`p-4 px-5 rounded-lg purple-shadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1`} key={idx}>
                                <p className="text-2xl sm:text-3xl md:text-4xl">{moods[mood]}</p>
                                <p className={`text-indigo-500 ${fugaz.className}`}>{mood}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
