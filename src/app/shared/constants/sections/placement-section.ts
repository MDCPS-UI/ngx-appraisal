export const PLACEMENT: any = {
    questions: [
        {
            id: 1,
            key: 'Length of time in current placement',
            value: '',
            isRadio: true,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            radioOptions: [
                {
                    key: '0-6 months',
                    value: ''
                },
                {
                    key: '6-12 months',
                    value: ''
                },
                {
                    key: '12-18 months',
                    value: ''
                },
                {
                    key: '18-24 months',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            id: 2,
            key: 'How many placements have you had while in care?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: '1 - 4 months',
                    value: ''
                },
                {
                    key: '5 or more',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 3,
            key: 'If applicable, why have you changed placements?',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Why Changed?'
        },
        {
            id: 4,
            key: 'Do you feel safe in your placement?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 5,
            key: 'If no, why?',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 4,
            hasPlaceholder: true,
            placeHolderValue: 'Why?'
        },
        {
            id: 6,
            key: 'How will these connections be used for your permanency plan?',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'How connections used?'
        },
        {
            id: 7,
            key: 'Do you maintain contact with his/her biological family?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 8,
            key: 'If so, will these connections be used for his/her permanency plan?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 7,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 9,
            key: 'Any additional information about your foster care experience:',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Additional Foster Care info'
        }
    ]
};