import React from "react";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import SignUp from "../SignUp/page";

const Form = ({ formName }) => {
  return (
    <div>
      <div className="flex justify-center items-center md:mt-11 my-11 mx-5">
        <div className="box border-2 border-solid border-[#C1C1C1] md:w-1/3 mx-auto rounded-3xl p-7">
          <div className="mb-3">
            <h1 className="text-center font-semibold text-3xl mb-8">
              {formName === "SignUp" ? "Create your account" : "Login"}
            </h1>
            {formName === "SignUp" ? (
              ""
            ) : (
              <p className="font-medium text-2xl text-center my-4">
                Welcome back to ECOMMERCE
              </p>
            )}
            {formName === "SignUp" ? (
              ""
            ) : (
              <p className="text-base font-normal mb-3 text-center">
                The next gen business marketplace
              </p>
            )}
          </div>
          {formName === "SignUp" ? <Input heading={"Name"} /> : ""}
          <Input heading={"Email"} />
          <Input heading={"Password"} />
          {formName === "SignUp" ? (
            <Button data={"Create account"} />
          ) : (
            <Button data={"Login"} />
          )}
          <p className="text-center">
            Have an Account?
            <Link
              href={formName === "SignUp" ? "/Login" : "/SignUp"}
              className="font-medium text-base ml-2"
            >
              {formName === "SignUp" ? "Login" : "SignUp"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
