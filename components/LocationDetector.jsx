"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set("latitude", position.coords.latitude);
                params.set("longitude", position.coords.longitude);
                setLoading(false);

                router.push(`/current?${params.toString()}`);
            });
        }
    }, [pathName, searchParams]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            {loading && (
                <div className="flex flex-col justify-center items-center font-bold text-2xl p-5 rounded-lg text-slate-800 bg-slate-200 ">
                    {" "}
                    Detecting Locstion ...
                </div>
            )}
        </div>
    );
};

export default LocationDetector;
