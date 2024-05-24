import React, { useState } from 'react';
import TodayDealComponent from "./TodayDealComponent";
import CardComponent from "./CardComponent";
import {  useNavigate } from 'react-router-dom';
import FooterComponent from "./FooterComponent";
 

const HomePageComponent = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      {/* nav bar start */}
      <div className="navBar bg-dark navBarInput py-3 px-2 ">
        <div class="d-flex bd-highlight  ">
          <div class="p-2 bd-highlight">
            <a className="">
              <img
                alt="menu"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="
                height="20px"
                width="20px"
              />
            </a>
          </div>
          <div class="p-2 bd-highlight">
            <a className="" style={{ width: "85px" }}>
              <img
                src="img/logo main.png"
                className=""
                style={{ width: "85px" }}
              />
            </a>
          </div>
         
          <div class="ms-auto p-2 bd-highlight d-flex">
            
            <a className="">
              <span>
                <img
                  className=""
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMiAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTQuMTIgNTMuNjE3Yy4wMjkgMS4wMS4xMDEgMi4zODIuMTUgMi42OC4wMjUuMTUyLjE1Ni4yNjMuMzEuMjYzbC42NzIuMDIxYy4xNTQgMCAuMTc1LS4xMTEuMTk5LS4yNjQuMDQ5LS4zMDQuMTIyLTEuNjkyLjE1MS0yLjY5NyAxLS4wMjkgMi4zOTItLjEwMiAyLjY5Ny0uMTUxLjE1My0uMDI0LjI2NC0uMDQ1LjI2NC0uMTk5bC0uMDIxLS42NzJjMC0uMTU0LS4xMTEtLjI4NS0uMjYzLS4zMS0uMjk4LS4wNDktMS42NjktLjEyMS0yLjY4LS4xNS0uMDMxLS45ODYtLjEwMi0yLjMxMi0uMTQ5LTIuNjE1LS4wMjQtLjE1My0uMDQ0LS4yNjYtLjItLjI2NmwtLjY2OS0uMDIxYy0uMTU1IDAtLjI4Ni4xMTItLjMxLjI2NC0uMDQ4LjI5OS0uMTE5IDEuNjQxLS4xNDkgMi42NC0uOTk4LjAzLTIuMzQuMTAyLTIuNjQuMTQ5LS4xNTMuMDI0LS4yNjQuMTU2LS4yNjQuMzFsLjAyMS42NjljMCAuMTU1LjExMy4xNzYuMjY2LjIuMzAzLjA0NyAxLjYyOS4xMTggMi42MTUuMTQ5bTUuNzY1IDYuMzgzaC05LjYyMWMtLjQxMyAwLS43NjUtLjI2Ny0uODMxLS42MzMtLjE2Ni0uOTEzLS40MzUtNC43MDEtLjQzNS02Ljg2NyAwLTIuMTA0LjI3My01LjkzMi40MzgtNi44NjQuMDY1LS4zNjcuNDE4LS42MzYuODMyLS42MzZoOS42MTNjLjQxNiAwIC40NzEuMjcxLjUzNS42NC4xNjUuOTU2LjQ0MiA0LjgzNS40NDIgNi44NiAwIDIuMTEzLS4yNzIgNS45MzUtLjQzOCA2Ljg2NS0uMDY1LjM2Ny0uMTIuNjM1LS41MzQuNjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LTQ1KSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4="
                />
              </span>
            </a>
            <a href="/" class=" ps-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                xmlns="external452e.html"
              >
                <g fill="#fff" fill-rule="evenodd">
                  <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path>
                  <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path>
                  <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path>
                  <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path>
                  <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path>
                </g>
              </svg>
            </a>

            <div className="ms-2">
      <span
        className={`text-white ${isDisabled ? 'unClickable' : ''}`}
        onClick={() => !isDisabled && navigate('/admin-login')}
      >
        Login
      </span>
    </div>
          </div>
        </div>

        <div className="px-5 inputfocus">
          <input
            className="form-control border-0 w-100 mt-1"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      {/* navbar end */}
      {/* image section start */}

      <div className="">
        <div>
          <img
            src="/img/amazon-main-hedding.jpeg"
            width="100%"
            alt="container-fluid"
          />
        </div>
        <div>
          <img src="/img/IMG_02.jpg" width="100%" alt="container-fluid" />
        </div>
        <div>
          <img src="/img/IMG_3.png" width="100%" alt="container-fluid" />
        </div>
      </div>

      {/* image section end */}

      {/* today deal start */}
      <div>
        <TodayDealComponent />
      </div>
      {/* today deal end */}

      {/* card details start */}
      <CardComponent />

      {/* card details end */}
      {/* <button
        className="btn btn-primary mt-5"
        
      >
        Admin Pannel 
      </button> */}
      

            <div>
              <FooterComponent/>
            </div>
    </>
  );
};

export default HomePageComponent;
