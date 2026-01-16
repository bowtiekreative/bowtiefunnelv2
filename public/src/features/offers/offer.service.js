export class OfferService {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    getData() {
        return this.config;
    }
}