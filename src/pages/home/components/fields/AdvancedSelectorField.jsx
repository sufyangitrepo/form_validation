import { useField } from 'formik';
import '../../styles.css';

export const AdvancedSelectField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='custom-select'>
      <label>
        {label}
      </label>
      <select
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

export default AdvancedSelectField;