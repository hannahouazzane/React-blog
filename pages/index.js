import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Home = () => {
  return (
    <div className={styles.pageLayout}>
      <header>
        <h1 aria-label="Incrementum">
          <a href="index.html">
            <img
              className={styles.logo}
              src="logo.jpg"
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
        <div className={styles.heroImage}>
          <img
            className={styles.week_quote}
            src="weekly_quote.png"
            height="500px"
            width="1000px"
          />
        </div>
        <br />

        <h2>Recent Blog Posts</h2>
        <section className={styles.catalogue}>
          <Link href="/articles/athens">
            <div>
              <h3>Morality & Empathy: What we can learn from Aristotle</h3>
              <img src="Stoicism.png" className={styles.articleImage} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                id lectus felis. Pellentesque efficitur pharetra sagittis
              </p>
            </div>
          </Link>
          <article>
            <h3>Yin & Yang - finding balance</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>

          <article>
            <h3>Stoicism & The Art of Courage</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>
        </section>

        <h2>Latest Videos</h2>

        <section className={styles.catalogue}>
          <article>
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>
          <article>
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>
          <article>
            {" "}
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>
        </section>
        <br />
        <h2>Helpful Resources for Mindfulness and Motivation</h2>
        <section className={styles.catalogue}>
          <article>
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>

          <article>
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>

          <article>
            <h3>Title</h3>
            <img src="Stoicism.png" className={styles.articleImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              lectus felis. Pellentesque efficitur pharetra sagittis
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
