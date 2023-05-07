import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "react-query";

const apiUrl = 'http://localhost:8080/';

const dados = async (): AxiosPromise<FoodData[]> => {
    const res = await axios.get(`${apiUrl}food`);
    return res;
}
export function useFoodData() {
    const query = useQuery({
        queryFn: dados,
        queryKey: ['food-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
}