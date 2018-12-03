
/**
 * @interface
 */

 interface InsertCriminalOptions {
     data: any;
     criminalInfo: any;
     emailId: string;
 }

 /**
 * @constant
 */
export const getInsertCriminalInfoReqPayload: Function =
(opts: InsertCriminalOptions): any => {
    return {
        body: {
        id: +(opts.criminalInfo.id),
        progress: opts.criminalInfo.progress,
        appraisalId: +(opts.criminalInfo.appraisalId),
        completedBy: opts.emailId,
        hasBeenArrested: opts.data.hasBeenArrested,
        hasBeenConvicted: opts.data.hasBeenConvicted,
        hasCurrentWarrant: opts.data.hasCurrentWarrant,
        isOnProbation: opts.data.isOnParole,
        hasLegalRepresentation: opts.data.hasLegalRepresentation,
        isOnParole: opts.data.isOnParole,
        hasOpenCase: opts.data.hasOpenCase,
        isFreeOnBond: opts.data.isFreeOnBond,
        hasGangActivity: opts.data.hasGangActivity,
        gangActivityText: opts.data.gangActivityText || '',
        possessWeapon: opts.data.possessWeapon,
        concerns: opts.criminalInfo.concerns,
        goals: opts.criminalInfo.goals
        }
    };
};
