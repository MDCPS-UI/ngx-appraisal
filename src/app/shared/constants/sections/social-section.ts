export const SOCIAL: any = {
    questions: [
        {
            id: 1,
            key: 'Are you involved in extracurricular activities?',
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
            id: 2,
            key: 'If yes, list',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 1,
            hasPlaceholder: true,
            placeHolderValue: 'List your activities'
        },
        {
            id: 3,
            key: 'Are you involved in religious activities or spiritual practices?',
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
            key: 'If yes, list',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 3,
            hasPlaceholder: true,
            placeHolderValue: 'List your activities'
        },
        {
            id: 5,
            key: 'Do you have hobbies or other interests?',
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
            id: 6,
            key: 'If yes, list',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 5,
            hasPlaceholder: true,
            placeHolderValue: 'List your activities'
        }
    ]
};
