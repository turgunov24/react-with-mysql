import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users/view/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  return <div>{user ? <p>{user.firstName}</p> : <p>Loading...</p>}</div>;
}

export default ViewPage;
