import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Page',
    description: 'This is the contact page',
    keywords:['contact page','Esotilin','blablabal']
   };

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">contact Page</span>
        </>
    )
}
