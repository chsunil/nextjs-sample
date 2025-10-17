export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white">
        Colors
      </h3>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-darkborder">
        <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">
          <span className="font-semibold text-lg dark:text-white">
            1. Override Colors
          </span>{" "}
          <br />
          For any change in colors : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>--color-primary: #ee7b11;</span>
            <span>--color-secondary: #effbff;</span>
            <span>--color-warning: #ee7b11;</span>
            <span>--color-grey: #f9f9fb;</span>
            <span>--color-dark: #141414;</span>
            <span>--color-Dark-primary: #001c68;</span>
            <span>--color-cream: #fff4ce;</span>
            <span>--color-darkcream: #ffdfaf;</span>
            <span>--color-success: #37a05b;</span>
            <span>--color-Snowy-sky: #2753c9;</span>
            <span>--color-lightyellow: #ffd44d;</span>
            <span>--color-Smoke: #f1f1f5;</span>
            <span>--color-darkmode: #081738;</span>
            <span>--color-darklight: #000f30;</span>
            <span>--color-midnight_text: #102d47;</span>
            <span>--color-Sky-mist-blue: #aec8df;</span>
            <span>--color-darkborder: #192a4a;</span>
            <span>--color-border_color: #224767;</span>
            <span>--color-blue: #1642b9;</span>
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-darkborder">
        <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">
          <span className="font-semibold text-lg dark:text-white">
            2. Override Theme Colors
          </span>{" "}
          <br />
          For change , go to : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>--color-primary: #ee7b11;</span>
            <span>--color-secondary: #effbff;</span>
          </p>
        </div>
      </div>
    </>
  );
};
