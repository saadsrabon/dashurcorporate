/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Document, Page } from 'react-pdf';
import cookiesDoc from '../assets/cookies_dashur.pdf';

export const CookiesFile = ({showCookies ,setShowCookies}) => {
  const scrollableBoxRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
 


  useEffect(() => {
    const scrollableBox = scrollableBoxRef.current;

    if (scrollableBox && autoScroll) {
      scrollableBox.scrollTop = scrollableBox.scrollHeight;
    }
  }, [autoScroll]);

  const handleCheckboxChange = () => {
    setAutoScroll(!autoScroll);
  };
  return (
  

<div className=" bottom-5 w-[40%] "  id="my_modal_3" >
  <div className="modal-boxx ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={()=>setShowCookies(prev=>!prev)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div>
        <h2 className="text-4xl font-bold text-center uppercase py-2 ">Cookies</h2>
        <div className="my-4" style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc',  }} ref={scrollableBoxRef}>
      <div style={{ padding: '10px' }}>
      
        {/* Add more content as needed */}
        <p>We at dashurai.com use cookies to ensure you get the best experience when you are using our services. This Cookie Policy provides you with clear and comprehensive information about the cookies we use and the purpose for using those cookies on this Platform.

Please read the following carefully to understand our policies and practices regarding the use of cookies on our Platform. By using or accessing our Platform, you agree to this Cookie Policy. This policy may change from time to time and your continued use of the Platform is deemed to be acceptance of such changes, so please check the policy periodically for updates.


YOUR CONSENT

You consent to placement of cookies on your browser by us and our third-party service providers. Please read this Cookie Policy carefully for details about why we use cookies and the information they collect from and about you.


WITHDRAW YOUR CONSENT ANY TIME

If you do not wish to accept cookies in connection with your use of the Platform, you will need to delete and block or disable cookies via your browser settings; see below for more information on how to do this. Please note that disabling cookies will affect the functionality of the Platform and may prevent you from being able to access certain features on the Platform.


WHAT ARE COOKIES?

A cookie is a small file of letters and numbers that may be stored on your browser or the hard drive of your computer when you visit our Platform. Cookies contain information about your visits to that Platform. A cookie is a small piece of data that a Platform asks your browser to store on your computer or mobile device. The cookie allows the Platform to "remember" your actions or preferences over time. Most browsers support cookies, but users can set their browsers to decline them and can delete them whenever they like.

WHY DO WE USE COOKIES?
.
Cookies are commonly used by Platforms to serve many different functions. We use cookies on our Platform to allow us to tailor our Platform to your needs and deliver a better and more personalized service. Cookies help us improve the performance of our Platform by enabling us to:

Help you navigate between pages on the Platform efficiently
Protect your security
Remember information about your preferences and recognize you when you return to our Platform
Allow us to customize our Platform according to your individual interests
Measure how people are using our services in order to improve our services and browsing experience
Personalize advertising and make the content more relevant for you
Speed up your searches

Make our Platform easier to use
Generally give you a better online experience
Cookies are not unsafe or in themselves a threat to your online privacy, as we do not store sensitive information. The cookies used on our Platform never collect anything that personally identifies you, such as your name or address, and we never sell your details to any third parties.


HOW ARE COOKIES USED?

The web server providing the webpage can store a cookie on the user's computer or mobile device. An external web server that manages files included or referenced in the webpage is also able to store cookies. All these cookies are called http header cookies. Another way of storing cookies is through JavaScript code contained or referenced in that page.

Each time the user requests a new page, the web server can receive the values of the cookies it previously set and return the page with content relating to these values. Similarly, JavaScript code is able to read a cookie belonging to its domain and perform an action accordingly.

We use “analytics” cookies, which, in conjunction with our web server’s log files, allow us to calculate the aggregate number of people visiting our Platform and which parts of our Platform are most popular. This helps us gather feedback so that we can improve our Platform and better serve our users. We do not generally store any personal information that you provide to us in a cookie.
We also use “social media” cookies to personalize your interaction with third-party social media platforms such as Twitter and Facebook, where our Platform uses such features. Such cookies recognize users of these social media sites when you view social media content on our Platform. They also allow you to quickly share content across media, through the use of simple “sharing” buttons.


WHAT ARE DIFFERENT TYPES OF COOKIES?

First-party cookies – these are our own cookies set by our Platform, controlled by us and used to provide information about the usage of our Platform.
Third-party cookies – these are cookies from any other domain. We use a number of suppliers that may also set cookies on your device on our behalf when you visit our Platform to allow them to deliver the services they are providing.


HOW LONG DO COOKIES STAY ON YOUR COMPUTER?

Cookies that are used on a Platform may be either session cookies or persistent cookies.
Session cookies are temporary cookies that remain on your device until you leave the Platform.
Persistent cookies are stored on your hard drive until you delete them or they reach their expiry date. These may, for example, be used to remember your preferences when you use the Platform and recognize you on your return.


WHAT COOKIES DO WE USE?

Strictly Necessary cookies: Some cookies are essential for the operation of our Platform. These cookies are essential in helping you to move around our Platform and use the features, such as accessing secure areas of the Platform. We may use Strictly Necessary cookies to:
Remember the goods and services you selected when you get to the payment page
Identify you as being logged in to the site
Provide access to protected areas of a Platform
Remember previously entered text so it’s not lost if the page refreshes
Consent is not required for Strictly Necessary cookies, as they are required for us to provide the services requested by you.

Performance cookies: These cookies simply help us improve the way our Platform works. We utilize these cookies to analyze how our visitors use our Platform and to monitor our Platform performance. They tell us how people use each page, which ones are most commonly viewed, or whether any errors occurred. This allows us to provide a high-quality experience and quickly identify then fix any issues that arise. We may use Performance cookies to:
Store preferences to see which method of linking between pages is most effective
Enable web analytics to provide anonymous statistics on how our Platform is used
To assist with error management in helping us improve the Platform by measuring any errors that occur
Monitor ad response rates and see how effective our adverts are
You can delete or manage Performance cookies as instructed in the last section of this Cookie Policy.

Functionality cookies: We use Functionality cookies to allow us to remember your preferences. For example, we may store your geographic location in a cookie to ensure that we show you our Platform localized for your area. We also use Functionality cookies to provide you with enhanced services such as allowing you to watch a video online or comment on a blog. We may use Functionality cookies to:
Remember settings you have applied such as layout, colors, font sizes and page backgrounds
Remember if we’ve already asked you if you want to fill in a survey
Detect if you have already seen a pop-up to ensure it doesn't get shown to you again
Process a request from a user to submit a comment or blog or forum post
If you delete these Functionality cookies, any preferences or settings you selected will not be retained for later visits.

Targeting cookies: These cookies help us make sure the adverts you see on our Platform are relevant to you and your interests. Cookies may be placed on your device by our third-party service providers, which remember that you have visited a Platform in order to provide you with targeted adverts which are more relevant to you. However, we do not tell our advertisers who you are. We may use Targeting cookies to:
Collect information about browser habits to target advertising
Collect information about browser habits to target Platform content
Provide links to social networks like Facebook
Provide advertising agencies with information on your visit so that they can present you with adverts you may be interested in

HOW TO MANAGE YOUR COOKIES

Most Internet browsers are initially set up to automatically accept cookies. Unless you have adjusted your browser settings to refuse cookies, our system will issue cookies when you direct your browser to our Platform.

You can refuse to accept cookies by activating the appropriate setting on your browser. Please be aware that restricting the use of cookies may impact on the functionality of our Platform and you may be unable to access certain parts of our Platform. Depending on your browser, further information can be obtained via the following links:

Firefox
Internet Explorer
Google Chrome
Safari
Opera

If you use different devices to access our Platform (e.g. your computer, mobile) you will need to ensure that each browser on each device is adjusted to suit your cookie preferences. Mobile phone users may have to refer to their handset manual for details on how to block cookies using their mobile browser.


CONSENT TO THE USE OF COOKIES ON THIS PLATFORM

By continuing to use our Platform, you are deemed to consent to our use of the cookies described in this Policy. If you do not consent to our Cookie Policy, then please read the next section of this policy entitled “Blocking Our Use of Cookies.”


BLOCKING OUR USE OF COOKIES
You as a user have the right to decline the use of cookies during your visit to our site. Whilst this is your right, it may result in you not being able to use all of the functionality of our site.

You can block our use of cookies by activating the settings in your browser. In order to use certain services offered through our Platform, your web browser must accept cookies. If you choose to withhold consent, or subsequently block cookies, some aspects of the Platform may not work properly and you may not be able to access all or part of our Platform.

The Help feature on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie and how to disable cookies altogether. Additionally, you can disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-on's settings or visiting the Platform of its manufacturer.


LINKS TO OTHER PLATFORMS

This Cookie Policy does not cover the links within this site linking to other Platforms. We encourage you to read the privacy statements on the other Platforms you visit.</p>
       
      </div>
      <div>
        <label className="">
          <input className="mr-2" type="checkbox" checked={autoScroll} onChange={handleCheckboxChange} />
           I accept the cookies
        </label>
      </div>
    </div>
      
    </div>
  </div>
</div>
  )
}
