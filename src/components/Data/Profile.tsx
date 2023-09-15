import { useState } from "react";
import Modal from "@/components/Modal";
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconMail, IconPhone, IconPlus } from "@tabler/icons-react";

export default function Profile() {
    const [profile, setProfile] = useState<ProfileFormValues | null>(null);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-10">
            {
                profile ?
                    <ShowProfile profile={profile} /> :
                    <AddProfile setProfile={setProfile} />
            }
        </div>
    )
}

const getUserName = (url: string) => {
    return url.split("/").slice(-1)[0];
}
const getClickableLink = (link: string) => {
    return link.startsWith("http://") || link.startsWith("https://") ?
        link
        : `http://${link}`;
};

function ShowProfile({ profile }: { profile: ProfileFormValues }) {

    const instagram = getUserName(profile.instagram);
    const youtube = getUserName(profile.youtube);

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="text-2xl font-semibold">
                {profile.name}
            </div>
            <div className="w-full flex text-sm">
                <div className="w-full">
                    <a href={`https://wa.me/91${profile.phone}`} target="_blank" className="flex gap-2 underline items-center">
                        <div className="w-8 aspect-square flex justify-center items-center bg-green-200 text-green-500 rounded-full">
                            <IconBrandWhatsapp size={20} />
                        </div>
                        {`+91 ${profile.phone}`}
                    </a>
                    <a href={`mailto:${profile.email}`} className="flex gap-2 underline items-center mt-8">
                        <div className="w-8 aspect-square flex justify-center items-center bg-blue-200 text-blue-500 rounded-full">
                            <IconMail size={20} />
                        </div>
                        {profile.email}
                    </a>
                </div>
                <div className="w-full">
                    {!!instagram &&
                        <a href={getClickableLink(profile.instagram)} target="_blank" className="flex gap-2 underline items-center">
                            <div className="w-8 aspect-square flex justify-center items-center bg-pink-200 text-pink-500 rounded-full">
                                <IconBrandInstagram size={20} />
                            </div>
                            {instagram}
                        </a>
                    }
                    {!!youtube &&
                        <a href={getClickableLink(profile.youtube)} target="_blank" className="flex gap-2 underline items-center mt-8">
                            <div className="w-8 aspect-square flex justify-center items-center bg-red-200 text-red-500 rounded-full">
                                <IconBrandYoutube size={20} />
                            </div>
                            {youtube}
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

function AddProfile({ setProfile }: { setProfile: React.Dispatch<React.SetStateAction<ProfileFormValues | null>> }) {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <button
                className="h-24 aspect-square flex justify-center text-gray-500 items-center bg-gray-100 rounded-full"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <IconPlus size={80} stroke={1} />
            </button>
            <div className="text-gray-500">
                Add Profile
            </div>
            {showModal ? <Modal setShowModal={setShowModal} setProfile={setProfile} /> : null}
        </>
    )
}