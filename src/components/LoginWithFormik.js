import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const LoginWithFormik = () => {
  const navigation = useNavigate();
  // const [form, setForm] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const validateForm = () => {
  //   console.log(form.username, form.password);
  //   if (!form.username) {
  //     setErrors({ ...errors, username: "Vui lòng nhập tài khoản!" });
  //   } else if (form.username.length < 4) {
  //     setErrors({ ...errors, username: "Tài khoản phải ít nhất 4 ký tự!" });
  //   }

  //   if (!form.password) {
  //     setErrors({ ...errors, password: "Vui lòng nhập mật khẩu!" });
  //   } else if (form.password.length < 6) {
  //     setErrors({ ...errors, password: "Mật khẩu phải ít nhất 6 ký tự!" });
  //   }
  //   if (errors.username.length > 0 || errors.password.length > 0) {
  //     return true;
  //   }
  //   return false;
  // };

  const handleSubmit = (values, isSubmitting) => {
    // event.preventDefault();

    // if (validateForm()) {
    //   return;
    // }

    if (values.email === "admin@gmail.com" && values.password === "admin") {
      alert("Đăng nhập thành công");
      navigation("/profile");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      {/* <form onSubmit={handleSubmit} method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form> */}
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
        handleSubmit(values, setSubmitting)
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </>
  );
};

export default LoginWithFormik;
