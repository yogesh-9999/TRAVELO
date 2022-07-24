import React, { useState, useEffect } from "react";

export const Stations = () => {
  const [city, setCity] = useState("Delhi");

  const [city1, setCity1] = useState("Delhi");
  const [citystations, setCitystations] = useState([]);
  const [trainname, setTrainname] = useState("Rajdhani");
  const [trainname1, setTrainname1] = useState("Rajdhani");
  const [traindetails, setTraindetails] = useState([]);


  const getstation = async () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "b0d8e4d967msh76ad3a70c6c1503p1612f3jsnecf809984cd0",
        "X-RapidAPI-Host": "rstations.p.rapidapi.com",
      },
      body: JSON.stringify({
        search: city, // Use your own property name / key
      }),
    };

    fetch("https://rstations.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCitystations(response);
      })
      .catch((err) => console.error(err));
  };
 

  const getTraindetails = async () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b0d8e4d967msh76ad3a70c6c1503p1612f3jsnecf809984cd0",
        "X-RapidAPI-Host": "trains.p.rapidapi.com",
      },
      body: JSON.stringify({
        search: trainname, // Use your own property name / key
      }),
    };

    fetch("https://trains.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      
        setTraindetails(response);
        // setTraindetailsdays(response.data.days)
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getstation();
    getTraindetails();
  }, []);
  return (
    <div>
      <section className="text-gray-600  bg-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {" "}
              Get Railways Station by Cities
            </h1>

            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  City Name
                </label>
                <input
                  type="text"
                  id="hero-field"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="city"
                  placeholder="Search"
                  className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCity1(city);
                  getstation();
                }}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Search
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Like Mumbai,Delhi,Pune
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src={`https://source.unsplash.com/random/?railway&320x300`}
            />
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <h1 className="  text-center  mx-6 my-6 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {" "}
            Following are the Railways Station in {city1}
          </h1>
          <div className="container px-5  my-6">
            <div className="flex flex-wrap ">
              {citystations.map((i) => {
                return (
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-200 p-6 rounded-lg">
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={`https://source.unsplash.com/random/?${city}&${i[1]}`}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        Active
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        StationCode:{i[0]}
                      </h2>
                      <p className="leading-relaxed text-base">
                        Sation Name:{i[1]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      <section className="text-gray-600 bg-slate-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={`https://source.unsplash.com/random/?railway&${city}&720x700`}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Get Train Information by Name or Number
            </h1>
            <p className="mb-8 leading-relaxed">
              Search Indian Railway trains by either train number or it’s name.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-700"
                >
                  Train Name or Number
                </label>
                <input
                  type="text"
                  id="hero-field"
                  value={trainname}
                  onChange={(e) => {
                    setTrainname(e.target.value);
                  }}
                  name="city"
                  placeholder="Search"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:bg-gray-100 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTrainname1(trainname);
                  getTraindetails();
                }}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Search
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Like Rajdhani.
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font overflow-hidden">
        <h1 className="px-5 py-4 text-center mx-auto title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {" "}
            Following are the Details of {trainname1}
          </h1>
          {traindetails.map((i) => {
            return (
              <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-sm title-font text-gray-100 tracking-widest">
                      {i.train_num}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                      {i.name}
                    </h1>
                    <div className="flex mb-4">
                      <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                        Description
                      </a>
                    
                    </div>
                
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-200">Train_From</span>
                      <span className="ml-auto text-gray-900">{i.train_from}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-200">Train_To</span>
                      <span className="ml-auto text-gray-900">{i.train_to}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-200">Arive Time</span>
                      <span className="ml-auto text-gray-900">{i.data.arriveTime}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-200">Departed Time</span>
                      <span className="ml-auto text-gray-900">{i.data.departTime}</span>
                    </div>
                  
                    
                  </div>
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 w-full lg:h-1/2 h-30 object-cover object-center rounded"
                    src={`https://source.unsplash.com/420x330/?${i.name},railway,train,travel`}
                  />
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
