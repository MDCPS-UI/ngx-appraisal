export const EMPLOYMENT: any = {
    questions: [
        {
            id: 1,
            key: 'Are you disabled preventing you from working?',
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
                },{
                    key: 'SSI',
                    value: ''
                },{
                    key: 'SSA',
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
            id: 2,
            key: 'Explain:',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Explain'
        },
        {
            id: 3,
            key: 'Have you ever had a job?',
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
            id: 4,
            key: 'Job Skills?',
            value: '',
            isRadio: false,
            isCheckbox: true,
            checkBoxOptions: [
                {
                    key: 'Child Care',
                    value: ''
                },
                {
                    key: 'Food Services',
                    value: ''
                },
                {
                    key: 'Health care',
                    value: ''
                },
                {
                    key: 'Clerical',
                    value: ''
                },
                {
                    key: 'Mechanical',
                    value: ''
                },
                {
                    key: 'Electrical',
                    value: ''
                },
                {
                    key: 'Sales',
                    value: ''
                },
                {
                    key: 'Customer Service',
                    value: ''
                },
                {
                    key: 'Other',
                    value: ''
                }
            ],
            isInput: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 5,
            key: 'Are you employed?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Part-Time',
                    value: ''
                },
                {
                    key: 'Full-Time',
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
            id: 6,
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
            dependsOn: 5,
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            id: 7,
            key: "If yes, in employee's benefit program?",
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
            dependsOn: 5,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 8,
            key: 'Hourly Rate:',
            value: '',
            isRadio: true,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            radioOptions: [
                {
                    key: '$7.25-$10.00',
                    value: ''
                },
                {
                    key: '$10.00-$15.00',
                    value: ''
                },
                {
                    key: '$15.00-$20.00',
                    value: ''
                },
                {
                    key: 'Other',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: true,
            dependsOn: 5,
            hasPlaceholder: true,
            placeHolderValue: ''
        }
    ]
};
