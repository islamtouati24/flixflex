import AlertForm from "components/alert";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingButton from "components/loading_button";

export default function LogIN(params) {
  const [errorMessage, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/");
        setError("");
        // ...
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            setError("Wrong password");
            break;
          case "auth/user-not-found":
            setError("User does not existe");
            break;
          default:
            setError(error.code);
            break;
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex min-h-full flex-1 items-center">
      <div className="mx-auto flex h-min w-full max-w-xl flex-col justify-center rounded-md bg-gray-100 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="mx-auto w-auto text-center text-3xl font-bold text-gray-900">
            Flix<span className="text-red-700">Flex</span>.
          </h3>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {errors.email?.type === "required" && (
                  <AlertForm message="Email required" />
                )}
                {errors.email?.type === "pattern" && (
                  <AlertForm message="Please provied a valid email" />
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password", { required: true, minLength: 6 })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {errors.password?.type === "required" && (
                  <AlertForm message="Password required" />
                )}
                {errors.password?.type === "minLength" && (
                  <AlertForm message="Your password must be have at least 6 characters long" />
                )}
              </div>
            </div>
            {errorMessage && <AlertForm message={errorMessage} />}
            {loading ? (
              <LoadingButton />
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-red-600 hover:text-red-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
