import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewBlog() {
  const params = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8085/api/post/${params.blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [params.blogId]);

  return (
    <>
      {blog ? (
        <div className="card p-0">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-md-4">
                <img src={blog.path} width="100%" alt="" />
              </div>
              <div className="col-md-8">
                <div className="py-3 pe-3">
                  <h3>{blog.name}</h3>
                  <p>{blog.description}</p>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      Likes
                      <span className="ms-2 badge bg-primary">
                        {blog.like_counts}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No Data available"
      )}
    </>
  );
}
