import { useFormik } from 'formik'
import MyField from '../fields/Field';
import { basicSchema } from '../../../../utils/validators';

const BasicForm = () => {
    const initialValues = {
        username: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: ''
    };

    const onSubmit = async (values, helpers) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
        console.log(values);
        helpers.resetForm();  
    };

    const { 
        isSubmitting,
        touched,
        values,
        errors,
        handleSubmit,
        handleBlur,
        handleChange
    } = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validationSchema: basicSchema
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <MyField
                    touched={touched}
                    value={values.username}
                    label='Username'
                    name="username"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(touched.username && errors.username) && errors.username }
                />
                <MyField
                    touched={touched}
                    value={values.email}
                    label='Email'
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(touched.email && errors.email) && errors.email }
                />
                <MyField
                    touched={touched}
                    value={values.age}
                    label='Age'
                    name="age"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(touched.age && errors.age) && errors.age }
                />
                <MyField
                    touched={touched}
                    value={values.password} 
                    label='Password'
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(touched.password && errors.password) && errors.password }
                />
                <MyField
                    touched={touched}
                    value={values.confirmPassword} 
                    label='ConfirmPassword'
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={(touched.confirmPassword && errors.confirmPassword) && errors.confirmPassword }
                />
                <button disabled={isSubmitting} type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default BasicForm
