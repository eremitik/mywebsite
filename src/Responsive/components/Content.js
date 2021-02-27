import React from "react";
import {Link} from 'react-router-dom';


const Content = ({styles}) => {
  const dummyPost = {
    title: `Quick practice with responsive design!`,
    summary:
    "Move the browser window smaller and larger! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  };

  const posts = Array(1).fill(dummyPost);

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20,
    color: "white"
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{marginBottom: 40}}>
            <h2 style={{marginBottom: 0}}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
      <br/>
      <br/>
      <p className="CoinContainer-link">
        <Link to='/projects'>back</Link>
      </p>
    </div>
  );
};

export default Content;
