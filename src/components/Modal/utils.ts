export const formMetadata:IFormArgs<ProfileFormValues> = {
    initialValues: {
        name: "",
        email: "",
        phone: "",
        instagram: "",
        youtube: "",
    },
    validate: {
        name: (value: string) => value.trim().length > 0 ? null : 'Name is required',
        email: (value: string) => {
            if(value.trim().length === 0) return 'Email is required';

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? null : 'Invalid email format';
        },
        phone: (value: string) => {
            if(value.trim().length === 0) return 'Phone is required';

            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(value) ? null : 'Invalid phone format';
        },
        instagram: (value: string) => {
            if (value.trim().length === 0) return null;

            //check if url is valid
            const urlRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/;
            if (!urlRegex.test(value)) return 'Invalid instagram url format';
            return null;
        },
        youtube: (value: string) => {
            if (value.trim().length === 0) return null;

            //check if url is valid
            const urlRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/[a-zA-Z0-9_]+\/?$/;
            if (!urlRegex.test(value)) return 'Invalid youtube url format';
            return null;
        },
    },
}
