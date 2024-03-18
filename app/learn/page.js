"use client";

import MainLayout from "../layouts/MainLayout"


export default function About() {


  return (
    <>
        <MainLayout>
            <div className="about">
                <div className="about-us px-40">
                    <h1 className="font-bold text-lg mt-10">Learn to sell</h1>
                    <p>Are you a collector looking to thin out your collection or an individual with movie memorabilia to sell? At Film Memorabilia, we offer a seamless and user-friendly platform to help you sell your items to a global audience of passionate collectors and fans.</p>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Getting Started</h2>
                        <p>Selling your memorabilia with Film Memorabilia is easy. Simply create a seller account on our platform to get started. Once your account is set up, you can begin listing your items for sale, providing detailed descriptions and high-quality photos to showcase their unique features and authenticity.</p>
                    </div>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Listing Your Items</h2>
                        <p>When creating your listings, be sure to include as much information as possible about your items, including their provenance, condition, and any certificates of authenticity you may have. High-quality photos are essential for attracting potential buyers, so be sure to take clear, well-lit images from multiple angles.</p>
                    </div>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Setting Prices</h2>
                        <p>Setting the right price for your items is crucial to attracting buyers and maximizing your earnings. Research similar items that have sold recently to get an idea of their market value, and consider factors such as rarity, condition, and demand when setting your prices. You can choose to list your items at a fixed price or auction them off to the highest bidder.</p>
                    </div>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Receive Payment</h2>
                        <p>When your item sells, you'll receive payment directly to your chosen payment method, minus any applicable fees. Film Memorabilia charges a small commission on each sale to cover the cost of operating our platform and reaching our global audience. The commission fee will be clearly outlined before you list your item for sale.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
  )
}
