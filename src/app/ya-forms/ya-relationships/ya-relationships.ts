/**
 * @interface
 */
interface InsertRltOptions {
    data: any;
    rltInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertRltReqPayload: Function =
(opts: InsertRltOptions): any => {
    return {
        body: {
        progress: opts.rltInfo.progress,
        id: +(opts.rltInfo.id),
        appraisalId: +(opts.rltInfo.appraisalId || ''),
        completedBy: opts.emailId,
        isPartnerAbusiveVerbal: opts.data.abusivePartner.isPartnerAbusiveVerbal,
        isPartnerAbusiveEmotional: opts.data.abusivePartner.isPartnerAbusiveEmotional,
        isPartnerAbusivePhysical: opts.data.abusivePartner.isPartnerAbusivePhysical,
        isInRelationship: opts.data.isInRelationship,
        currentlyLeavingRelationship: opts.data.currentlyLeavingRelationship,
        forcedSexAgainstMe: opts.data.forcedSexAgainstMe,
        forcedSexAgainstOther: opts.data.forcedSexAgainstOther,
        isAfraidOfPartner: opts.data.isAfraidOfPartner,
        isCurrentProstitution: opts.data.isCurrentProstitution,
        hasReceivedGoodsForSex: opts.data.hasReceivedGoodsForSex,
        goals: opts.rltInfo.goals,
        concerns: opts.rltInfo.concerns
        }
    };
};
