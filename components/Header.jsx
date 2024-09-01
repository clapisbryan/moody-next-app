import { Fugaz_One } from "next/font/google";

import Link from 'next/link';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const Header = () => {
    return (
        <>
            <header>
                <div className="navbar bg-base-100 container mx-auto">
                    <div className="flex-1">
                        <Link className={`text-base sm:text-lg text-gradient !font-bold ${fugaz.className}`} href="/">Moody</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            {/* <li>
                                <Link href="/">PlaceHolder CTA</Link>
                            </li>
                            <li>
                                <Link href="/">Stats</Link>
                            </li> */}
                            {/* <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
