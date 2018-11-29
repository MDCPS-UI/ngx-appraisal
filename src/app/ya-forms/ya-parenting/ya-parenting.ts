/**
 * @interface
 */
interface InsertPrtgOptions {
    data: any;
    prtgInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertPrtgReqPayload: Function = 
(opts: InsertPrtgOptions): any => {
    return {
        progress: opts.prtgInfo.progress,
        id: +(opts.prtgInfo.id),
        appraisalId: +(opts.prtgInfo.appraisalId || ''),
        completedBy: opts.emailId,
        isPregnant: opts.data.isPregnant,
        isReceivingPrenatalCare: opts.data.isReceivingPrenatalCare,
        isParent: opts.data.isParent,
        childNamesAndAges: opts.data.childNamesAndAges,
        childrenLiveWithYou: opts.data.childrenLiveWithYou,
        iHaveLegalCustody: opts.data.iHaveLegalCustody,
        noLegalCustodyExplain: opts.data.noLegalCustodyExplain,
        missSchoolBecauseParenting: opts.data.missSchoolBecauseParenting,
        hasHadInvestigation: opts.data.hasHadInvestigation,
        childrenHaveMedIssues: opts.data.childrenHaveMedIssues,
        childrenMedIssuesExplain: opts.data.childrenMedIssuesExplain,
        haveMedicalInsurance: opts.data.haveMedicalInsurance,
        receivingChildSupport: opts.data.receivingChildSupport,
        childSupportAmount: opts.data.childSupportAmount,
        noChildSupportExplain: opts.data.noChildSupportExplain,
        payingChildSupport: opts.data.payingChildSupport,
        otherParentInvolved: opts.data.otherParentInvolved,
        otherParentInvolvedExplain: opts.data.otherParentInvolvedExplain,
        childrenInDaycare: opts.data.childrenInDaycare,
        childrenRegularlyCaredFor: opts.data.childrenRegularlyCaredFor,
        payVoucher: opts.data.payVoucher,
        payOwnFunds: opts.data.payOwnFunds,
        payChildSupport: opts.data.payChildSupport,
        payOutsideSource: opts.data.payOutsideSource,
        payNA: opts.data.payNA,
        goals: opts.prtgInfo.goals,
        concerns: opts.prtgInfo.concerns
    }
}