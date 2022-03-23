import Grid from "../components/Grid";
import StartButton from "../components/StartButton";
import StepCounter from "../components/StepCounter";
import Title from "../components/Title";
import Button from "../components/Button";

function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-screen bg-slate-300 bg-auto h-screen gap-10 pt-12">
      <Title />
      <span className="flex flex-row gap-6">
        <StartButton />
        <StepCounter />
        <Button text="Random" />
        <Button text="Next" />
        <Button text="Reset" />
      </span>
      <Grid />
    </main>
  );
}

export default Home;
