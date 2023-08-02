import axios from "axios";
import axiosClient from "./index";

// get request
export const getRequest = async (url: string) => {
    try {
      const response = await axiosClient.get(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇 error: AxiosError<any, any>
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
  
  // post request
  export const postRequest = async (url: string, postData: any) => {
    try {
      const response = await axiosClient.post(url, postData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇 error: AxiosError<any, any>
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
  
  // patch request
  export const patchRequest = async (url: string, postData: any) => {
    try {
      const response = await axiosClient.patch(url, postData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 👇 error: AxiosError<any, any>
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  };
  
  // delete request
  export const deleteRequest = async (url: string) => {
    try {
      const response = await axiosClient.delete(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇 error: AxiosError<any, any>
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
  