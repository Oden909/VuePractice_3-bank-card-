import * as yup from 'yup';

const currentYear = new Date().getFullYear() % 100;
const currentMonth = new Date().getMonth() + 1;

export const validationSchema = yup.object({

    holder: yup.string()
        .required('Required')
        .matches(/^[A-Za-zА-Яа-я]+\s[A-Za-zА-Яа-я]+$/, 'Invalid name'),
  
    number: yup.string()
        .required('Required')
        .matches(/^\d{16}$/, 'Invalid card number'),
  
    month: yup.string()
        .required('Required')
        .matches(/^(0[1-9]|1[0-2])$/, 'Invalid'),
  
    year: yup.string()
        .required('Required')
        .matches(/^\d{2}$/, 'Invalid')
        .test('year-check', 'Invalid', (value) => {
            const year = parseInt(value, 10);
            return year >= currentYear;
        })
        .test('valid-date', 'Invalid', function(value) {
            const year = parseInt(value, 10);
            const month = parseInt(this.parent.month, 10);
            return year > currentYear || (year === currentYear && month >= currentMonth);
        }),

    cvc: yup.string()
        .required('Required')
        .matches(/^\d{3}$/, 'Invalid')
});