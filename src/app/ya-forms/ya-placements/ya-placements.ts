/**
 * @interface
 */
interface InsertPlacementsOptions {
    data: any;
    plcInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertPlcReqPayload: Function =
(opts: InsertPlacementsOptions): any => {
    return {
        body: {
        progress: opts.plcInfo.progress,
        id: +(opts.plcInfo.id),
        appraisalId: +(opts.plcInfo.appraisalId || ''),
        completedBy: opts.emailId
        }
    };
};
