import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const isInvalidForm = () => {
    let isValid = true;
    console.log(form.username, form.password);
    if (!form.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Vui lòng nhập tài khoản!",
      }));
      isValid = false;
    } else if (form.username.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Tài khoản phải ít nhất 4 ký tự!",
      }));
      isValid = false;
    }

    if (!form.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Vui lòng nhập mật khẩu!",
      }));
      isValid = false;
    } else if (form.password.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Mật khẩu phải ít nhất 5 ký tự!",
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isInvalidForm()) {
      if (form.username === "admin" && form.password === "admin") {
        alert("Đăng nhập thành công");
      } else {
        alert("Tài khoản hoặc mật khẩu không đúng");
      }
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button type="submit">Login</button> <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Login;
