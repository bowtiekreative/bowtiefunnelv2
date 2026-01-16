export class ServiceListingService {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    getData() {
        return this.config;
    }
}