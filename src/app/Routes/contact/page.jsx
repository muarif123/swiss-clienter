"use client";
import React, { useState } from "react";

const page = () => {
  const [gmail, setgmail] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "56c44d26-61e6-4d0b-990f-d6763bf377dc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      //   console.log(result);
      setgmail(result.data);
    }

    setTimeout(() => {
      setgmail({
        name:"",
        email:"",
        phoneNo:"",
        noOfPersons:"",
        childrenAge:"",
        departingON:"",
        departingFrom:"",
        noOfDays:"",
        noOfNights:"",
        destination:""
      });
    }, 500);
  };


  const {
    name,
    email,
    phoneNo,
    noOfPersons,
    childrenAge,
    departingON,
    departingFrom,
    noOfDays,
    noOfNights,
    destination,
  } = gmail;

  return (
    <div className="dark:bg-gray-800">
      <section className=" dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
                Plan Your Next Tour
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p style={{marginLeft:"14px"}} className="mt-3 mb-12 text-lg text-gray-500 ">
                  At Swiss International we believe that keeping our clients
                  informed, is critical to sales growth. Most travel is planned
                  but spontaneous travel is often triggered by good
                  communication. We are a strong user of electronic
                  communication for its speed and simplicity.
                </p>
                <ul className="mb-6 md:mb-0 mt-10">
                  <li  className="flex  ">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                   
                                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M31.7091 15.2475C31.4927 12.9341 30.6966 10.7177 29.3984 8.81412C28.1003 6.91054 26.3443 5.38464 24.3014 4.38503C22.2585 3.38541 19.9984 2.94614 17.7412 3.10998C15.4839 3.27383 13.3065 4.03522 11.4208 5.32C9.8008 6.43252 8.44083 7.89972 7.43858 9.6162C6.43633 11.3327 5.81667 13.2558 5.62413 15.2475C5.43524 17.2261 5.67758 19.2231 6.33355 21.0936C6.98953 22.9641 8.04269 24.6611 9.41663 26.0617L17.5875 34.4692C17.7308 34.6176 17.9013 34.7354 18.0892 34.8157C18.277 34.8961 18.4785 34.9375 18.682 34.9375C18.8856 34.9375 19.0871 34.8961 19.2749 34.8157C19.4628 34.7354 19.6333 34.6176 19.7766 34.4692L27.9166 26.0617C29.2906 24.6611 30.3437 22.9641 30.9997 21.0936C31.6557 19.2231 31.898 17.2261 31.7091 15.2475ZM25.7583 23.8292L18.6666 31.1125L11.575 23.8292C10.5298 22.7557 9.72928 21.4578 9.23081 20.0288C8.73233 18.5997 8.54834 17.075 8.69204 15.5642C8.83668 14.0301 9.31143 12.5482 10.082 11.2256C10.8525 9.90299 11.8996 8.77278 13.1475 7.91666C14.7831 6.80079 16.703 6.20555 18.6666 6.20555C20.6302 6.20555 22.5502 6.80079 24.1858 7.91666C25.4299 8.76947 26.4747 9.89469 27.245 11.2115C28.0154 12.5283 28.4922 14.0039 28.6412 15.5325C28.7896 17.0484 28.6079 18.5793 28.1093 20.0142C27.6107 21.4491 26.8076 22.7522 25.7583 23.8292ZM18.6666 9.5C17.2945 9.5 15.9532 9.91787 14.8124 10.7008C13.6715 11.4837 12.7823 12.5965 12.2572 13.8984C11.7321 15.2003 11.5947 16.6329 11.8624 18.015C12.1301 19.3971 12.7908 20.6667 13.7611 21.6631C14.7313 22.6596 15.9674 23.3382 17.3132 23.6131C18.6589 23.888 20.0538 23.7469 21.3215 23.2076C22.5892 22.6684 23.6726 21.7551 24.4349 20.5834C25.1972 19.4117 25.6041 18.0342 25.6041 16.625C25.6001 14.7366 24.8678 12.9268 23.5677 11.5915C22.2675 10.2562 20.5053 9.50418 18.6666 9.5ZM18.6666 20.5833C17.9043 20.5833 17.1592 20.3512 16.5254 19.9162C15.8916 19.4813 15.3976 18.8631 15.1058 18.1398C14.8141 17.4165 14.7378 16.6206 14.8865 15.8528C15.0352 15.0849 15.4023 14.3796 15.9413 13.826C16.4803 13.2724 17.1671 12.8955 17.9147 12.7427C18.6623 12.59 19.4373 12.6684 20.1416 12.968C20.8458 13.2676 21.4477 13.7749 21.8712 14.4259C22.2947 15.0768 22.5208 15.8421 22.5208 16.625C22.5208 17.6748 22.1147 18.6816 21.3919 19.424C20.6691 20.1663 19.6888 20.5833 18.6666 20.5833Z" fill="#581ff8"/>
                            </svg>
                    </div>
                    <div style={{marginLeft:"20px"}} className=" mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-500">
                        P-49 HALI ROAD I.T TOWER GULBERG III LAHORE PAKISTAN
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M30.4237 20.5833C30.0846 20.5833 29.73 20.4725 29.3908 20.3933C28.7045 20.2357 28.0297 20.0294 27.3712 19.7758C26.656 19.5086 25.8699 19.5225 25.164 19.8148C24.4582 20.1071 23.8826 20.6572 23.5479 21.3592L23.2087 22.0875C21.7115 21.2154 20.3283 20.1513 19.0925 18.9208C17.8944 17.6516 16.8583 16.231 16.0092 14.6933L16.7183 14.3608C17.4018 14.0171 17.9374 13.4259 18.222 12.701C18.5067 11.9761 18.5202 11.1687 18.26 10.4342C18.0151 9.7518 17.8143 9.05363 17.6587 8.34417C17.5817 7.99584 17.52 7.63167 17.4737 7.28334C17.2865 6.16807 16.7177 5.1581 15.8698 4.4353C15.0219 3.7125 13.9506 3.32439 12.8487 3.34084H8.20832C7.55657 3.33996 6.91201 3.48056 6.31687 3.75343C5.72174 4.02629 5.18948 4.42526 4.75498 4.92417C4.31148 5.43662 3.98125 6.04161 3.78698 6.69756C3.59271 7.35351 3.53901 8.04489 3.62957 8.72417C4.4676 15.3142 7.39927 21.4362 11.97 26.1408C16.5508 30.8351 22.5117 33.846 28.9283 34.7067C29.1284 34.7224 29.3294 34.7224 29.5296 34.7067C30.6664 34.7084 31.7641 34.28 32.6129 33.5033C33.0987 33.0571 33.4871 32.5105 33.7528 31.8992C34.0185 31.288 34.1554 30.626 34.1546 29.9567V25.2067C34.1463 24.1126 33.7705 23.0551 33.0907 22.2127C32.411 21.3704 31.4689 20.7948 30.4237 20.5833ZM31.1791 30.0833C31.1786 30.3043 31.1331 30.5227 31.0455 30.7245C30.9579 30.9263 30.8301 31.107 30.6704 31.255C30.5014 31.4131 30.3004 31.5306 30.0817 31.5991C29.8631 31.6676 29.6323 31.6852 29.4062 31.6508C23.6532 30.8792 18.3066 28.1865 14.19 23.9875C10.0698 19.756 7.4252 14.2458 6.66665 8.31251C6.63316 8.08028 6.65037 7.84332 6.71702 7.61877C6.78368 7.39422 6.89813 7.1877 7.05207 7.01417C7.19794 6.84816 7.3764 6.71577 7.57569 6.62571C7.77499 6.53565 7.99059 6.48997 8.20832 6.49167H12.8333C13.1897 6.48273 13.5381 6.6009 13.8192 6.82607C14.1002 7.05124 14.2967 7.3695 14.375 7.72667C14.375 8.15417 14.5137 8.59751 14.6062 9.025C14.7844 9.85446 15.0214 10.6694 15.3154 11.4633L13.1571 12.5083C12.7861 12.6832 12.4978 13.0021 12.3554 13.395C12.2012 13.7805 12.2012 14.2129 12.3554 14.5983C14.5742 19.4794 18.3945 23.4029 23.1471 25.6817C23.5224 25.84 23.9434 25.84 24.3187 25.6817C24.7013 25.5354 25.0118 25.2393 25.1821 24.8583L26.1533 22.6417C26.9487 22.9395 27.7624 23.1828 28.5891 23.37C28.99 23.465 29.4217 23.5442 29.8379 23.6075C30.1857 23.6879 30.4956 23.8897 30.7148 24.1784C30.934 24.467 31.0491 24.8248 31.0404 25.1908L31.1791 30.0833ZM22.0833 3.16667C21.7287 3.16667 21.3587 3.16667 21.0042 3.16667C20.5953 3.20237 20.217 3.40341 19.9524 3.72558C19.6879 4.04776 19.5588 4.46466 19.5935 4.88459C19.6283 5.30451 19.824 5.69306 20.1377 5.96476C20.4514 6.23645 20.8574 6.36903 21.2662 6.33334H22.0833C24.5366 6.33334 26.8893 7.33423 28.6241 9.11582C30.3588 10.8974 31.3333 13.3138 31.3333 15.8333C31.3333 16.1183 31.3333 16.3875 31.3333 16.6725C31.2991 17.0902 31.4276 17.5048 31.6906 17.8253C31.9536 18.1459 32.3296 18.3463 32.7362 18.3825H32.8596C33.2455 18.3841 33.618 18.237 33.9034 17.9702C34.1889 17.7035 34.3665 17.3364 34.4012 16.9417C34.4012 16.5775 34.4012 16.1975 34.4012 15.8333C34.4012 12.4767 33.104 9.25725 30.7943 6.88225C28.4847 4.50724 25.3516 3.17087 22.0833 3.16667ZM25.1667 15.8333C25.1667 16.2533 25.3291 16.656 25.6182 16.9529C25.9073 17.2499 26.2994 17.4167 26.7083 17.4167C27.1172 17.4167 27.5093 17.2499 27.7984 16.9529C28.0876 16.656 28.25 16.2533 28.25 15.8333C28.25 14.1536 27.6003 12.5427 26.4438 11.355C25.2873 10.1673 23.7188 9.50001 22.0833 9.50001C21.6744 9.50001 21.2823 9.66682 20.9932 9.96375C20.7041 10.2607 20.5417 10.6634 20.5417 11.0833C20.5417 11.5033 20.7041 11.906 20.9932 12.2029C21.2823 12.4999 21.6744 12.6667 22.0833 12.6667C22.9011 12.6667 23.6853 13.0003 24.2636 13.5942C24.8418 14.188 25.1667 14.9935 25.1667 15.8333Z" fill="#581ff8"/>
                            </svg>
                    </div>
                    <div style={{marginLeft:"20px"}} className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <a
                        href="tel:+92 321 4743165"
                        className="text-gray-500"
                      >
                        Mobile: +92 321 4743165
                      </a>{" "}
                      <br />
                      <a
                        href="tel:+92 304 9236819"
                        className="text-gray-500"
                      >
                        Mobile: +92 304 9236819
                      </a>{" "}
                      <br />
                      {/* <a
                        href="mailto:swissinternational47@gmail.com"
                        className="text-gray-500 dark:text-slate-400"
                      >
                        Mail: swissinternational47@gmail.com
                      </a> */}
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#581ff8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
</svg>

                           
                    </div>
                    <div style={{marginLeft:"20px"}} className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-500 ">
                        Monday - Saturday: 10:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-500">
                         Sunday: closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold">BOOK NOW!</h2>
                <form id="contactForm" onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          {" "}
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="name"
                          value={name}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="email"
                          value={email}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="tel"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="phoneNo"
                          value={phoneNo}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          No. of Persons
                        </label>
                        <input
                          type="number"
                          id="number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="noOfPersons"
                          value={noOfPersons}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <input
                          className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Adults
                        </label>
                        <input
                          className="ms-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Children
                        </label>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          Children Age
                        </label>
                        <input
                          type="number"
                          id="number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="childrenAge"
                          value={childrenAge}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          Departing On
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="departingON"
                          value={departingON}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          Departing From
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="departingFrom"
                          value={departingFrom}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          No. Of Days
                        </label>
                        <input
                          type="number"
                          id="number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="noOfDays"
                          value={noOfDays}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider">
                          No. Of Nights
                        </label>
                        <input
                          type="number"
                          id="number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-500 sm:mb-0"
                          name="noOfNights"
                          value={noOfNights}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Destination
                        </label>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="destination"
                          value={destination}
                        >
                          <option selected>Choose a country</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Kazakhastan">Kazakhastan</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Oman">Oman</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Egypt">Egypt</option>
                          <option value="China">China</option>
                          <option value="Hong Kong">Hong Kong</option>
                        </select>
                      </div>
                      <div className="  mx-0 mb-1 sm:mb-4">
                        <input
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Air Tickets
                        </label>
                        <input
                          className="ms-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Hotel Reservations
                        </label>{" "}
                        <br />
                        <input
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Daily Tours
                        </label>
                        <input
                          className="ms-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Transfers
                        </label>{" "}
                        <br />
                        <input
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Meals
                        </label>
                        <input
                          className="w-4 h-4 ms-5 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-500"
                          type="checkbox"
                        />{" "}
                        <label
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          htmlFor=""
                        >
                          Tour Guide
                        </label>{" "}
                        <br />
                      </div>
                    </div>
                  </div>
                  <button
                    className="button type--B"
                    style={{ height: "55px", width: "200px" }}
                  >
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">Send Us</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="w-full text-center underline text-4xl">
          Reach Out To Us
        </div>

        <iframe
          className="mx-auto mt-10"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13605.195554223088!2d74.3410888!3d31.5159499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.%20Tower!5e0!3m2!1sen!2s!4v1703246396413!5m2!1sen!2s"
          width="80%"
          height="500px"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default page;
