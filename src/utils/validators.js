import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    email: yup.string().required('email is required').email('email is not correct'),
    age: yup.number().positive().integer().required('age is required'),
    password: yup.string().required('Password is required').min(3, 'password length should be >= 6'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'password is not matched')
      .required('Confirm Password is required')
});

export const advancedSchema = yup.object().shape({
  username: yup.string().min(3, 'length >= 3').max(6, 'length <= 6').required('username required'),
  jobType: yup.string().oneOf(['doctor', 'engineer', 'pilot'], 'should be one of them').required('it is required'),
  acceptToS: yup.boolean().oneOf([true], 'please select the checkbox'),
})
