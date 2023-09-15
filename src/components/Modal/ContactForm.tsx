import { ProfileInput } from "../Input";

export default function ContactForm(
    { setCurrentTab, setProfile, form }:
    { 
        setCurrentTab: (tab: "basic" | "contact") => void, 
        setProfile: React.Dispatch<React.SetStateAction<ProfileFormValues | null>>,
        form: IUseFormReturnType<ProfileFormValues> 
    }
) {
    return (
        <form className="w-full">
            <div className="relative p-6 flex-auto">
                <ProfileInput
                    label="Instagram Link"
                    placeholder="Eg. instagram.com/username"
                    {...form.getInputProps("instagram")}
                />
                <ProfileInput
                    label="Youtube Link"
                    placeholder="Eg. youtube.com/username"
                    {...form.getInputProps("youtube")}
                />
            </div>
            <div className="flex items-center justify-end p-4 border-t border-slate-200 rounded-b">
                <button
                    className="active:bg-gray-300 text-sm py-3 px-4 rounded-xl border border-black shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setCurrentTab("basic");
                    }}
                >
                    Back
                </button>

                <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-sm py-3 px-4 rounded-xl shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        form.validateAll();
                        if (form.isValid()) {
                            console.log(form.getValues());
                            setProfile(form.getValues());
                        }
                    }}
                >
                    Done
                </button>
            </div>
        </form>
    )
}