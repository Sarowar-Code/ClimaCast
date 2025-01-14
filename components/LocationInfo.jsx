import { getLocationData } from "@/lib/location-info";
import Image from "next/image";

const LocationInfo = async ({ lat, lon }) => {
    const locationData = await getLocationData(lat, lon);

    return (
        <div class="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
            <div>
                <div class="mb-2 flex items-center gap-2">
                    <h2 class="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
                        {locationData?.continent}
                    </h2>
                    <div class="relative">
                        <button>
                            <Image
                                class="size-9"
                                src="/icons/link.svg"
                                alt="link icon"
                                height={200}
                                width={200}
                            />
                        </button>
                        {/* <div class="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                            <ul
                                role="list"
                                class="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                            >
                                <li>Kolkata</li>
                                <li>Dhaka</li>
                                <li>London</li>
                                <li>Amsterdam</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <p class="text-lg text-[#C4C4C4] lg:text-xl">
                    {locationData?.countryName} | {locationData?.city}
                </p>
                <div class="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
                    <span>{new Date().toLocaleTimeString()}</span>{" "}
                    <span>{new Date().toDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
