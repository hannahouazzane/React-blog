import styles from "../styles/Home.module.css";

export const Login = () => {
  return (
    <form className={styles.newArticleForm} action="/api/form" method="post">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">Content</label>
      <textarea rows="10" cols="50" id="content" name="content" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
