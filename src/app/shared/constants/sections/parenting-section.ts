export const PARENTING: any = {
    questions: [
        {
            id: 1,
            key: 'Are currently pregnant or gotten someone pregnant?',
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
            key: 'If yes, are you receiving pre-natal care?',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 1,
            hasPlaceholder: true,
            placeHolderValue: 'Prenatal Care?'
        },
        {
            id: 3,
            key: 'Are you a parent?',
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
            key: 'If yes, list names/ages of child(ren)',
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
            placeHolderValue: 'List Name/Ages'
        },
        {
            id: 5,
            key: 'Do they live with you?',
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
            key: 'If Yes, do you have legal custody?',
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
            id: 7,
            key: 'If no, explain',
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
            placeHolderValue: 'List Name/Ages'
        },
        {
            id: 8,
            key: 'Have you had to miss school because of parenting/pregnancy responsibilities?',
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
            key: 'As a parent, have you had a MDCPS investigation done on you?',
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
            key: 'Does your child have any medical issues?',
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
            key: 'If yes, explain',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 10,
            hasPlaceholder: true,
            placeHolderValue: 'Explain'
        },
        {
            id: 12,
            key: 'Are you currently receiving child support for your child/children?',
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
            id: 13,
            key: 'If yes, enter support amount',
            value: '',
            isRadio: false,
            isInput: true,
            isTextbox: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 12,
            hasPlaceholder: true,
            placeHolderValue: 'Prenatal Care?'
        },
        {
            id: 14,
            key: 'If no, reason',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 12,
            hasPlaceholder: true,
            placeHolderValue: 'Why no child support'
        },
        {
            id: 15,
            key: 'Are you currently paying child support for your child(ren)?',
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
            key: 'Is the other parent involved with the child(ren)?',
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
            id: 17,
            key: 'If no, how',
            value: '',
            isRadio: false,
            isInput: false,
            isTextbox: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 16,
            hasPlaceholder: true,
            placeHolderValue: 'Why not involved'
        },
        {
            id: 18,
            key: 'Is your child/children currently enrolled in daycare, pre-school or elementary school?',
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
            id: 19,
            key: 'If no, is your child(ren) regularly cared for by another adult?',
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
            dependsOn: 18,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 20,
            key: 'How do you pay for childcare services?',
            value: '',
            isRadio: false,
            isCheckbox: true,
            checkBoxOptions: [
                {
                    key: 'Childcare Voucher',
                    value: ''
                },
                {
                    key: 'With your own funds',
                    value: ''
                },
                {
                    key: 'Child Support',
                    value: ''
                },
                {
                    key: 'Assistance from an outside source',
                    value: ''
                },
                {
                    key: 'N/A',
                    value: ''
                }
            ],
            isInput: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        }
    ]
};