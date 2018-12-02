
/**
 * @interface
 */
 interface InsertSkillsOptions {
     data: any;
     skillsInfo: any;
     emailId: string;
 }

 /**
  * @constant
  */
 export const getInsertSkillsReqPayload: Function =
  (opts: InsertSkillsOptions): any => {
      return {
        id: +(opts.skillsInfo.id),
        progress: opts.skillsInfo.progress,
        appraisalId: +(opts.skillsInfo.appraisalId),
        completedBy: opts.emailId,
        iCanUseEmailAccount: opts.data.iCanUseEmailAccount,
        iCanMakeMealsWithoutRecipe: opts.data.iCanMakeMealsWithoutRecipe,
        iCanDoMyOwnLaundry: opts.data.iCanDoMyOwnLaundry,
        iCanGetMedicalDentalCareWhenNeeded: opts.data.iCanGetMedicalDentalCareWhenNeeded,
        iBatheDaily: opts.data.iBatheDaily,
        iBrushTeethDaily: opts.data.iBrushTeethDaily,
        iCanGetAwayFromHarmfulSituations: opts.data.iCanGetAwayFromHarmfulSituations,
        iCanSpeakUpForMyself: opts.data.iCanSpeakUpForMyself,
        iKnowSignsOfAbusiveRelationship: opts.data.iKnowSignsOfAbusiveRelationship,
        iCanDealWithAnger: opts.data.iCanDealWithAnger,
        iCanBalanceBankAccount: opts.data.iCanBalanceBankAccount,
        iCanDevelopABudget: opts.data.iCanDevelopABudget,
        iCanCreateAResume: opts.data.iCanCreateAResume,
        iCanCompleteAJobApplication: opts.data.iCanCompleteAJobApplication,
        iKnowHowToPrepareForInterview: opts.data.iKnowHowToPrepareForInterview,
        iCanDescribeVisionForMyself: opts.data.iCanDescribeVisionForMyself,
        iKnowHowToDrive: opts.data.iKnowHowToDrive,
        hasHadEducationalSupport: opts.data.hasHadEducationalSupport,
        hasHadEmploymentServices: opts.data.hasHadEmploymentServices,
        hasHadHealthCare: opts.data.hasHadHealthCare,
        hasHadMoneyManagement: opts.data.hasHadMoneyManagement,
        hasHadHousing: opts.data.hasHadHousing,
        hasHadAfterCare: opts.data.hasHadAfterCare,
        hasHadETV: opts.data.hasHadETV,
        goals: opts.skillsInfo.goals,
        concerns: opts.skillsInfo.concerns
      };
  };
