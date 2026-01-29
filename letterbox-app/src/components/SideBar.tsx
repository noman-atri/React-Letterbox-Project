import { useUserContext } from "../useContext/Context";

function Sidebar() {
  // creating a context consumer to consume the user object provided by the DashboardContext provider
  const user = useUserContext();
  return (
    <div>
      <h2>Sidebar</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
export default Sidebar;
