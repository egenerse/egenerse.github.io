import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const [, setRecaptchaValue] = React.useState<string>();

  const onChange = (token: string | null) => {
    if (!!token) {
      setRecaptchaValue(token);
      console.log("Captcha value:", token);
    }
  };

  return (
    <div className="myForm">
      <ReCAPTCHA
        sitekey="6LfTT08hAAAAAF7yvr13xbyRsGAp0737BLf3TtMY"
        onChange={onChange}
      />
    </div>
  );
};
