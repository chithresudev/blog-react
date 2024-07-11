const ContactUs = () => {
  return (
    <div className="row">
      <div className="col">
        <address>Chennai, Tech metaz campus</address>
      </div>
      <div className="col">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            id="floatingInput"
            placeholder="Email"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            id="floatingInput"
            placeholder="Mobile"
          />
          <label for="floatingInput">Mobile</label>
        </div>

        <div class="form-floating">
          <textarea
            class="form-control"
            rows="5"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
