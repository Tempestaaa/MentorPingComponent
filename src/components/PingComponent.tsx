import { useState } from "react";
import dashboard from "../assets/images/illustration-dashboard.png";
import logo from "../assets/images/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PingComponent = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleError = (): void => {
    if (!email) return setIsError(true);
    if (!emailRegex.test(email)) return setIsError(true);
    setIsError(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleError();
  };

  return (
    <article className="font-default w-[40rem] mx-auto grid gap-16 my-16">
      <section className="grid grid-rows-[auto_1fr_1fr] place-items-center gap-6">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="grid grid-rows-[1fr_auto] gap-4">
          <h2 className="font-light text-text text-4xl">
            We are launching{" "}
            <span className=" font-bold text-black">soon!</span>
          </h2>
          <p className="text-center">Subcribe and get notified</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-rows-2 w-full">
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your email address..."
              className={`border-2 border-text outline-none rounded-[2rem] px-8 py-3 col-start-1 col-end-3 ${
                isError ? "border-error" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              value={"Notify Me"}
              className=" bg-btn rounded-[2rem] text-white font-semibold cursor-pointer hover:opacity-80"
            />
          </div>
          {isError && (
            <p className="text-xs italic mt-2 text-error pl-8">
              Please provide a valid email address
            </p>
          )}
        </form>
      </section>
      <section>
        <img src={dashboard} />
      </section>
      <footer className="grid gap-4">
        <div className="flex gap-2 items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer group hover:bg-btn">
            <FaFacebook className="text-xl rounded-full group-hover:text-white" />
          </div>
          <div className="p-2 rounded-full cursor-pointer group hover:bg-btn">
            <FaTwitter className="text-xl rounded-full group-hover:text-white" />
          </div>
          <div className="p-2 rounded-full cursor-pointer group hover:bg-btn">
            <FaInstagram className="text-xl rounded-full group-hover:text-white" />
          </div>
        </div>
        <p className="text-text text-xs text-center">
          &copy; Copyright Ping. All rights reserved
        </p>
      </footer>
    </article>
  );
};

export default PingComponent;
