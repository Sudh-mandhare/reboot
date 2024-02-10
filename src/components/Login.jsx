
import React from "react";
const Login = (props) => {
  return (
    <div className="relative">
      <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[500px] my-6 mx-auto max-w-3xl max-md:w-[400px]">
          <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-center p-5 pl-6 border-b border-solid border-gray-200 rounded-t">
              {/* Title */}
              <h5 className="text-xl font-semibold max-sm:text-[16px]">
                Login Page
              </h5>
              {/* <!--Close button--> */}
              <button
                className="ml-auto border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.close(false)}
              >
                <span className="text-black-400 h-6 w-6 text-2xl flex items-center outline-none focus:outline-none hover:text-red-600">
                  x
                </span>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center mx-auto  lg:py-0 ">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white max-sm:text-md mb-2 pl-2">
                        Sign in to your account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div className="max-sm:pl-2 pr-2">
                          <label
                            htmlFor="Email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                          >
                            Username
                          </label>
                          <input
                            type="email"
                            name="em"
                            id="Email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>
                        <div className="max-sm:pl-2 pr-2">
                          <label
                            htmlFor="Password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="pass"
                            id="Password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                            required=""
                          />
                        </div>
                        <div className="flex items-center justify-between max-sm:flex-col">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="Remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="Remember"
                                className="text-gray-500 dark:text-gray-300"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="https://www.google.com"
                            className="text-sm font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 max-sm:ml-5  max-sm:w-[80%] "
                        >
                          Sign in
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 max-sm:pl-2 pr-2">
                          Don't have an account yet?{" "}
                          <a
                            href="https://www.google.com"
                            className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                          >
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Login;