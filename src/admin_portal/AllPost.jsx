import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

export const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    UserService.getPostContent().then((response) => setPosts(response.data));
  }, []);

  console.log(posts);

  return (
    <>
      <h4>All Post</h4>
      <div className="card p-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts ? (
              posts.map((post) => {
                const limit = 100;
                const shortDesc =
                  post.description.length > limit
                    ? post.description.substring(0, limit - 3) + "..."
                    : post.description;
                return (
                  <tr>
                    <th>{post.name}</th>

                    <td>{shortDesc}</td>
                    <td>
                      <img width="30%" src={post.path} alt="" />{" "}
                    </td>
                    <td>{post.like_counts}</td>
                  </tr>
                );
              })
            ) : (
              <p className="text-center">No Data Available...</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
