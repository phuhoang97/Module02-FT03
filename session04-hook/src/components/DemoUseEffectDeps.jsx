import React, { useEffect, useState } from "react";

const tabs = ["posts", "albums", "comments"];
function DemoUseEffectDeps() {
  const [types, setTypes] = useState("posts");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [types]);

  console.log(post);

  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setTypes(tab)}>
          {tab}
        </button>
      ))}

      <table border={1}>
        <tr>
          <th>STT</th>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>

        {post.map((e, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.userId}</td>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.title ? e.title : e.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DemoUseEffectDeps;
