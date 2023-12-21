"use client"

import axios from "axios"
import { useState, useEffect } from "react"

export default function Home() {

  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    axios.get("https://quote-generator-seven-ochre.vercel.app/quotes")
      .then((data) => setQuotes(data.data))
  }, [])

  const generate = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomNumber])
  }

  return (
    <main className="min-w-screen min-h-screen
    bg-cover bg-no-repeat bg-fixed bg-center
    flex
    flex-col
    items-center
    justify-center
    px-5
    py-5">
      <div
        className="
          w-full
          rounded-lg
          bg-white
          shadow-lg
          px-5
          pt-5
          pb-10
          text-gray-800
        "
        style={{maxWidth: "600px"}}
      >
        <div className="w-full pb-5"></div>
        <div className="w-full mb-4">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">
            {  quote ? quote.text : "WELCOME,  Grab Your Own Quote And Shine Your Status : )" }
          </p>
          <div
            className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3"
          >
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            { quote ? quote.author : "" }
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div
            onClick={generate}
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              text-base
              font-medium
              text-center text-indigo-100
              border border-indigo-500
              rounded-lg
              shadow-sm
              cursor-pointer
              hover:text-white
              bg-gradient-to-br
              from-purple-500
              via-indigo-500
              to-indigo-500
            "
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <span className="relative">Generate Quote</span>
          </div>
        </div>
      </div>
    </main>
  )
}
