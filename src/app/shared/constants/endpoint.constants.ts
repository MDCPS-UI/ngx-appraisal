/**
 * @constant
 */
const __base__: string = 'http://10.15.66.88:5100/YTL/JSON';

/**
 * @constant
 */
export const endpoints: any = {
    'GET_CHILDREN': `${__base__}/GetChildren`,
    'GET_NAVIGATION_WORKERS': `${__base__}/GetNavigationWorkers`,
    'GET_DMG_INFO': `${__base__}/GetDemographicInfo?appraisalId=${0}`,
    'CREATE_APPRAISAL': `${__base__}/CreateAppraisal?childMacwisId=${0}&workerEmail=${1}`
};
