import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api/userApi.js';

export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
    });
};