import { Validators } from "../../../../node_modules/@angular/forms";

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
    "isPrefilled": false
  },
  {
    "controlName": "isLesbian",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isGay",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isBisexual",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isTransgender",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isQuestioning",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "isOther",
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
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "hasMedicaid",
    "validators": [],
    "isDisabled": true,
    "isPrefilled": true
  },
  {
    "controlName": "hasLanguageBarriers",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "languageBarriersText",
    "validators": [],
    "isDisabled": false,
    "isPrefilled": false
  },
  {
    "controlName": "corWorkerInfo",
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