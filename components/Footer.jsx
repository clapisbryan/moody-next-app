import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Footer() {
  return (
    <footer className="p-4 sm:p-8 grid place-items-center">
        <p className={`text-indigo-600 ${fugaz.className}`}>Create with love</p>
    </footer>
  )
}
