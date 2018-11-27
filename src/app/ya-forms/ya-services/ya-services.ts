/**
 * @interface
 */
interface InsertServicesOptions {
    data: any;
    srvcInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertSrvcReqPayload: Function =
(opts: InsertServicesOptions): any => {
    return {
        id: +(opts.srvcInfo.id),
        progress: opts.srvcInfo.progress,
        appraisalId: +(opts.srvcInfo.appraisalId),
        completedBy: opts.emailId,
        goals: opts.srvcInfo.goals,
        concerns: opts.srvcInfo.concerns,
        medicaid: opts.data.medicaid,
        medicaidOtherText: opts.data.medicaidOtherText,
        mentalHealth: opts.data.mentalHealth,
        mentalHealthOtherText: opts.data.mentalHealthOtherText,
        parentingClasses: opts.data.parentingClasses,
        parentingClassesOtherText: opts.data.parentingClassesOtherText,
        transportation: opts.data.transportation,
        transportationOtherText: opts.data.transportationOtherText,
        snap: opts.data.snap,
        snapOtherText: opts.data.snapOtherText,
        tanf: opts.data.tanf,
        tanfOtherText: opts.data.tanfOtherText,
        childCareVoucher: opts.data.childCareVoucher,
        childCareVoucherOtherText: opts.data.childCareVoucherOtherText,
        locateHousing: opts.data.locateHousing,
        locateHousingOtherText: opts.data.locateHousingOtherText,
        scheduleCounseling: opts.data.scheduleCounseling,
        scheduleCounselingOtherText: opts.data.scheduleCounselingOtherText,
        other: opts.data.other,
        otherOtherText: opts.data.otherOtherText,
        notes: opts.data.notes
    }
}