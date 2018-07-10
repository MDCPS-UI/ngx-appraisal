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
        },
        {
            level: 'Graduation',
            optionName: 'graduationYearStipendRequested',
            optionReason: 'graduationYearStipendRequestedOther',
            optionReqDate: 'graduationStipendRequestDate'
        },
        {
            level: 'College Bound',
            optionName: 'collegeBoundStipendRequested',
            optionReason: 'collegeBoundStipendRequestedOther',
            optionReqDate: 'collegeBoundStipendRequestDate'
        },
        {
            level: 'Start Up',
            optionName: 'startUpStipendRequested',
            optionReason: 'startUpStipendRequestedOther',
            optionReqDate: 'startUpStipendRequestDate'
        },
        {
            level: 'Life Skill Participation',
            optionName: 'lifeSkillStipendRequested',
            optionReason: 'lifeSkillStipendRequestedOther',
            optionReqDate: 'lifeSkillStipendRequestDate'
        },
        {
            level: 'Personal Enhancement',
            optionName: 'personalStipendRequested',
            optionReason: 'personalStipendRequestedOther',
            optionReqDate: 'personalStipendRequestDate'
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