import axios from "axios";

const apiKey = "5d9f48133cbe87164d4bb12c";
const baseUrl = "https://recruitmentdb-508d.restdb.io/rest";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-apikey": apiKey,
  },
});

export const fetchAccounts = async () => {
  try {
    const response = await api.get("/accounts");
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const fetchAccountTypes = async () => {
  try {
    const response = await api.get("/accounttypes");
    return response.data;
  } catch (error) {
    console.error("Error fetching account types:", error);
    throw error;
  }
};
