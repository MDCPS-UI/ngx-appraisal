/**
 * @interface
 */
interface InsertHealthOptions {
    data: any;
    healthInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertHealthReqPayload: Function =
(opts: InsertHealthOptions): any => {
    return {
        progress: opts.healthInfo.progress,
        id: +(opts.healthInfo.id),
        appraisalId: +(opts.healthInfo.appraisalId || ''),
        completedBy: opts.emailId,
        hasAdult: opts.data.hasAdult,
        medicalIssues: opts.data.medicalIssues,
        hasTraumaticEvent: opts.data.hasTraumaticEvent,
        isVictimPhysical: opts.data.isVictimPhysical,
        isVictimEmotional: opts.data.isVictimEmotional,
        isVictimSexual: opts.data.isVictimSexual,
        isVictimNeglect: opts.data.isVictimNeglect,
        isVictimOther: opts.data.isVictimOther,
        victimOtherText: opts.data.victimOtherText,
        lastDentalExam: opts.data.lastDentalExam,
        lastMedicalExam: opts.data.lastMedicalExam,
        lastVisionExam: opts.data.lastVisionExam,
        lastPsychExam: opts.data.lastPsychExam,
        isSexuallyActive: opts.data.isSexuallyActive,
        hasBeenTestedHIV: opts.data.hasBeenTestedHIV,
        lastHIVTestDate: opts.data.lastHIVTestDate,
        hivTestResults: opts.data.hivTestResults,
        hasBeenTestedSTD: opts.data.hasBeenTestedSTD,
        lastSTDTestDate: opts.data.lastSTDTestDate,
        stdTestResults: opts.data.stdTestResults,
        isMentalHealth: opts.data.isMentalHealth,
        isSubstanceAbuse: opts.data.isSubstanceAbuse,
        isLearningDisability: opts.data.isLearningDisability,
        isDevelopDisability: opts.data.isDevelopDisability,
        isPhysicalDisability: opts.data.isPhysicalDisability,
        isTakingMedication: opts.data.isTakingMedication,
        currentMedicationText: opts.data.currentMedicationText,
        areMedicationsAdministered: opts.data.areMedicationsAdministered,
        keepTrackOfAppointments: opts.data.keepTrackOfAppointments,
        goals: opts.healthInfo.goals,
        concerns: opts.healthInfo.concerns
    };
};
