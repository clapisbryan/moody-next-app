import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
    const statuses = {
        num_days: 14,
        time_remaining: '13:14:26',
        date: new Date().toDateString()
    }
    return (
        <>
            <div className="flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
                    {Object.keys(statuses).map((status, idx) => {
                        return (
                            <div key={idx} className="p-4 flex flex-col gap-2">
                                <p className="font-medium text-xs sm:text-sm uppercase">{status.replaceAll('_', ' ')}</p>
                                <p className={`text-base sm:text-lg !font-bold ${fugaz.className}`}>{statuses[status]}</p>
                            </div>
                        )
                    })}
                </div>

                <h4 className={`text-xl sm:text-2xl md:text-3xl ${fugaz.className}`}>How do you <span className="text-gradient">feel</span> today?</h4>
            </div>
        </>
    )
}
