import API from "@/Service/API";
import { useEffect, useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';
import InitSource from "../common/InitSource";
import HeaderLogoTitleLogin from "./components/HeaderLogoTitleLogin";
import LayoutSignIn from "./components/LayoutSignIn";
import StepEmail1 from "./components/StepEmail1";
import StepEmail2 from "./components/StepEmail2";
import StepPhone1 from "./components/StepPhone1";
import TabSelect from "./components/TabSelect";
import { ParamsFormIF, StepTypeIF } from "./Interface/SignInInterface";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";
import ButtonActionAuth from "./components/ButtonActionAuth";

export default function Register() {
  const navigate = useNavigate()
  const [token, setToken] = useState<string>('');
  const [StepType, setStepType] = useState<StepTypeIF>({
    screen: "login",
    tabActive: "email",
    step: 1
  });
  const [ParamsForm, setParamsForm] = useState<ParamsFormIF>({
    email: "",
    phone: "",
    code_sms: "",
    dial_code: "",
    code: "",
    password: ""
  });

  const handeReLoadInterface = async () => {
    // const resData = await axios.get(`https://api.staging.measureme.app/openapi.json`, {
    //   headers: {
    //   }
    // })
    // console.log(resData, 'resData');
  };

  useEffect(() => {
    handeReLoadInterface();
  }, []);

  const handleSubmitFormEmail = async () => {
    const userAgent = window.navigator.userAgent;

    if (!token) {
      alert("Please confirm the captcha");
      return false;
    }

    const res = await API.Auth.loginEmail(
      {
        email: ParamsForm?.email
      },
      {
        'recaptcha-token': token,
        'user-agent': userAgent,
      }
    );
    console.log(res, "res");
  };

  const handleVerify = (token: string) => {
    setToken(token);
  };

  return (
    <>
      <InitSource />
      <LayoutSignIn>
        {StepType?.screen === "login" && (
          <HeaderLogoTitleLogin title="Log in to the Fytted" />
        )}
        {StepType?.screen === "login" ? (
          <>
            <ButtonActionAuth StepType={StepType} setStepType={setStepType} />
          </>
        ) : null}

        {StepType?.screen === "auth_email_phone" && (
          <>
            {StepType?.tabActive === "phone" && StepType?.step === 1 && (
              <HeaderLogoTitleLogin title="Sign up using phone or email to log in" />
            )}
            {StepType?.tabActive === "phone" && StepType?.step === 2 && (
              <HeaderLogoTitleLogin
                title="Verify your phone number"
                description="Code sent to +1 (132) 776 8212 "
              />
            )}feat/i

            {StepType?.tabActive === "email" && StepType?.step === 1 && (
              <HeaderLogoTitleLogin title="Sign up using phone or email to log in" />
            )}
            {StepType?.tabActive === "email" && StepType?.step === 2 && (
              <HeaderLogoTitleLogin
                title="Verify your email"
                description="Code sent to alexsmith@gmail.com"
              />
            )}
            <TabSelect StepType={StepType} setStepType={setStepType} />
            {StepType?.tabActive === "email" && StepType?.step === 1 && (
              <StepEmail1
                StepType={StepType}
                setStepType={setStepType}
                ParamsForm={ParamsForm}
                setParamsForm={setParamsForm}
              />
            )}
            {StepType?.tabActive === "email" && StepType?.step === 2 && (
              <StepEmail2
                StepType={StepType}
                setStepType={setStepType}
                ParamsForm={ParamsForm}
                setParamsForm={setParamsForm}
                handleSubmitFormEmail={handleSubmitFormEmail}
              />
            )}

            {StepType?.tabActive === "phone" && StepType?.step === 1 && (
              <StepPhone1
                StepType={StepType}
                setStepType={setStepType}
                ParamsForm={ParamsForm}
                setParamsForm={setParamsForm}
              />
            )}
            {StepType?.tabActive === "phone" && StepType?.step === 2 && (
              <StepEmail2
                StepType={StepType}
                setStepType={setStepType}
                ParamsForm={ParamsForm}
                setParamsForm={setParamsForm}
              />
            )}
          </>
        )}
        <div className="p-2 flex justify-center">
          <GoogleReCaptchaProvider reCaptchaKey="6Ldp7ToqAAAAAGqXWj-2hbS3T2M9qeOufJBrxQEO">
            <GoogleReCaptcha onVerify={handleVerify} />
          </GoogleReCaptchaProvider>
        </div>
        <div className='flex justify-center mt-4'>
          <span className='text-[14px] text-[#000000]'>Don’t have an account? </span>
          <span className='text-[14px] text-[#5F4DD7] ml-1 cursor-pointer' onClick={() => navigate('/login')}>Login</span>
        </div>
      </LayoutSignIn>
    </>
  );
}
