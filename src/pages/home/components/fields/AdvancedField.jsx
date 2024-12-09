import { useField } from 'formik';
import '../../styles.css';

// eslint-disable-next-line react/prop-types
export const AdvancedField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='field'>
      <label>
        {label}
      </label>
      <input
        className={(meta.touched  && meta.error) && 'error-border'}
        {...field}
        {...props}
    />
      {(meta.touched  && meta.error) ? (
        <p className="error">{meta.error}</p>
      ): null}
    </div>
  );
}

export default AdvancedField;
