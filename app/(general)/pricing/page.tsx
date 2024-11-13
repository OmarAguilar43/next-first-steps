import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Pricing Page',
    description: 'This is the pricing page',
    keywords:['contact page','Esotilin','blablabal']
   };



export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">Pricing page</span>
        </>
    )
}
