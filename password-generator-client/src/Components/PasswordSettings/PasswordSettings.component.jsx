const PasswordSettings = () => {
  return (
    <>
      <div className="password-settings bg-gray-200 flex flex-col justify-center items-center mt-3 text-lg w-[25%] p-6 rounded-md min-w-[250px]">
        <div className="password-length flex justify-around items-center w-full">
          <p className="select-none">password length:</p>
          <div className="flex justify-evenly items-center w-[40%]">
            <button
              id="minus"
              type="button"
              className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:text-green-400 hover:bg-gray-800 hover:border-gray-800 transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-black"
            >
              -
            </button>
            <span id="output-length" className="select-none">
              0
            </span>
            <button
              id="plus"
              type="button"
              className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:text-green-400 hover:bg-gray-800 hover:border-gray-800 transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-black"
            >
              +
            </button>
          </div>
        </div>

        <div className="options flex flex-wrap justify-center items-center w-full mt-1">
          <div className="check flex justify-start items-center w-1/2 mt-6">
            <input
              type="checkbox"
              id="upper-check"
              name="upper-check"
              className="ml-5"
            />
            <label htmlFor="upper-check" className="ml-4">
              Uppercase
            </label>
          </div>
          <div className="check flex justify-start items-center w-1/2 mt-6">
            <input
              type="checkbox"
              id="lower-check"
              name="lower-check"
              className="ml-5"
            />
            <label htmlFor="lower-check" className="ml-4">
              Lowercase
            </label>
          </div>
          <div className="check flex justify-start items-center w-1/2 mt-6">
            <input
              type="checkbox"
              id="numbers-check"
              name="numbers-check"
              className="ml-5"
            />
            <label htmlFor="numbers-check" className="ml-4">
              Numbers
            </label>
          </div>
          <div className="check flex justify-start items-center w-1/2 mt-6">
            <input
              type="checkbox"
              id="symbols-check"
              name="symbols-check"
              className="ml-5"
            />
            <label htmlFor="symbols-check" className="ml-4">
              Symbols
            </label>
          </div>
        </div>
        <div className="strength-container w-full mt-6 flex justify-around items-center bg-gray-300 rounded-lg p-4">
          <label className="text-3xl font-semibold select-none">EASY</label>
          <div className="level-container flex justify-center items-center gap-2">
            <div className="level pl-2 pr-2 pt-4 pb-4 border-black border rounded-sm"></div>
            <div className="level pl-2 pr-2 pt-4 pb-4 border-black border rounded-sm"></div>
            <div className="level pl-2 pr-2 pt-4 pb-4 border-black border rounded-sm"></div>
            <div className="level pl-2 pr-2 pt-4 pb-4 border-black border rounded-sm"></div>
          </div>
        </div>
        <button className="generate-btn w-full p-3 border border-green-600 rounded-lg mt-5 font-semibold text-xl active:bg-green-600 active:text-white transition hover:bg-green-600 hover:text-white">
          GENERATE
        </button>
      </div>
    </>
  );
};

export default PasswordSettings;
