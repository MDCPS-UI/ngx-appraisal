/**
 * @interface
 */
interface InsertEmppOptions {
    data: any;
    empInfo: any;
    emailId: any;
}

/**
 * @constant
 */
export const getEmpReqPayload: Function =
(opts: InsertEmppOptions): any => {
    return {
        progress: opts.empInfo.progress,
        id: +(opts.empInfo.id),
        appraisalId: +(opts.empInfo.appraisalId || ''),
        completedBy: opts.emailId,
        isDisabled: opts.data.isDisabled,
        isDisabledSSI: opts.data.isDisabilitySSI,
        isDisabledSSA: opts.data.isDisabledSSA,
        isDisabilityNone: opts.data.isDisabilityNone,
        disabilityExplain: opts.data.disabilityExplain,
        hasHadJob: opts.data.hasHadJob,
        hasChildCare: opts.data.hasChildCare,
        hasFoodServices: opts.data.hasFoodServices,
        hasHealthCare: opts.data.hasHealthCare,
        hasClerical: opts.data.hasClerical,
        hasMechanical: opts.data.hasMechanical,
        hasElectrical: opts.data.hasElectrical,
        hasSales: opts.data.hasSales,
        hasCustService: opts.data.hasCustService,
        hasOther: opts.data.hasOther,
        hasOtherExplain: opts.data.hasOtherExplain,
        employmentType: opts.data.employmentType,
        employmentLength: opts.data.employmentLength,
        enrolledEmpBenefit: opts.data.enrolledEmpBenefit,
        hourlyPayRate: opts.data.hourlyPayRate,
        hourlyPayOtherExplain: opts.data.hourlyPayOtherExplain,
        goals: opts.empInfo.goals,
        concerns: opts.empInfo.concerns
    };
};
