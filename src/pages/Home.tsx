import { useCallback, useRef, useState } from "react";
import produce from "immer";
import StartButton from "../components/StartButton";
import Button from "../components/Button";
import StepCounter from "../components/StepCounter";
import Title from "../components/Title";

function Home() {
  // number of rows, columns and intervall length

  const nRows = 50;
  const nCols = 50;
  const intervall = 1000;

  // operations array for easier checking neighbors

  const operations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ];

  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < nRows; i++) {
      rows.push(Array.from(Array(nCols), () => 0));
    }
    return rows;
  });

  // function for clearing grid

  const resetGrid = () => {
    const rows = [];
    for (let i = 0; i < nRows; i++) {
      rows.push(Array.from(Array(nCols), () => 0));
    }
    setStep(0);
    setGrid(rows);
  };

  // function for getting random grid

  const randomGrid = () => {
    const rows = [];
    for (let i = 0; i < nRows; i++) {
      rows.push(Array.from(Array(nCols), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    setGrid(rows);
  };

  const runningRef = useRef(running);
  runningRef.current = running;

  // function for running simulation, including all logic for checking neighbors etc

  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < nRows; i++) {
          for (let j = 0; j < nCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < nRows && newJ >= 0 && newJ < nCols) {
                neighbors += g[newI][newJ];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setStep((step) => step + 1);
    setTimeout(runSim, intervall);
  }, []);

  return (
    <div className="">
      <header className="flex justify-between items-end">
        <Title />
        <StartButton
          set={setRunning}
          state={running}
          runSim={runSim}
          runningRef={runningRef}
        />
        <StepCounter step={step} />
        <Button text="reset" funct={resetGrid} />
        <Button text="random" funct={randomGrid} />
      </header>
      <main>
        <div className="grid grid-cols-50">
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                onClick={() => {
                  setGrid(
                    produce(grid, (gCopy) => {
                      gCopy[i][k] = grid[i][k] ? 0 : 1;
                    })
                  );
                }}
                className={`w-5 h-5 border border-black ${
                  grid[i][k] ? "bg-red-300" : "bg-"
                }`}
              ></div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
