// In a real app, this would fetch from an API. 
// Here it just returns the config provided to the page.
export class LeadMagnetService {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    getData() {
        return this.config;
    }
}