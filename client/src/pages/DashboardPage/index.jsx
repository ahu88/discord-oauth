import React from "react";
import { getUserDetails } from "../../utils/api";

export function DashboardPage({ history }) {
  //create user state variable, and setUser fucntion
  const [user, setUser] = React.useState(null);
  //keeps track of the component -> if we're in loading screen or not
  const [loading, setLoading] = React.useState(true);

  //makes the api call to get user data from mongodb
  React.useEffect(() => {
    getUserDetails()
      .then(({ data }) => {
        console.log(data);
        setUser(data); //update state var user
        setLoading(false);
      })
      .catch((err) => {
        history.push("/"); //if user not logged in, redirect to main route
        setLoading(false);
      });
  }, []);
  //if loading is true
  return (
    !loading && (
      <div>
        <h1>Dashboard Page</h1>
      </div>
    )
  );
}
