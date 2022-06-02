import styles from "../styles/Home.module.css";
import Link from "next/link";
import Article from "./components/Article.js";

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/hello");
  const articles = await res.json();
  return {
    props: { articles },
  };
}
export const Home = ({ articles }) => {
  console.log("props:", articles);

  return (
    <div className={styles.pageLayout}>
      <header>
        <h1 aria-label="Incrementum">
          <a href="index.html">
            <img
              className={styles.logo}
              src="images/logo.png"
              height="100px"
              width="100px"
              alt="Incrementum logo"
            />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a>Videos </a>
            </li>
            <li>
              <a>Blogs </a>
            </li>
            <li>
              <a>Resources </a>
            </li>
          </ul>
        </nav>
        <Link href="/login">
          <a>Log in</a>
        </Link>
      </header>
      <main>
        {/* <div className={styles.heroImage}> */}
        <img
          className={styles.week_quote}
          src="images/weekly_quote.png"
          height="500px"
          width="100%"
        />
        {/* </div> */}
        <br />

        <h2>Recent Blog Posts</h2>

        <section className={styles.catalogue}>
          {Object.keys(articles).map((key, i) => {
            /*Do fancy stuff in here */
            return (
              <Article
                key={i}
                title={articles[key].title}
                src={articles[key].image}
                description={articles[key].description}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
