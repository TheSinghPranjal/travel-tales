import axios from "axios";

const url = 'https://run.mocky.io/v3/5a42ff2d-929c-4e83-83df-c7ad4d49fbf3';

export const getAllTripDetails = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data; // Return the fetched data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Error:', error);
        }
    }
};
