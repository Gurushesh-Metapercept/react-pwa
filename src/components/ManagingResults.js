import React, { useState, useEffect } from "react";

const ManagingResults = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((restData) => {
        setData(restData);
        localStorage.setItem("users", JSON.stringify(restData));
      })
      .catch((err) => {
        let collrection = localStorage.getItem("users");

        setData(JSON.parse(collrection));
      });
  }, []);
  console.log(data);

  return (
    <div className="container-lg pt-4 table-responsive">
      {!navigator.onLine && (
        <span className="alert alert-warning mb-4">
          You are in offline mode!
        </span>
      )}
      <table className="table  table-striped pt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagingResults;
