const Countdown = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-10">
      <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
      <div className="text-xl">
        <span className="mr-2">7d</span>
        <span className="mr-2">2h</span>
        <span className="mr-2">45m</span>
      </div>
    </div>
  );
};

export default Countdown;
