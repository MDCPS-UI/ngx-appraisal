import { Validators } from "./../../../../node_modules/@angular/forms";

/**
 * @type: constant
 */
export const YA_DG_NAVG_LIST: string[] = [
  'Jazmin Hawthorne',
  'Sharon Cable',
  'Kenika Hudson',
  'Natasha Ivory',
  'Ginger Lambert',
  'Teresa Moore',
  'Jackie Potters',
  'Temcula Robinson'
].sort();

/**
 * @type: constant
 */
export const YA_DG_GENDER_LIST: string[] = [
  'Lesbian',
  'Gay',
  'Bi-Sexual',
  'Transgender',
  'Questioning'
].sort();

/**
 * @type: constant
 */
export const DMG_FIELDS: any[] = [
  {
    "controlName": "dob",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "age",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "phone",
    "validators": [Validators.pattern],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "email",
    "validators": [Validators.email],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "permPlan",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "custodyStatus",
    "isBool": true,
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "dischargeDate",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "addressList",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "race",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "gender",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "isLGBTQ",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "isLesbian",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isGay",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isBisexual",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isTransgender",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isQuestioning",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isOther",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "lgbtqOtherType",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "corName",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "cosName",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "hasHealthInsurance",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "hasMedicaid",
    "isBool": true,
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "hasLanguageBarriers",
    "isBool": true,
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "languageBarriersText",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": true
  },
  {
    "controlName": "corWorker",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "navigatorInfo",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  }
];