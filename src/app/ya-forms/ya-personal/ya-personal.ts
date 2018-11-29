/**
 * @interface
 */
interface InsertPersonalOptions {
    data: any;
    personalInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertPersonalPayload: Function =
(opts: InsertPersonalOptions): any => {
    return {
        progress: opts.personalInfo.progress,
        id: +(opts.personalInfo.id),
        appraisalId: +(opts.personalInfo.appraisalId || ''),
        completedBy: opts.emailId,
        isEducation: opts.data.supportInNext6Months.isEducation,
        isEmployment: opts.data.supportInNext6Months.isEmployment,
        isParenting: opts.data.supportInNext6Months.isParenting,
        isMentalHealth: opts.data.supportInNext6Months.isMentalHealth,
        isTransportation: opts.data.supportInNext6Months.isTransportation,
        isMedical: opts.data.supportInNext6Months.isMedical,
        isOther: opts.data.supportInNext6Months.isOther,
        otherText: opts.data.supportInNext6Months.otherText,
        oneGoalSixMonths: opts.data.oneGoalSixMonths,
        currentChallenges: opts.data.currentChallenges,
        whatMotivatesYou: opts.data.whatMotivatesYou,
        supportLooksLike: opts.data.supportLooksLike,
        hasTransportation: opts.data.hasTransportation,
        transportationKind: opts.data.transportationKind,
        transportationBarriers: opts.data.transportationBarriers,
        transportationPlans: opts.data.transportationPlans,
        goals: opts.personalInfo.goals,
        concerns: opts.personalInfo.concerns
    }
}