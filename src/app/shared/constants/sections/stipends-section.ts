export const STIPENDS: any = {
    questions: [
        {
            id: 1,
            key: 'Stipend Requested?',
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
                },
                {
                    key: 'Other',
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
            key: 'Request Date',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: true,
            dependsOn: 1,
            hasPlaceholder: true,
            placeHolderValue: 'Date'
        },
        {
            id: 3,
            key: 'Stipend Requested?',
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
                },
                {
                    key: 'Other',
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
            key: 'Request Date',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: true,
            dependsOn: 3,
            hasPlaceholder: true,
            placeHolderValue: 'Date'
        },
        {
            id: 5,
            key: 'Stipend Requested?',
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
                },
                {
                    key: 'Other',
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
            key: 'Request Date',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: true,
            dependsOn: 5,
            hasPlaceholder: true,
            placeHolderValue: 'Date'
        },
        {
            id: 7,
            key: 'Stipend Requested?',
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
                },
                {
                    key: 'Other',
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
            key: 'Request Date',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: true,
            dependsOn: 7,
            hasPlaceholder: true,
            placeHolderValue: 'Date'
        }
    ]
};