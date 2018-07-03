/**
 * @type: constant
 * @author: Shoukath Mohammed
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