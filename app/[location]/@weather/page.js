import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({
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
            return <WeatherComponent lat={latitude} lon={longitude} />;
        } else {
            return <NoLocationInfo />;
        }
    }
};

export default WeatherPage;
