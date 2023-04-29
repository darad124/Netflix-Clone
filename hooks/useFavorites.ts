import useSWR from "swr"
import fetcher from "@/lib/fetcher"

const useFavorites = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnPurpose: false,
        revalidateOnReconnect:false,
    });
    return{
        data, error, isLoading, mutate
    }
};
export default useFavorites