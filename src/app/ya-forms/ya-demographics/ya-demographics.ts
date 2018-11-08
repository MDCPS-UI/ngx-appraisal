
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
    // completeDt: opts.dmgInfo.completeDt,
    // commitDt: opts.dmgInfo.commitDt,
    progress: opts.dmgInfo.progress,
    id: +(opts.dmgInfo.id),
    appraisalId: +(opts.dmgInfo.appraisalId || ''),
    completedBy: opts.emailId,
    youthName: opts.dmgInfo.youthName,
    age: opts.dmgInfo.age,
    dob: opts.dmgInfo.dob,
    race: opts.dmgInfo.race,
    gender: opts.dmgInfo.gender,
    phone: opts.data.phone,
    email: opts.data.email,
    custodyStatus: opts.dmgInfo.custodyStatus,
    dischargeDate: opts.dmgInfo.dischargeDate,
    isLGBTQ: opts.data.isLGBTQ,
    isLesbian: opts.data.isLesbian,
    isGay: opts.data.isGay,
    isBisexual: opts.data.isBisexual,
    isTransgender: opts.data.isTransgender,
    isQuestioning: opts.data.isQuestioning,
    isOther: opts.data.isOther,
    lgbtqOtherType: opts.data.lgbtqOtherType,
    cor: opts.data.cor,
    cos: opts.data.cos,
    hasHealthInsurance: opts.data.hasHealthInsurance,
    hasMedicaid: opts.dmgInfo.hasMedicaid,
    hasLanguageBarriers: opts.data.hasLanguageBarriers,
    languageBarriersText: opts.data.languageBarriersText,
    permPlan: opts.dmgInfo.permPlan,
    corWorker: opts.data.corWorker,
    navigator: opts.data.navigator,
    addressList: opts.data.addressList,
    concerns: [],
    goals: []
  };
};
