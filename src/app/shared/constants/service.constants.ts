import { environment } from './../../../environments/environment';

/**
 * @constant
 */
const __local_switch__: any = {
    getDmgInfo: true,
    saveDmgInfo: true,
    getCounties: true,
    getNavWorkers: true,
    getAllChildren: true,
    createAppraisal: true
};

/**
 * @constant
 */
const __base__: string = 'http://10.15.66.88:5100/YTL.YTL.svc/JSON';

/**
 * @function
 */
const shouldUseLocal: Function = (serviceName): boolean => {
    return environment.local && __local_switch__[serviceName];
};

/**
 * @constant
 * @config
 */
export const serviceConstants: any = {
    getAllChildren: {
        method: 'GET',
        url: `${__base__}/GetAllChildren`,
        localUrl: '/assets/api/getAllChildren.json',
        isLocal:  shouldUseLocal('getAllChildren')
    },
    getNavWorkers: {
        method: 'GET',
        url: `${__base__}/GetNavigationWorkers`,
        localUrl: '/assets/api/getNavWorkers.json',
        isLocal:  shouldUseLocal('getNavWorkers')
    },
    getDmgInfo: {
        method: 'GET',
        url: `${__base__}/GetDemographicInfo?appraisalId={0}`,
        localUrl: '/assets/api/getDmgInfo.json',
        isLocal:  shouldUseLocal('getDmgInfo')
    },
    saveDmgInfo: {
        method: 'POST',
        url: `${__base__}/InsertDemographicInfo?appraisalId={0}`,
        localUrl: '/assets/api/saveDmgInfo.json',
        isLocal:  shouldUseLocal('saveDmgInfo')
    },
    createAppraisal: {
        method: 'GET',
        url: `${__base__}/CreateAppraisal?childMacwisId={0}&workerEmail={1}`,
        localUrl: '/assets/api/createAppraisal.json',
        isLocal:  shouldUseLocal('createAppraisal')
    },
    getCounties: {
        method: 'GET',
        url: `${__base__}/GetCounties`,
        localUrl: '/assets/api/getCounties.json',
        isLocal:  shouldUseLocal('getCounties')
    }
};