import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WeatherCard = () => {

  const location = useSelector(state => state.weather.location)
  const current = useSelector(state => state.weather.current)
  const forecastday = useSelector(state => state.weather.forecast.forecastday)

  return (
    <div className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div
              className="card"
              style={{ color: "#4B515D", borderRadius: 35 }}
            >
              <div className="card-body p-4">
                <div className="d-flex">
                  <h6 className="flex-grow-1">
                    {location && location.country}
                  </h6>
                  <h6>{location && location.localtime}</h6>
                </div>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}
                    {current && current.temp_c}°C{" "}
                  </h6>
                  <span className="small" style={{ color: "#868B94" }}>
                    {current && current.condition.text}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <i
                        className="fas fa-wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1">
                        {" "}
                        {current && current.vis_km} km/h
                      </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1">
                        {" "}
                        {current && current.wind_dir}{" "}
                      </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1">
                        {" "}
                        {current && current.humidity}%{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={current && current.condition.icon}
                      width="100px"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                {forecastday.map((d,i) => (
                  <Link key={i} to={`/${d.date}`}>
                    <div className="flex-column">
                      <p className="small">
                        <strong>{d.day.avgtemp_c}°C</strong>
                      </p>
                      <img
                        className="fas fa-sun fa-2x mb-3"
                        src={d.day.condition.icon}
                        style={{ width: 50 }}
                        alt=''
                      />
                      <p className="mb-0">
                        <strong>{d.date}</strong>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
