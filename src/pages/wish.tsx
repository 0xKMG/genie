export default function Wish() {
  return (
    <div className="flex min-h-screen flex-col items-center  bg-[#E4DDD6] p-12">
      <div className="mb-10 items-start">
        <img
          src="/assets/genie.png"
          alt="Company Logo"
          className="brightness-0 grayscale"
          style={{ height: '100px' }}
        />
      </div>
      <div className="text-center">
        <h2 className="mb-12 text-4xl font-bold">MAKE A WISH (Coming Soon) </h2>
        <p className="text-s mb-12">
          Tell Genie what kind of person you’d like to meet and what you’d need
          them to help you — we’ll match the right ones for you.
        </p>
        <div className="mb-8">
          <textarea
            className="h-40 w-full resize-none rounded-lg border-2 border-black bg-[#E4DDD6] p-4 text-lg"
            placeholder=""
          ></textarea>
        </div>
        <button className="w-full rounded-lg bg-black py-4 text-lg font-semibold text-white">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
