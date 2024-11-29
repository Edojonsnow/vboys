/* eslint-disable @next/next/no-css-tags */
import Link from "next/link";
import React, { useEffect } from "react";

const MailchimpForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `#mc_embed_signup{background:transparent; font:14px Helvetica,Arial,sans-serif; }`,
        }}
      />
      <div id="mc_embed_signup">
        <form
          action="https://instagram.us21.list-manage.com/subscribe/post?u=8948ce36ffa9598bbdce03c53&amp;id=c62a4d6fa6&amp;f_id=00e3ffe6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className={` mailchimp-margin flex flex-col items-center $"validate"`}
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className={`  $"mc-field-group"`} data-aos="fade-left">
              <label
                htmlFor="mce-EMAIL"
                className="uppercase  text-white text-[10px]"
              >
                Subscribe to our Newsletter
              </label>
              <div>
                <input
                  type="email"
                  name="EMAIL"
                  className={`mailchimp placeholder:text-black w-64 h-12 bg-bg  pl-4  `}
                  id="mce-EMAIL"
                  required=""
                  placeholder="Enter E-mail Address"
                />

                <input
                  className="mailchimp w-16 h-12 bg-bg  cursor-pointer "
                  type="submit"
                  name="subscribe"
                  value="Go"
                />
              </div>
            </div>
            <div id="mce-responses" className={` $"clear"`}>
              <div
                className={`text-white text-[10px] $"response"`}
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className={` $"response"`}
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;
