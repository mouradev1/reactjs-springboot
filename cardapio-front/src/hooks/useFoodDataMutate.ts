import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQuery, useQueryClient } from "react-query";

const apiUrl = 'http://localhost:8080/';

const dados = async (data: FoodData): AxiosPromise<any> => {
    const res = await axios.post(`${apiUrl}food`, data);
    return res;
}
export function useFoodDataMudate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: dados,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries('food-data')
        }
    })
    return mutate;
}