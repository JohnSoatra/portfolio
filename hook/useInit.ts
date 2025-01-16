import { useEffect } from "react";
import useData, { UseData } from "./useData";

function useInit<D, List extends Array<any>>(init: D, callback: ((update: ((valueFun: (value: D) => D) => void), dependent: List) => void), dependent: List): UseData<D> {
  const [data, setData] = useData(init);

  useEffect(() => {
    callback(setData, dependent);
  }, dependent);


  return [data, setData];
}

export default useInit;
