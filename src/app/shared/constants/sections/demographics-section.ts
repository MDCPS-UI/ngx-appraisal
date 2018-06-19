export const DEMOGRAPHICS: any = {
    questions: [
        {
            key: 'Date of Birth',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Date of Birth'
        },
        {
            key: 'Age',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Age'
        },
        {
            key: 'Phone',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Phone'
        },
        {
            key: 'Email',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Email'
        },
        {
            key: 'Permanency Goal',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Permanency Goal'
        },
        {
            key: 'Custody',
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
            key: 'Discharge Date',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: true,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'mm/dd/yyyy'
        },
        {
            key: 'Address',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Address'
        },
        {
            key: 'Race',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'American Indian or Alaskan Native',
                    value: ''
                },
                {
                    key: 'Asian',
                    value: ''
                },
                {
                    key: 'Black or African American',
                    value: ''
                },
                {
                    key: 'National Hawaiian or Pacific Islander',
                    value: ''
                },
                {
                    key: 'Unable to determine',
                    value: ''
                },
                {
                    key: 'White',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'Gender',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Female',
                    value: ''
                },
                {
                    key: 'Male',
                    value: ''
                },
                {
                    key: 'Unknown',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'Do you identify as LGBTQ?',
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
            key: 'If yes, Please select ',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Bisexual',
                    value: ''
                },
                {
                    key: 'Gay',
                    value: ''
                },
                {
                    key: 'Lesbian',
                    value: ''
                },
                {
                    key: 'Transgender',
                    value: ''
                },
                {
                    key: 'Questioning',
                    value: ''
                },
                {
                    key: 'Declined',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'COR',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Adams',
                    value: ''
                },
                {
                    key: 'Alcorn',
                    value: ''
                },
                {
                    key: 'Amity',
                    value: ''
                },
                {
                    key: 'Attala',
                    value: ''
                },
                {
                    key: 'Benton',
                    value: ''
                },
                {
                    key: 'Calhoun',
                    value: ''
                },
                {
                    key: 'Carrol',
                    value: ''
                },
                {
                    key: 'Choctaw',
                    value: ''
                },
                {
                    key: 'Claiborn',
                    value: ''
                },
                {
                    key: 'Clarke',
                    value: ''
                },
                {
                    key: 'Clay',
                    value: ''
                },
                {
                    key: 'Coahoma',
                    value: ''
                },
                {
                    key: 'Copiah',
                    value: ''
                },
                {
                    key: 'Counties',
                    value: ''
                },
                {
                    key: 'Covington',
                    value: ''
                },
                {
                    key: 'DeSoto',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'COS',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Adams',
                    value: ''
                },
                {
                    key: 'Alcorn',
                    value: ''
                },
                {
                    key: 'Amity',
                    value: ''
                },
                {
                    key: 'Attala',
                    value: ''
                },
                {
                    key: 'Benton',
                    value: ''
                },
                {
                    key: 'Calhoun',
                    value: ''
                },
                {
                    key: 'Carrol',
                    value: ''
                },
                {
                    key: 'Choctaw',
                    value: ''
                },
                {
                    key: 'Claiborn',
                    value: ''
                },
                {
                    key: 'Clarke',
                    value: ''
                },
                {
                    key: 'Clay',
                    value: ''
                },
                {
                    key: 'Coahoma',
                    value: ''
                },
                {
                    key: 'Copiah',
                    value: ''
                },
                {
                    key: 'Counties',
                    value: ''
                },
                {
                    key: 'Covington',
                    value: ''
                },
                {
                    key: 'DeSoto',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            key: 'Do you have Health Insurance?',
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
            key: 'Do you have Health Medicaid?',
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
            key: 'Do you have any language barriers or need an interpreter?',
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
            key: 'If yes explain?',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: 'Explain Needs for an interpreter'
        },
        {
            key: 'Do you have a mentor or identified supportive connection?',
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
            key: 'If yes, would you like this person to be involved in your transition planning?',
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
            dependsOn: '',
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            key: 'COR MDCPS Worker',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: 'Explain Needs for an interpreter'
        },
        {
            key: 'Assigned Transition Navigator',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [],
            isDate: false,
            hasDependency: true,
            dependsOn: '',
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
    ]
};
