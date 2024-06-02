import { useSelector } from "react-redux";
import { StoreState } from "../types";

const useStoreSelector = useSelector.withTypes<StoreState>();
export default useStoreSelector;
