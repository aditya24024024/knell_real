import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { categories } from "../../utils/categories";

function Services() {
    const router = useRouter();
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-10">
            <h2 className="text-4xl mb-10 text-[#404145] font-bold">
                You need it, we&apos;ve got it
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10"> {/* Fixed `grid-col-5` to `grid-cols-5` */}
                {categories.map(({ name, logo }) => {
                    if (!name?.trim()) return null; // Skip if name is empty or only whitespace

                    return (
                        <li
                            key={name}
                            className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:border-[#1DBF73] border-2 border-transparent p-5 transition-all duration-500"
                            onClick={() =>
                                router.push(`/search?category=${name || "default-category"}`)
                            }
                        >
                            <Image src={logo} alt={name} height={50} width={50} />
                            <span>{name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Services;
