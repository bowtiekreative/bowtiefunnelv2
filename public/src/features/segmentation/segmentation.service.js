export class SegmentationService {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    getData() {
        return this.config;
    }
}