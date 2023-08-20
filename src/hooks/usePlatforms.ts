import useData from "./useData";
import { Platform } from "./useGames";

const usePlataforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlataforms