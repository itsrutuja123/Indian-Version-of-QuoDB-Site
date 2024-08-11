
import axios from 'axios'

export const fetcher = (url: string) => axios.get(url).then((res: any) => res.data)


export const translate = async (data: any) => {
    const response = await axios.post('http://localhost:8000/v1/translate/translate-spec', data);
    return response.data;
}