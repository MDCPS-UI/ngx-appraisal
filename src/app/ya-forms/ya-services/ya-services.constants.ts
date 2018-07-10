/**
 * @type: constant
 */
 export const YA_SRVC_LIST: any = {
    items: [
        {
            desc: 'Apply for medicaid',
            optionName: 'applyMedicaid',
            optionReason: 'applyMedicaidOther'
        },
        {
            desc: 'Locate Mental Health Services',
            optionName: 'locateMentalHealth',
            optionReason: 'locateMentalhealthOther'
        },
        {
            desc: 'Enroll in parenting classes',
            optionName: 'parentingClasses',
            optionReason: 'parentingClassesOther'
        },
        {
            desc: 'Identify and secure transportation',
            optionName: 'secureTransport',
            optionReason: 'secureTransportOther'
        },
        {
            desc: 'Apply for SNAP benefits',
            optionName: 'snapBenefits',
            optionReason: 'snapBenefitsOther'
        },
        {
            desc: 'Apply for TANF Benefits',
            optionName: 'tanfBenefits',
            optionReason: 'tanfBenefitsOther'
        },
        {
            desc: 'Apply for childcare voucher',
            optionName: 'childcareVoucher',
            optionReason: 'childcareVoucherOther'
        },
        {
            desc: 'Locate Housing',
            optionName: 'locateHousing',
            optionReason: 'locateHousingOther'
        },
        {
            desc: 'Schedule Counseling',
            optionName: 'scheduleCounseling',
            optionReason: 'scheduleCounselingOther'
        },
        {
            desc: 'Other',
            optionname: 'other',
            optionReason: 'otherExplain'
        }
    ],
    options: [
        {
            label: 'Yes',
            value: 'yes'
        },
        {
            label: 'No',
            value: 'no'
        },
        {
            label: 'Not Applicable',
            value:'notApplicable'
        },
        {
            label: 'Other',
            value: 'other',
            hasInput: true,
            className: 'd-block'
        }
    ]
 };
