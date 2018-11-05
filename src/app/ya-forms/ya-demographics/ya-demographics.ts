
/**
 * @interface
 */
interface InsertDmgOptions {
    data: any;
    dmgInfo: any;
    emailId: string;
}

/**
 * @constant
 */
export const getInsertDmgReqPayload: Function =
  (opts: InsertDmgOptions): any => {

  return {
    // completeDt: "/Date(1530566560000-0500)/",
    // commitDt: "/Date(1530566560000-0500)/",
    progress: opts.dmgInfo.progress,
    id: opts.dmgInfo.id,
    appraisalId: +(opts.dmgInfo.appraisalId || ''),
    completedBy: opts.emailId,
    youthName: opts.data.youthName,
    age: opts.data.age,
    dob: opts.data.dob,
    race: opts.data.race,
    gender: opts.data.gender,
    phone: opts.data.phone,
    email: opts.data.email,
    custodyStatus: opts.data.custodyStatus,
    dischargeDate: opts.data.dischargeDate,
    isLGBTQ: opts.data.isLGBTQ,
    isLesbian: opts.data.isLesbian,
    isGay: opts.data.isGay,
    isBisexual: opts.data.isBisexual,
    isTransgender: opts.data.isTransgender,
    isQuestioning: opts.data.isQuestioning,
    isOther: opts.data.isOther,
    lgbtqOtherType: opts.data.lgbtqOtherType,
    corName: opts.data.corName,
    cosName: opts.data.cosName,
    hasHealthInsurance: opts.data.hasHealthInsurance,
    hasMedicaid: opts.data.hasMedicaid,
    hasLanguageBarriers: opts.data.hasLanguageBarriers,
    languageBarriersText: opts.data.languageBarriersText,
    permPlan: opts.data.permPlan,
    corWorker: opts.data.corWorker,
    navigator: opts.data.navigator,
    addressList: opts.data.addressList,
    concerns: [],
    goals: []
  };
};
