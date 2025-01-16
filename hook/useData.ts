import { useState } from "react";

export type UseData<D> = [D, (valueFun: ((value: D) => D)) => void];

function useData<D>(initialState: D): UseData<D>;
function useData<D = undefined>(): UseData<D>;
function useData<D>(initialState?: D): UseData<D | undefined> {
  const [data, _setData] = useState(initialState);

  const setData: UseData<D | undefined>[1] = (valueFun) => {
    _setData(value => valueFun(value));
  }

  return [data, setData] as const;
}

export default useData;
