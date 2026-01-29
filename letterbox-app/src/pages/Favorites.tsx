import { usePersistedState } from "../hooks/usePersistedState";

function Favorite() {

  // directly accessing persisted global state
    const [count, setCount] = usePersistedState<number>("count", 0);
    
  // setCount(count + 1);
  // console.log(`Favorites rendered ${count} times`);
  return (
    <div>
      <h1>Favorites Page</h1>
      <p>This is where favorite movies will be displayed.</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Render Count
      </button>
      <p>Render Count: {count}</p>
    </div>
  );
}

export default Favorite;
