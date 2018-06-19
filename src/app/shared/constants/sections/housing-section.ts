export const HOUSING: any = {
    questions: [
        {
            key: 'Current housing situation',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Paying rent or mortgage',
                    value: ''
                },
                {
                    key: 'Living with a relative',
                    value: ''
                },
                {
                    key: 'College dorm',
                    value: ''
                },
                {
                    key: 'Transitional living program',
                    value: ''
                },
                {
                    key: 'Emergency shelter',
                    value: ''
                },
                {
                    key: 'Homeless',
                    value: ''
                },
                {
                    key: 'Motel\/Hotel',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'Length of time in current housing',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Time in Current Housing'
        },
        {
            key: 'Have you ever been homelessness?',
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
            key: 'If yes, How long?',
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
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            key: 'Have you ever been evicted?',
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
            key: 'If yes, How long?',
            value: '',
            isRadio: true,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            radioOptions: [
                {
                    key: '0-3 months',
                    value: ''
                },
                {
                    key: '3-6 months',
                    value: ''
                },
                {
                    key: '6-9 months',
                    value: ''
                },
                {
                    key: '9-12 months',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            key: 'Are you able to meet all of your monthly obligations?',
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
            key: 'If no, explain',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: 'Obligations'
        }
    ]
};
