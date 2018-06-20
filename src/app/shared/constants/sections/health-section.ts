export const HEALTH: any = {
    questions: [
        {
            id: 1,
            key: 'Do you have any medical issues to address?',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Medical Issues?'
        },
        {
            id: 2,
            key: 'Have you ever witnessed or experienced a traumatic event?',
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
            id: 3,
            key: 'Have you ever been the victim of any of the following types of abuse?',
            value: '',
            isRadio: false,
            isCheckbox: true,
            checkBoxOptions: [
                {
                    key: 'Physical',
                    value: ''
                },
                {
                    key: 'Emotional',
                    value: ''
                },
                {
                    key: 'Sexual',
                    value: ''
                },
                {
                    key: 'Neglect',
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
            id: 4,
            key: 'Dental',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Grade'
        },
        {
            id: 5,
            key: 'Medical',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Grade'
        },
        {
            id: 6,
            key: 'Vision',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Grade'
        },
        {
            id: 7,
            key: 'Psycological',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Grade'
        },
        {
            id: 8,
            key: 'Are you sexually active?',
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
            id: 9,
            key: 'Do you have an adult to talk to about safe sex and reproductive health?',
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
            id: 10,
            key: 'Have you been tested for HIV/AIDS?',
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
            id: 11,
            key: 'HIV/AIDS Date',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'mm/dd/yyy'
        },
        {
            id: 12,
            key: 'Test Results?',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Test Results'
        },
        {
            id: 13,
            key: 'Have you been tested for STD/STI?',
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
            id: 14,
            key: 'STD/STI Date',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'mm/dd/yyy'
        },
        {
            id: 15,
            key: 'Test Results?',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Test Results'
        },
        {
            id: 16,
            key: 'Are you currently receiving services or treatment for any of the following:',
            value: '',
            isRadio: false,
            isCheckbox: true,
            checkBoxOptions: [
                {
                    key: 'Mental Health',
                    value: ''
                },
                {
                    key: 'Substance Abuse',
                    value: ''
                },
                {
                    key: 'Learning Disability',
                    value: ''
                },
                {
                    key: 'Developmental Disability',
                    value: ''
                },
                {
                    key: 'Physical Disability',
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
            id: 17,
            key: 'Are you taking any medications?',
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
            id: 18,
            key: 'If yes, please list',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 17,
            hasPlaceholder: true,
            placeHolderValue: 'Test Results'
        },
        {
            id: 19,
            key: 'Are your medications administered to you?',
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
            dependsOn: 17,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 20,
            key: 'Do you keep track of your medical appointments?',
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
        }
    ]
};