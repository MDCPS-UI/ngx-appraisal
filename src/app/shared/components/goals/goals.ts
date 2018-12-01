import { FormControl } from '@angular/forms';

/**
 * @class
 */
export class Goal {
    /**
     * @public
     * @type: any
     */
    public fields: any;
    /**
     * @constructor
     */
    constructor() {
      this.fields = {
        tasks: new FormControl('', []),
        goalText: new FormControl('', []),
        progress: new FormControl('', []),
        personResp: new FormControl('', []),
        goalsCompleteDt: new FormControl('', [])
      };
    }
  }

  /**
 * @class
 */
export class Concern {
    /**
     * @public
     * @type: any
     */
    public fields: any;
    /**
     * @constructor
     */
    constructor() {
      this.fields = {
        personText: new FormControl('', []),
        concernsText: new FormControl('', []),
        concCompleteDt: new FormControl('', []),
        resolutionsText: new FormControl('', [])
      };
    }
  }
