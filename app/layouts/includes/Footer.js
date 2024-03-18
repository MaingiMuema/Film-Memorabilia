'use client'

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Buy</li>
                        <a href="/auth"><li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li></a>
                        <a href="/money-guarantee"><li className="py-1 text-xs hover:underline cursor-pointer">Film Memorabilia Money Back Guarantee</li></a>
                        <a href="/bid"><li className="py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li></a>
                    </ul>

                    <ul className="text-gray-700">
                        <a href="/addProduct"><li className="font-bold text-lg">Sell</li></a>
                        <a href="/addProduct"><li className="py-1 text-xs hover:underline cursor-pointer">Start Sell</li></a>
                        <a href="/learn"><li className="py-1 text-xs hover:underline cursor-pointer">Learn to sell</li></a>
                    </ul>

                    <ul className="text-gray-700">
                        <a href="/about"><li className="font-bold text-lg">About Film Memorabilia</li></a>
                        <a href="/about"><li className="py-1 text-xs hover:underline cursor-pointer">About</li></a>
                        <a href="/terms"><li className="py-1 text-xs hover:underline cursor-pointer">Terms and Conditions</li></a>
                    </ul>

                    <ul className="text-gray-700">
                       
                    </ul>

                    <ul className="text-gray-700">
              
                    </ul>
                </div>
            </div>
        </>
    )
  }
  