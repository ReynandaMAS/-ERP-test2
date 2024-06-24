import React from "react";
import { Modal } from "flowbite-react";

export default function LoginModal(props) {
  return (
    <Modal
      dismissible
      show={props.show}
      onClose={() => {
        props.funcShow(false); // Assuming this function toggles the modal state in the parent
      }}
    >
      <Modal.Header>
        <div className="text-3xl md:text-4xl text-center text-[#1fc1f9] font-semibold">
          Welcome back to RYN
        </div>
      </Modal.Header>
      <Modal.Body className="px-8 py-6">
        <div className="flex items-center justify-center mb-6">
          <img
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#1fc1f9] bg-white p-1"
            alt="logo"
            src="/picture.svg"
          />
        </div>
        <form className="flex flex-col space-y-4">
          <input
            placeholder="Email"
            type="email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1fc1f9] text-lg placeholder-gray-400"
          />
          <input
            placeholder="Password"
            type="password"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1fc1f9] text-lg placeholder-gray-400"
          />
          <button className="bg-[#1fc1f9] text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition duration-300">
            LOGIN
          </button>
        </form>
        <div className="flex justify-center mt-6 space-x-4">
          <hr className="w-1/4 border-t border-gray-300" />
          <div className="text-sm text-gray-500">or continue with</div>
          <hr className="w-1/4 border-t border-gray-300" />
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-opacity-80 transition duration-300">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm36.5 558.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z" />
            </svg>
            <span>Continue with Google</span>
          </button>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-opacity-80 transition duration-300">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <span>Continue with Facebook</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#1fc1f9] hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <span className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-[#1fc1f9] hover:underline self-center">
              Sign up
            </a>
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
}
