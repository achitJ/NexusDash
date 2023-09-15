import { IconX } from "@tabler/icons-react";

export default function Header(
    { setShowModal }:
    { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }
) {
    return (
        <div className="flex items-start justify-between p-4 border-b border-slate-200 rounded-t">
            <div className="text-xl font-semibold">
                Add New Profile
            </div>
            <button
                className="border-0 text-black opacity-50 text-3xl leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
            >
                <IconX size={28} stroke={1} />
            </button>
        </div>
    )
}