import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

function ViewPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("http://localhost:5000/users/view/" + id)
      .then((res) => setUser(...res?.data));
  }, []);

  return <div>{user ? <p>{user.firstName}</p> : <p>Loading...</p>}</div>;
}

export default ViewPage;
