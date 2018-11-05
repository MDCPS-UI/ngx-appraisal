
// call this service after calling create appraisal service. 
// It takes one query param appraisalId (the id we get when we call create appraisal json in return).

//example: http://10.15.66.88:5100/YTL/GetDemographicInfo?appraisalId=11



export const GET_DEMOGRAPHIC_INFO: any = {  
    "progress":0,
    "id":34,
    "appraisalId":67,
    "completedBy":"Trisha.Kelly@mdcps.ms.gov",
    "youthName":"Desirae           Martin                ",
    "age":18,
    "dob":"03/19/2000",
    "race":null,
    "gender":"F",
    "phone":"(601)-371-1809",
    "email":"test@test.com",
    "custodyStatus":false,
    "dischargeDate":"5/29/2018 ",
    "isLGBTQ":"yes",
    "isLesbian":false,
    "isGay":false,
    "isBisexual":false,
    "isTransgender":false,
    "isQuestioning":false,
    "isOther":true,
    "lgbtqOtherType":"string",
    "cor":{  
       "id":91,
       "countyCode":"820",
       "name":"Yazoo"
    },
    "cos":{  
       "id":7,
       "countyCode":"250",
       "name":"Hinds"
    },
    "hasHealthInsurance":true,
    "hasMedicaid":false,
    "hasLanguageBarriers":true,
    "languageBarriersText":"string",
    "permPlan":"Custody W/ a Relative         ",
    "corWorker":{  
       "id":11,
       "macwisId":"006227082",
       "firstName":"Kimberly",
       "lastName":"Simpson",
       "workerName":"Kimberly Simpson",
       "email":"Kimberly.Simpson@mdcps.ms.gov",
       "phone":"(601) 443-7952",
       "isTransitionNav":false
    },
    "navigator":{  
       "id":123,
       "macwisId":"007018800",
       "firstName":"Sharon",
       "lastName":"Cable",
       "workerName":"Sharon Cable",
       "email":"Sharon.Cable@mdcps.ms.gov",
       "phone":"(601) 757-7395",
       "isTransitionNav":true
    },
    "addressList":[  
 
    ],
    "concerns":[  
 
    ],
    "goals":[  
 
    ]
 }