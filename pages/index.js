import styles from "../styles/Home.module.css";
import Link from "next/link";
import Article from "./components/Article.js";
import Test from "./api/test.json";
import data from "./api/data.json";
export const Home = () => {
  console.log(data);

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
        <p>
          {Test.name} : {Test.description}{" "}
        </p>
        <section className={styles.catalogue}>
          <Article
            title={data.articles.article_one.title}
            src={data.articles.article_one.image}
            description={data.articles.article_one.description}
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
