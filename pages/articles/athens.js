import styles from "../../styles/Article.module.css";

export default function Article() {
  return (
    <div className={styles.pageLayout}>
      <header>
        <h1 aria-label="Incrementum">
          <a href="index.html">
            <img
              className={styles.logo}
              src="./images/logo.jpg"
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
        <div className={styles.articleInfo}>
          <div className={styles.infoWrapper}>
            <h3>Author: Author Name</h3>
            <h3>Published date: dd/mm/yyyy</h3>
            <h3>Reading time: x minutes</h3>
          </div>
          <h2 className={styles.articleTitle}>Democracy in Athens</h2>
        </div>

        <div className={styles.articleContent}>
          <p>
            Many know of the legendary civilisation of Ancient Athens. Yet with
            such greatness, came the downfall of Athenian superiority and a huge
            loss to the great warriors of Sparta. Let us first explore Athens in
            its Golden Age, right before its ultimate demise.
          </p>

          <img src="./images/democracy.png" />

          <p>
            The word democracy comes from the greek word demokratia, which
            translates to "power to the people". The Athenians were the first to
            adopt a self-serving form government and had an enduring influence
            on modern politics and law. Democracy gave the Athenians a great
            advantage of unleashing talents, powers, opportunities that other
            cultures simply could not match. But how was it run? Athens was a
            direct democracy, which means that it was widely encouraged for
            citizens to engage in political matters. This is embodied in the
            Greek term Ho boulomenous which means "for anyone who wishes".
          </p>
        </div>
      </main>
    </div>
  );
}
