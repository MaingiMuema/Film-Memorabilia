"use client";

import MainLayout from "../layouts/MainLayout"


export default function About() {


  return (
    <>
        <MainLayout>
            <div className="about">
                <div className="about-us px-40">
                    <h1 className="font-bold text-lg mt-10">Film Memorabilia Money Back Guarantee</h1>
                    <p>At Film Memorabilia, we understand the importance of confidence and trust when making purchases online. That's why we proudly offer our Money Back Guarantee to ensure your satisfaction with every transaction.</p>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Our Promise to You</h2>
                        <p>We stand behind the authenticity and quality of every item in our collection. If for any reason you are not completely satisfied with your purchase, we will gladly provide a full refund or exchange within [number of days] days of delivery.</p>
                    </div>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">How it works</h2>
                        <p>If you're not satisfied with your purchase, simply contact our customer service team within the specified time frame to initiate the return process. Once we receive the returned item in its original condition, we will process your refund promptly, minus any applicable shipping and handling fees.</p>
                    </div>
                    <div className="mission-section">
                        <h2 className="font-bold text-lg mt-10">Our Commitment to excellence</h2>
                        <p>Our Money Back Guarantee is a testament to our commitment to excellence and customer satisfaction. Whether you're a seasoned collector or a casual fan, you can shop with confidence knowing that your purchase is protected by our guarantee.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
  )
}
