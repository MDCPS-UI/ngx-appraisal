/**
 * @type: constant
 */
export const YA_RELSHP_LIST: any[] = [
    {
        'desc': 'Are you currently in a relationship with someone?',
        'optionName': 'inRelationship'
    },
    {
        'desc': 'Are you currently in a relationship with a partner who is ___________ abusive?',
        'optionName': 'abusivePartner',
        'isCheckbox': true,
        'options': [
            {
                'label': 'Physically',
                'value': 'physically',
                'optionName': 'physically'
            },
            {
                'label': 'Emotionally',
                'value': 'emotionally',
                'optionName': 'physically'
            },
            {
                'label': 'Verbally',
                'value': 'verbally',
                'optionName': 'physically'
            }
        ]
    },
    {
        'desc': 'Do you ever feel afraid of a current or former partner?',
        'optionName': 'afraidOfPartner'
    },
    {
        'desc': 'Are you currently leaving a violent or threatening relationship?',
        'optionName': 'violentRelationship'
    },
    {
        'desc': 'Have you ever received housing, food or money for sexual services?',
        'optionName': 'compensationForSexualServices'
    },
    {
        'desc': 'Have you ever hurt or threatened someone to have sex with you or tried to have sexual contact with someone against their will?',
        'optionName': 'forcedSexualContact'
    },
    {
        'desc': 'Has anyone ever tried to have sex with you against your will?',
        'optionName': 'forcedToHaveSex'
    },
    {
        'desc': 'Are you currently involved in prostitution or pimping?',
        'optionName': 'involvedInProstitution'
    }
];