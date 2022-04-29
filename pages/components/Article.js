import React, { Component } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
class Article extends React.Component {
  render() {
    return (
      <article style={{ width: "333px" }}>
        <Link href="/articles/athens">
          <div>
            <div style={{ height: "100px" }}>
              <h3> Title: {this.props.title}</h3>
            </div>
            <img src={this.props.src} className={styles.articleImage} />
            <p>{this.props.description}</p>
          </div>
        </Link>
      </article>
    );
  }
}
export default Article;
