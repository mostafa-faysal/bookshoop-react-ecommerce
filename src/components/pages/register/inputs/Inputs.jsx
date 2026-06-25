import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useRegister } from "../../../../hooks/useRegister";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const password_confirmation = confirmPasswordRef.current?.value;

    if (password !== password_confirmation) {
      toast.error("كلمة المرور غير متطابقة");
      return;
    }

    mutate(
      { name, email, password, password_confirmation },
      {
        onSuccess: (data) => {
          const successMessage = data?.message || "تم إنشاء الحساب بنجاح";
          toast.success(successMessage);

          navigate("/");
        },
        onError: (err) => {
          const errorMessage =
            err?.response?.data?.message ||
            err?.message ||
            "حدث خطأ أثناء إنشاء الحساب";
          toast.error(errorMessage);
        },
      },
    );
  };

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center my-8">
      <form
        className="fieldset rounded-box w-[90%] md:w-[40%] p-4 bg-white shadow-sm"
        onSubmit={onSubmit}
      >
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input validator w-full focus:border-[#D9176C] focus:outline-[#D9176C]"
            placeholder="Name"
            required
            ref={nameRef}
          />
        </fieldset>

        <fieldset className="mt-2 fieldset">
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

        <label className="mt-2 fieldset">
          <span className="label">Password</span>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="input validator w-full pr-10 focus:border-[#D9176C] focus:outline-[#D9176C]"
              placeholder="Password"
              required
              minLength="6"
              ref={passwordRef}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#D9176C]"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <span className="hidden validator-hint">Min 6 characters</span>
        </label>

        <label className="mt-2 fieldset">
          <span className="label">Confirm Password</span>
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="input validator w-full pr-10 focus:border-[#D9176C] focus:outline-[#D9176C]"
              placeholder="Confirm Password"
              required
              minLength="6"
              ref={confirmPasswordRef}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#D9176C]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </label>

        <button
          className="btn bg-[#D9176C] hover:bg-[#b01358] text-white border-none mt-6"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Signing up..." : "Sign Up"}
        </button>
        <button className="mt-1 btn btn-ghost" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}
