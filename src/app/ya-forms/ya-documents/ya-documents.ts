/**
 * @interface
 */
interface InsertDocOptions {
    data: any;
    docInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertDocReqPayload: Function =
(opts: InsertDocOptions): any => {
    return {
        progress: opts.docInfo.progress,
        id: +(opts.docInfo.id),
        appraisalId: +(opts.docInfo.appraisalId || ''),
        completedBy: opts.emailId,
        hasBirthCert: opts.data.hasBirthCert,
        hasSSCard: opts.data.hasSSCard,
        hasMedicaidCard: opts.data.hasMedicaidCard,
        hasStateId: opts.data.hasStateId,
        hasCourtOrders: opts.data.hasCourtOrders,
        hasEdDocs: opts.data.hasEdDocs,
        hasDeathCert: opts.data.hasDeathCert,
        hasCitizenDocs: opts.data.hasCitizenDocs,
        hasMedRecords: opts.data.hasMedRecords,
        hasReligiousDocs: opts.data.hasReligiousDocs,
        hasListOfRelatives: opts.data.hasListOfRelatives,
        hasPreviousPlacement: opts.data.hasPreviousPlacement,
        hasPassport: opts.data.hasPassport,
        hasPhotographs: opts.data.hasPhotographs,
        hasResourceGuide: opts.data.hasResourceGuide,
        birthCertText: opts.data.birthCertText,
        ssCardText: opts.data.ssCardText,
        medicaidCardText: opts.data.medicaidCardText,
        stateIdText: opts.data.stateIdText,
        courtOrdersText: opts.data.courtOrdersText,
        edDocsText: opts.data.edDocsText,
        deathCertText: opts.data.deathCertText,
        citizenDocsText: opts.data.citizenDocsText,
        medRecordsText: opts.data.medRecordsText,
        religiousDocsText: opts.data.religiousDocsText,
        listOfRelativesText: opts.data.listOfRelativesText,
        previousPlacementText: opts.data.previousPlacementText,
        passportText: opts.data.passportText,
        photographsText: opts.data.photographsText,
        resourceGuideText: opts.data.resourceGuideText,
        concerns: opts.docInfo.concerns,
        goals: opts.docInfo.goals
    };
};
