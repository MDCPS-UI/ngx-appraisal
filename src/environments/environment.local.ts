import { EnvBaseConfig } from './environment.config';

// set the production environment to true
// export the new configuration
class EnvConfig extends EnvBaseConfig {
  constructor() {
    super();
    this.local = true;
    this.production = true;
  }
}

// export the new configuration
export const environment: any = { ...new EnvConfig() };
