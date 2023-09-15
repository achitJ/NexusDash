import BasicForm from "./BasicForm";
import ContactForm from "./ContactForm";
import { useState } from "react";
import Header from "./Header";
import useForm from "@/hooks/useForm";
import { formMetadata } from "./utils";

export default function Modal(
    { setShowModal, setProfile }:
    { 
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
        setProfile: React.Dispatch<React.SetStateAction<ProfileFormValues | null>>
    }
) {
    const [currentTab, setCurrentTab] = useState<"basic" | "contact">("basic");
    const form = useForm<ProfileFormValues>(formMetadata);

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-96 my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <Header setShowModal={setShowModal}/>

                        <div className="flex gap-12 py-4 px-6 justify-between">
                            <div 
                                className={`w-full border-b-4 cursor-pointer text-center ${currentTab == "basic" ? "border-blue-500" : ""}`}
                            >
                                Basic
                            </div>
                            <div 
                                className={`w-full border-b-4 cursor-pointer text-center ${currentTab == "contact" ? "border-blue-500" : ""}`}
                            >
                                Contact
                            </div>
                        </div>
                        {currentTab == "basic" ? 
                            <BasicForm setCurrentTab={setCurrentTab} form={form}/> : 
                            <ContactForm setCurrentTab={setCurrentTab} form={form} setProfile={setProfile}/>
                        }
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}