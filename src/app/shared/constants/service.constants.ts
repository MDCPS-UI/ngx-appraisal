import { environment } from './../../../environments/environment';

/**
 * @constant
 */
const __local_switch__: any = {
    getDmgInfo: true,
    saveDmgInfo: true,
    getCounties: true,
    getAllWorkers: true,
    getNavWorkers: true,
    getAllChildren: true,
    createAppraisal: true
};

/**
 * @constant
 */
const __base__: string = 'http://10.15.66.88:5100/YTL.YTL.svc/JSON';
// const __base__: string = 'http://10.15.66.88:5100/YTL/JSON';
// const __base__: string = 'http://10.160.96.34:5100/YTL.ytl.svc/JSON';

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
    getAllWorkers: {
        method: 'GET',
        url: `${__base__}/GetAllWorkers`,
        localUrl: '/assets/api/getNavWorkers.json',
        isLocal:  shouldUseLocal('getAllWorkers')
    },
    getDmgInfo: {
        method: 'GET',
        url: `${__base__}/GetDemographicInfo?appraisalId={0}`,
        localUrl: '/assets/api/getDmgInfo.json',
        isLocal:  shouldUseLocal('getDmgInfo')
    },
    saveDmgInfo: {
        method: 'POST',
        url: `${__base__}/InsertDemographicInfo`,
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
    },
    getEduInfo: {
        method: 'GET',
        url: `${__base__}/GetEducationInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-educationInfo.service.ts',
        isLocal:  shouldUseLocal('getEduInfo')
    },
    saveEduInfo: {
        method: 'POST',
        url: `${__base__}/InsertEducationInfo?appraisalId={0}`,
        localUrl: '/assets/api/insert-educationInfo.service.ts',
        isLocal:  shouldUseLocal('saveEduInfo')
    },
    getEmpInfo: {
        method: 'GET',
        url: `${__base__}/GetEmploymentInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-employmentinfo.service.ts',
        isLocal:  shouldUseLocal('getEmpInfo')
    },
    saveEmpInfo: {
        method: 'POST',
        url: `${__base__}/InsertEmploymentInfo`,
        localUrl: '/assets/api/insert-employmentinfo.service.ts',
        isLocal:  shouldUseLocal('saveEmpInfo')
    },
    getSocialInfo: {
        method: 'GET',
        url: `${__base__}/GetSocialInterestInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-socialInterests.service.ts',
        isLocal:  shouldUseLocal('getSocialInfo')
    },
    saveSocialInfo: {
        method: 'POST',
        url: `${__base__}/InsertSocialInterestInfo`,
        localUrl: '/assets/api/insert-socialInterests.service.ts',
        isLocal:  shouldUseLocal('saveSocialInfo')
    },
    getHousingInfo: {
        method: 'GET',
        url: `${__base__}/GetHousingInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-housing-info.service.ts',
        isLocal:  shouldUseLocal('getHousingInfo')
    },
    saveHousingInfo: {
        method: 'POST',
        url: `${__base__}/InsertHousingInfo`,
        localUrl: '/assets/api/insert-housing-info.service.ts',
        isLocal:  shouldUseLocal('saveHousingInfo')
    },
    getPlacementsInfo: {
        method: 'GET',
        url: `${__base__}/GetPlacementSafetyInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-placements.service.ts',
        isLocal:  shouldUseLocal('getPlacementsInfo')
    },
    savePlacementsInfo: {
        method: 'POST',
        url: `${__base__}/InsertPlacementSafetyInfo`,
        localUrl: '/assets/api/insert-placements.service.ts',
        isLocal:  shouldUseLocal('savePlacementsInfo')
    },
    getParentingInfo: {
        method: 'GET',
        url: `${__base__}/GetPregnantParentingInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-parenting.service.ts',
        isLocal:  shouldUseLocal('getParentingInfo')
    },
    saveParentingInfo: {
        method: 'POST',
        url: `${__base__}/InsertPregnantParentingInfo`,
        localUrl: '/assets/api/insert-parenting.service.ts',
        isLocal:  shouldUseLocal('saveParentingInfo')
    },
    getHealthInfo: {
        method: 'GET',
        url: `${__base__}/GetHealthInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-health.service.ts',
        isLocal:  shouldUseLocal('getHealthInfo')
    },
    saveHealthInfo: {
        method: 'POST',
        url: `${__base__}/InsertHealthInfo`,
        localUrl: '/assets/api/insert-health.service.ts',
        isLocal:  shouldUseLocal('saveHealthInfo')
    },
    getRelationInfo: {
        method: 'GET',
        url: `${__base__}/GetRelationshipInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-relationships.service.ts',
        isLocal:  shouldUseLocal('getRelationInfo')
    },
    saveRelationInfo: {
        method: 'POST',
        url: `${__base__}/InsertRelationshipInfo`,
        localUrl: '/assets/api/insert-relationships.service.ts',
        isLocal:  shouldUseLocal('saveRelationInfo')
    },
    getCriminalInfo: {
        method: 'GET',
        url: `${__base__}/GetCriminalJusticeInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-criminal.service.ts',
        isLocal:  shouldUseLocal('getCriminalInfo')
    },
    saveCriminalInfo: {
        method: 'POST',
        url: `${__base__}/InsertCriminalJusticeInfo`,
        localUrl: '/assets/api/insert-criminal.service.ts',
        isLocal:  shouldUseLocal('saveCriminalInfo')
    },
    getSkillsInfo: {
        method: 'GET',
        url: `${__base__}/GetLifeSkillInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-skills.service.ts',
        isLocal:  shouldUseLocal('getSkillsInfo')
    },
    saveSkillsInfo: {
        method: 'POST',
        url: `${__base__}/InsertLifeSkillInfo`,
        localUrl: '/assets/api/insert-skills.service.ts',
        isLocal:  shouldUseLocal('saveSkillsInfo')
    },
    getStipendInfo: {
        method: 'GET',
        url: `${__base__}/GetStipendInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-stipend.service.ts',
        isLocal:  shouldUseLocal('getStipendInfo')
    },
    saveStipendInfo: {
        method: 'POST',
        url: `${__base__}/InsertStipendInfo`,
        localUrl: '/assets/api/insert-stipend.service.ts',
        isLocal:  shouldUseLocal('saveStipendInfo')
    },
    getCssInfo: {
        method: 'GET',
        url: `${__base__}/GetCssInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-support-services.service.ts',
        isLocal:  shouldUseLocal('getCssInfo')
    },
    saveCssInfo: {
        method: 'POST',
        url: `${__base__}/InsertCssInfo`,
        localUrl: '/assets/api/insert-support-services.service.ts',
        isLocal:  shouldUseLocal('saveCssInfo')
    },
    getPersonalInfo: {
        method: 'GET',
        url: `${__base__}/GetPersonalInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-personal.service.ts',
        isLocal:  shouldUseLocal('getPersonalInfo')
    },
    savePersonalInfo: {
        method: 'POST',
        url: `${__base__}/InsertPersonalInfo`,
        localUrl: '/assets/api/insert-personal.service.ts',
        isLocal:  shouldUseLocal('savePersonalInfo')
    },
    getDocumentInfo: {
        method: 'GET',
        url: `${__base__}/GetDocumentInfo?appraisalId={0}`,
        localUrl: '/assets/api/get-documents.service.ts',
        isLocal:  shouldUseLocal('getDocumentInfo')
    },
    saveDocumentInfo: {
        method: 'POST',
        url: `${__base__}/InsertDocumentInfo`,
        localUrl: '/assets/api/insert-documents.service.ts',
        isLocal:  shouldUseLocal('saveDocumentInfo')
    },
    savePerson: {
        method: 'POST',
        url: `${__base__}/InsertPersonObject`

    }
};