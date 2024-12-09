import { useField } from "formik"
import "../../styles.css";

// eslint-disable-next-line react/prop-types
export const AdvancedCheckbox = ({label, labelStart, labelEnd, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className="checkbox">
        <div>
            {(label && labelStart ) && <span>{label}</span>}
            <input
                className={(meta.error && meta.touched) ? "error-border" : ""}
                {...props}
                {...field}
            />
            {(label && labelEnd ) && <span>{label}</span>}
        </div>
        {
            (meta.error && meta.touched) && <p className="error">{meta.error}</p>
        }
    </div>
  );
};

export default AdvancedCheckbox;
