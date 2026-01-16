export class ApplicationService {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    getData() {
        return this.config;
    }
}