import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        setSearchQuery(value);
    };

    return (
        <div className="relative h-10 hidden lg:block">
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-50 shadow-sm sm:text-sm"
                onChange={handleSearch}
                value={searchQuery}
            />

            <span className="absolute inset-y-0 end-0 grid w-8 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <IconSearch size={20}/>
                </button>
            </span>
        </div>
    )
}