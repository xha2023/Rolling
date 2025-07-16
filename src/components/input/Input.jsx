// src/components/input/Input.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './InputText.module.scss';

function InputText({
  className,
  placeholder,
  errormsg,
  inputvalue,
  onInputChange,
  disabled,
}) {
  const [error, setError] = useState(false);

  const handleBlur = () => setError(!inputvalue);

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabledWrap : ''}`}>
      <input
        className={`
          ${styles.inputContainer}
          ${className}
          ${error ? styles.error : ''}
          ${disabled ? styles.disabled : ''}
          ${inputvalue ? styles.filled : ''}
        `}
        value={inputvalue}
        onChange={onInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className={styles.errorMsg}>{errormsg}</p>}
    </div>
  );
}

InputText.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errormsg: PropTypes.string,
  inputvalue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

InputText.defaultProps = {
  className: '',
  placeholder: '',
  errormsg: 'Error Message',
  inputvalue: '',
  disabled: false,
};

export default InputText;
