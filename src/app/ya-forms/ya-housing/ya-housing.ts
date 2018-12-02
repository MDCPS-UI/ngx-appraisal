/**
 * @interface
 */
interface InsertHousingOptions {
    data: any;
    hsgInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertHsgReqPayload: Function =
(opts: InsertHousingOptions): any => {
    return {
        progress: opts.hsgInfo.progress,
        id: +(opts.hsgInfo.id),
        appraisalId: +(opts.hsgInfo.appraisalId || ''),
        completedBy: opts.emailId,
        housingPlan: opts.data.housingPlan,
        housingSituation: opts.data.housingSituation,
        currentHousingLength: opts.data.currentHousingLength,
        hasBeenHomeless: opts.data.hasBeenHomeless,
        homelessLength: opts.data.homelessLength,
        hasBeenEvicted: opts.data.hasBeenEvicted,
        evictedLength: opts.data.evictedLength,
        meetMonthlyObligations: opts.data.meetMonthlyObligations,
        monthlyObligationsText: opts.data.monthlyObligationsText,
        goals: opts.hsgInfo.goals,
        concerns: opts.hsgInfo.concerns
    };
};
