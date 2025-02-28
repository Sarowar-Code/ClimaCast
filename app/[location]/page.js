import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    {
        const resolved = await getResolvedLatLong(
            location,
            latitude,
            longitude
        );

        if (resolved?.lat && resolved?.lon) {
            return <LocationInfo lat={latitude} lon={longitude} />;
        } else {
            return <NoLocationInfo />;
        }
    }
};

export default LocationPage;
