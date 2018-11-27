/**
 * @type: constant
 */
export const YA_STPNDS_LIST: any = {
    items: [
        {
            level: 'Senior Year',
            optionName: 'seniorYearStipendRequested',
            optionReason: 'seniorYearStipendRequestedOther',
            optionReqDate: 'seniorStipendRequestDate',
            isBool: false
        },
        {
            level: 'Graduation',
            optionName: 'graduationYearStipendRequested',
            optionReason: 'graduationYearStipendRequestedOther',
            optionReqDate: 'graduationStipendRequestDate',
            isBool: false
        },
        {
            level: 'College Bound',
            optionName: 'collegeBoundStipendRequested',
            optionReason: 'collegeBoundStipendRequestedOther',
            optionReqDate: 'collegeBoundStipendRequestDate',
            isBool: false
        },
        {
            level: 'Start Up',
            optionName: 'startUpStipendRequested',
            optionReason: 'startUpStipendRequestedOther',
            optionReqDate: 'startUpStipendRequestDate',
            isBool: false
        },
        {
            level: 'Life Skill Participation',
            optionName: 'lifeSkillStipendRequested',
            optionReason: 'lifeSkillStipendRequestedOther',
            optionReqDate: 'lifeSkillStipendRequestDate',
            isBool: false
        },
        {
            level: 'Personal Enhancement',
            optionName: 'personalStipendRequested',
            optionReason: 'personalStipendRequestedOther',
            optionReqDate: 'personalStipendRequestDate',
            isBool: false
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
            label: 'Other',
            value: 'other',
            hasInput: true,
            className: 'd-block'
        }
    ]
};