const Dashboard = () => {
  return (
    <>
      <h4>Dashboard</h4>
      <div className="row pt-3">
        <div className="col-4">
          <div className="card">
            <div className="card-body bg-success d-flex justify-content-between align-items-center text-muted">
              <h4>Blogs</h4>
              <h1 className="text-end fw-bold">90</h1>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body bg-info d-flex justify-content-between align-items-center text-muted">
              <h4>Comments</h4>
              <h1 className="text-end fw-bold">90</h1>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body bg-danger d-flex justify-content-between align-items-center text-muted">
              <h4>Likes</h4>
              <h1 className="text-end fw-bold">90</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-6">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-header">Blogs</div>
            <div className="card-body d-flex justify-content-center align-items-center">
              Chart data
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-header">Blogs</div>
            <div className="card-body d-flex justify-content-center align-items-center">
              Chart data
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
