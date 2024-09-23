import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginWithFormik = () => {
  const navigation = useNavigate();

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(false);
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      alert("Đăng nhập thành công");
      navigation("profile");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
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
