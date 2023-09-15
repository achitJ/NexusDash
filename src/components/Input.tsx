type InputProps = {
    placeholder: string, 
    label: string, 
    error: string | null, 
    value: string, 
    onChange: (e: any) => void, 
    required?: boolean
};

export function ProfileInput({ 
    placeholder, label, error, value, onChange, required = false 
} : InputProps) {
    const errorBorder = error ? "border-red-500" : "";

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {`${label}${required ? '*' : '(optional)'}`}
            </label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorBorder}`}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
}