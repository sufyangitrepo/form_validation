// import React from 'react';
// import {Formik, Form, Field, useFormik} from 'formik';

import { useState } from "react";
import AdvancedForm from "./components/forms/AdvancedForm";
import BasicForm from "./components/forms/BasicForm";

// import  { FormValidation } from '../../utils/validators'


// eslint-disable-next-line react/prop-types
export const Temp = ({children}) => {

  if (typeof children === 'function') {
    return (
      <>
        {children('ali', 1)}
      </>
    )
  }
  return (
    <></>
  )
}

const Home = () => {
  const [isBasic, toggleBasic] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => {
          if (!isBasic) {
            toggleBasic(!isBasic)
          }
        }}>Basic</button>
        <button
          onClick={() => {
            if (isBasic) {
              toggleBasic(!isBasic)
            }
          }}
        >Advanced</button>
      </div>
      <div>
        {isBasic ? <BasicForm /> : <AdvancedForm />}
      </div>
    </div>
  );

};

export default Home;
