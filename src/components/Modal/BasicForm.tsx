import { ProfileInput } from "../Input";

export default function BasicForm(
    {setCurrentTab, form}: 
    {setCurrentTab: (tab: "basic" | "contact") => void, form: IUseFormReturnType<ProfileFormValues>}
) {
    return (
        <form className="w-full">
            <div className="relative p-6 flex-auto">
                <ProfileInput 
                    label="Enter Name" 
                    placeholder="Eg. John Doe"
                    {...form.getInputProps("name")}
                    required
                />
                <ProfileInput 
                    label="Enter Email" 
                    placeholder="Eg. John@xyz.com"
                    {...form.getInputProps("email")}
                    required
                />
                <ProfileInput 
                    label="Enter Phone" 
                    placeholder="Eg. 9899976642"
                    {...form.getInputProps("phone")}
                    required
                />
            </div>
            <div className="flex items-center justify-end p-4 border-t border-slate-200 rounded-b">
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-sm py-3 px-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        form.validateAll();
                        if (form.isValid()) {
                            setCurrentTab("contact");
                        }
                    }}
                >
                    Next
                </button>
            </div>
        </form>
    )
}