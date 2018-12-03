/**
 * @interface
 */
interface InsertStipendsOptions {
    data: any;
    stipendsInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertStpdReqPayload: Function =
(opts: InsertStipendsOptions): any => {
    return {
        body: {
        id: +(opts.stipendsInfo.id),
        progress: opts.stipendsInfo.progress,
        appraisalId: +(opts.stipendsInfo.appraisalId),
        completedBy: opts.emailId,
        startUpStipendRequested: opts.data.startUpStipendRequested,
        personalStipendRequested: opts.data.personalStipendRequested,
        seniorStipendRequestDate: opts.data.seniorStipendRequestDate || '',
        startUpStipendRequestDate: opts.data.startUpStipendRequestDate || '',
        lifeSkillStipendRequested: opts.data.lifeSkillStipendRequested,
        seniorYearStipendRequested: opts.data.seniorYearStipendRequested,
        personalStipendRequestDate: opts.data.personalStipendRequestDate || '',
        lifeSkillStipendRequestDate: opts.data.lifeSkillStipendRequestDate || '',
        startUpStipendRequestedOther: opts.data.startUpStipendRequestedOther || '',
        graduationStipendRequestDate: opts.data.graduationStipendRequestDate || '',
        collegeBoundStipendRequested: opts.data.collegeBoundStipendRequested,
        personalStipendRequestedOther: opts.data.personalStipendRequestedOther || '',
        lifeSkillStipendRequestedOther: opts.data.lifeSkillStipendRequestedOther || '',
        collegeBoundStipendRequestDate: opts.data.collegeBoundStipendRequestDate || '',
        graduationYearStipendRequested: opts.data.graduationYearStipendRequested,
        seniorYearStipendRequestedOther: opts.data.seniorYearStipendRequestedOther || '',
        collegeBoundStipendRequestedOther: opts.data.collegeBoundStipendRequestedOther || '',
        graduationYearStipendRequestedOther: opts.data.graduationYearStipendRequestedOther || '',
        concerns: opts.stipendsInfo.concerns,
        goals: opts.stipendsInfo.goals
        }
    };
};
