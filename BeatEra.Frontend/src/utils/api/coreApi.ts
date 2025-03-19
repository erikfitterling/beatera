import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export class CoreApi {
    protected client: AxiosInstance;
    protected baseUrl: string;

    constructor(baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api') {
        this.baseUrl = baseUrl;
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // this.client.interceptors.request.use(
        //     (config) => {
        //         const token = localStorage.getItem('token');
        //         if (token) {
        //             config.headers.Authorization = `Bearer ${token}`;
        //         }
        //         return config;
        //     },
        //     (error) => Promise.reject(error)
        // );
    }

    protected async get<T = any>(url: string): Promise<AxiosResponse<T>> {
        try {
            return await this.client.get<T>(url);
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    protected async post<T = any>(url: string, data?: any): Promise<AxiosResponse<T>> {
        try {
            return await this.client.post<T>(url, data);
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    protected async put<T = any>(url: string, data?: any): Promise<AxiosResponse<T>> {
        try {
            return await this.client.put<T>(url, data);
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    protected async delete<T = any>(url: string): Promise<AxiosResponse<T>> {
        try {
            return await this.client.delete<T>(url);
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    protected handleError(error: AxiosError): void {
        if (error.response) {
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
    }
}

export default CoreApi;