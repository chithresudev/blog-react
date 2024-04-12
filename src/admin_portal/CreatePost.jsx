const CreatePost = () => {
  return (
    <>
      <h4>Create Post</h4>
      <div className="card p-4">
        <div className="mb-3">
          <label for="postName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="postName"
            placeholder="Please Enter Post Name"
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            id="postName"
            placeholder="Please Enter Post Name"
          />
        </div>
        <div>
          <button type="button" className="btn btn-success">
            Create Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
