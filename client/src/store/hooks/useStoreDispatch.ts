import { useDispatch } from "react-redux";
import { StoreDispatch } from "../types";

const useStoreDispatch = useDispatch.withTypes<StoreDispatch>();
export default useStoreDispatch;
