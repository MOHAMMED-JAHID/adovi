import { useState } from "react";

function Usestate2() {
  let [names, setNames] = useState(["Anu", "Ganesh", "Ram", "Jahid", "Ramesh"]);
  const promoteName = (emp) => {
    names = [emp, ...names.filter((val) => val !== emp)];
    setNames(names);
  };
  return (
    <div className="container">
      <table>
        <thead>
          <th>Serial No</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {names.map((emp, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{emp}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  onClick={() => promoteName(emp)}
                >
                  Promote
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usestate2;
