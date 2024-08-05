import { useState } from "react";

export const StudentCrud = () => {
  const [id, SetId] = useState("");
  const [Name, SetName] = useState("");
  const [course, SetCourse] = useState("");
  return (
    <section className="main-content">
      <h1>Student Detail</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="id"
              hidden
              value={id}
              onChange={(e) => SetId(e.target.value)}
            />
            <label>Student Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              hidden
              value={Name}
              onChange={(e) => SetName(e.target.value)}
            />
            <div className="form-group">
              <label>Course</label>
              <input
                type="text"
                className="form-control"
                id="course"
                value={course}
                onChange={(e) => SetCourse(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary mt-4" /*onClick={save}*/>
                Register
              </button>
              <button className="btnbtn-warningmt-4" /*onClick={update}*/>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <table className="table table-dark" align="center">
        <thead>
          <th scope="col">Student Id</th>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Option</th>
        </thead>
        
      </table>
    </section>
  );
};
