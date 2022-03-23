import { useCallback, useEffect, useState } from "react";
import { columns, interval } from "../assets/constants";

const useGoL = () => {
  const [steps, setSteps] = useState<number>(0);
  const [gameGrid, setGameGrid] = useState<any>({});
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return { gameGrid, isRunning, steps, setIsRunning };
};

export default useGoL;
