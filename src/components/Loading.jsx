const Loading = () => {
  return (
    <div className="z-[99999] gap-2 bg-black bg-opacity-75 backdrop-blur-sm fixed flex flex-col justify-center items-center h-screen w-full">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
      <h1 className="text-white font-bold">Loading...</h1>
    </div>
  );
};

export default Loading;
