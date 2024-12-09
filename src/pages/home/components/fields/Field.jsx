import '../../styles.css';

// eslint-disable-next-line react/prop-types
export const MyField = ({label, error, ...props}) => {

  return (
    <div className="field">
        <label>{label}</label>
        <input
            className={error ? 'error-border' : ''}
            {...props}
        />
        <p className="error">{error}</p>
    </div>
  );
}

export default MyField
