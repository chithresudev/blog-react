import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Blogs() {
  const [posts, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8085/api/post")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes))
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <section className="container pt-5">
      <div className="row">
        {posts ? (
          posts.map((blog, index) => (
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem;" }}>
                <img src={blog.path} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {blog.name} {index + 1}
                  </h5>
                  <p className="card-text">
                    {blog.description.substring(0, 125) + " ..."}
                  </p>
                  <Link
                    to={`/blog/${blog.id}/view/`}
                    className="btn btn-primary"
                  >
                    View Blog
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Data Available...</p>
        )}
      </div>
    </section>
  );
}

export default Blogs;
