"use client";

import MainLayout from "../layouts/MainLayout"


export default function Bid() {


  return (
    <>
        <MainLayout>
            <div className="about">
                <div className="about-us px-40">
                    <h1 className="font-bold text-lg mt-10">Bidding and Buying Help</h1>
                    <p>At Film Memorabilia, we strive to make your bidding and buying experience as smooth and enjoyable as possible. Whether you're new to online auctions or a seasoned bidder, we're here to provide assistance every step of the way.</p>
                    
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Getting Started</h2>
                        <p>If you're new to bidding on our platform, don't worry! We've made it easy to get started. Simply create an account on our website to begin exploring our extensive collection of cinematic memorabilia. Once you find an item you're interested in, you can place a bid or make a purchase directly.</p>
                    </div>

                    <div className="what-sets-us-apart">
                        <h2 className="font-bold text-lg mt-10">Understanding Bidding</h2>
                        <p>Bidding on Film Memorabilia is simple and straightforward. Just enter the maximum amount you're willing to pay for an item, and our system will automatically place bids on your behalf, incrementally increasing your bid as necessary to keep you in the lead. If someone outbids you, don't worry - you'll receive notifications so you can decide whether to increase your bid or let the item go.</p>
                    </div>

                    <div className="our-collection">
                        <h2 className="font-bold text-lg mt-10">Payment and Shipping</h2>
                        <p>Once you've won an auction or made a purchase, you'll need to complete the payment process. We accept a variety of payment methods for your convenience, including credit/debit cards, PayPal, and more. After payment is received, we'll carefully package and ship your item to ensure it arrives safely and securely.</p>
                    </div>

                    <div className="get-in-touch">
                        <h2 className="font-bold text-lg mt-10">Get in Touch</h2>
                        <p>Ready to start your journey into the world of cinematic memorabilia? Explore our collection online and find the perfect piece to add to your collection today. If you have any questions or need assistance, don't hesitate to contact us. Our friendly team is here to help you make your cinematic dreams a reality. Thank you for choosing Film Memorabilia - where every purchase tells a story.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
  )
}
