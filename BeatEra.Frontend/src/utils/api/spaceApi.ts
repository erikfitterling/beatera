import { AxiosResponse } from 'axios';
import CoreApi from './coreApi';
import { Space } from '../../state/models/Space';

class SpaceApi extends CoreApi {
    async getSpaces() {
        return this.get('/spaces');
    }

    async getSpace(id: string) {
        return this.get(`/spaces/${id}`);
    }

    async createSpace(title: string): Promise<AxiosResponse<Space>> {
        const data = new Space(title);
        return this.post<Space>('/spaces', data);
    }

    async updateSpace(id: string, data: any) {
        return this.put(`/spaces/${id}`, data);
    }

    async deleteSpace(id: string) {
        return this.delete(`/spaces/${id}`);
    }
}

const spaceApi = new SpaceApi();
export default spaceApi;