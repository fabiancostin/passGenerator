const GeneratedPassword = () => {
  return (
    <>
      <div className="generated-password bg-gray-200 flex justify-between items-center p-5 w-[25%] mt-5 text-lg rounded-md">
        <p>here is your password...</p>
        <button className="copy-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="hover:fill-green-600 transition"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default GeneratedPassword;
