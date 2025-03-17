"use client";
const AuthForm = ({ children, title, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-[450px] h-[450px] border border-[#D2D2D2] rounded-xl bg-[#F2F5F7] fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="translate-y-[20%] pt-5 px-12">
        <h2 className="text-black font-bold text-2xl mb-12">{title}</h2>
        <div className="space-y-4 mb-6">{children}</div>
        <button
          type="submit"
          className="text-white py-2.5 w-full bg-purple-gradient rounded-lg cursor-pointer"
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default AuthForm;