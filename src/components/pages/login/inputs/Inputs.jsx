import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { uselogin } from "../../../../hooks/uselogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { mutate, isPending } = uselogin();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const successMessage = data?.message || "تم تسجيل الدخول بنجاح";
          toast.success(successMessage);
          navigate("/");
        },
        onError: (err) => {
          const errorMessage =
            err?.response?.data?.message ||
            err?.message ||
            "حدث خطأ أثناء تسجيل الدخول";
          toast.error(errorMessage);
        },
      },
    );
  };

  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <form
        className="fieldset rounded-box md:w-[40%] w-full p-4"
        onSubmit={onSubmit}
      >
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input validator w-full focus:border-[#D9176C] focus:outline-[#D9176C]"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <p className="hidden validator-hint">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label">Password</span>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="input validator w-full pr-10 focus:border-[#D9176C] focus:outline-[#D9176C]"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#D9176C]"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <span className="hidden validator-hint">Required</span>
        </label>

        <button
          className="btn bg-[#D9176C] hover:bg-[#b01358] text-white border-none mt-4"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        <button className="mt-1 btn btn-ghost" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}
