import { COR } from './cor';
import { COS } from './cos';

export const DEMOGRAPHICS: any = {
    questions: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
            dependsOn: 11,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            id: 13,
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
            id: 14,
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
            id: 15,
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
            id: 16,
            key: 'If yes explain?',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 15,
            hasPlaceholder: true,
            placeHolderValue: 'Explain Needs for an interpreter'
        },
        {
            id: 17,
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
            id: 18,
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
            dependsOn: 17,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 19,
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
            id: 20,
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
        }
    ]
};
