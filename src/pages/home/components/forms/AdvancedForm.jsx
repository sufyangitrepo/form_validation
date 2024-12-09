import { Formik, Form } from "formik";
import '../../styles.css';
import {advancedSchema} from '../../../../utils/validators';
import {AdvancedCheckbox,AdvancedField,AdvancedSelectField} from "../fields"

const AdvancedForm = () => {
  const initialValues = {
    username: '',
    jobType: '',
    acceptToS: false
  }

  const onSubmitHandler = async (values, helpers) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
      helpers.setSubmitting(false);
    })
    helpers.resetForm()
  };

  return (
    <Formik initialValues={initialValues} validationSchema={advancedSchema} onSubmit={onSubmitHandler}>
      {({isSubmitting}) => (
        // eslint-disable-next-line react/prop-types
        <Form>
          <AdvancedField
            name="username"
            type="text"
            label="Username"
          />
          <AdvancedSelectField
            name="jobType"
            type="text"
            label="Job Type"
          >
            <option value="">Please select a job type</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
            <option value="pilot">Pilot</option>
          </AdvancedSelectField>
          <AdvancedCheckbox
              name="acceptToS"
              type="checkbox"
              label="I Accept terms for services"
              labelEnd
          />
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;
