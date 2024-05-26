import {useState} from "react";
type FetchingFunction = () => Promise<void>;

export const useFetching = (callback: FetchingFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e: any) {
            setError(e.messsage);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error] as const;
}