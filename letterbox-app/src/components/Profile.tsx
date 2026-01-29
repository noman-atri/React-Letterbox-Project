import { useUserContext } from "../useContext/Context";

function Profile() {
  // consuming the user object from the DashboardContext provider
  const user = useUserContext();
  return (
    <div>
      <h2>Profile Component</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
export default Profile;
