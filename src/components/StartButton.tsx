function StartButton({ set, state, runSim, runningRef }: any) {
  return (
    <button
      onClick={() => {
        set(!state);
        if (!state) {
          runningRef.current = true;
          runSim();
        }
      }}
      className="border-2 px-6 py-2 rounded-xl bg-red-300 text-xl hover:bg-red-400"
    >
      {state ? "stop" : "start"}
    </button>
  );
}

export default StartButton;
