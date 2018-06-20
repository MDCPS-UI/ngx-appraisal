export const DOCUMENTS: any = {
    questions: [
        {
            id: 1,
            key: 'His/her original Birth Certificate',
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
            key: 'If no, explain',
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
            placeHolderValue: 'Explain'
        }
    ]
};