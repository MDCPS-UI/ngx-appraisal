// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { EnvBaseConfig } from './environment.config';

// set the production environment to true
// export the new configuration
class EnvConfig extends EnvBaseConfig {
  constructor() {
    super();
    this.production = true;
  }
}

// export the new configuration
export const environment: any = { ...new EnvConfig() };