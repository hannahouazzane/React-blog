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
export const Home = (props) => {
  console.log("props:", props.articles);

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
        <a href="signup.html" className={styles.login}>
          Log in
        </a>
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
          {Object.keys(props.articles).map((key, i) => {
            /*Do fancy stuff in here */
            return (
              <Article
                key={i}
                title={props.articles[key].title}
                src={props.articles[key].image}
                description={props.articles[key].description}
              />
            );
          })}
        </section>

        <h2>Latest Videos</h2>

        <section className={styles.catalogue}>
          <Article
            title="Morality & Empathy: What we can learn from Aristotle"
            src="images/Stoicism.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              id lectus felis. Pellentesque efficitur pharetra sagittis"
          />

          <Article
            title="Yin & Yang - finding balance"
            src="images/Stoicism.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              id lectus felis. Pellentesque efficitur pharetra sagittis"
          />

          <Article
            title="Stoicism & The Art of Courage"
            src="images/Stoicism.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              id lectus felis. Pellentesque efficitur pharetra sagittis"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
