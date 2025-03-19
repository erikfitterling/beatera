import CoreApi from './coreApi';

class SpaceApi extends CoreApi {
    async getSpaces() {
        return this.get('/spaces');
    }

    async getSpace(id: string) {
        return this.get(`/spaces/${id}`);
    }

    async createSpace(title: string, pointsToWin: number, timeLimit: number) {
        const data = {
            title: title,
            pointsToWin: pointsToWin,
            timeLimit: timeLimit
        };
        return this.post('/spaces', data);
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