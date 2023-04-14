const LogIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="flex mt-2 my-16">
        <input
          className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
          type="text"
        />
        <input
          className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50 w-24"
          type="submit"
          value="계정 생성"
        />
      </form>
    </div>
  );
};

export default LogIn;
