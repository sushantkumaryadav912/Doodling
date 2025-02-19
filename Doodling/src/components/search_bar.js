import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="radial-cont">
          <div className="outer">
            <div className="inner-cont">
              <div className="main-block">
                <div className="elements-cont">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                    <path fill="currentColor" d="M20.5 6C12.492 6 6 12.492 6 20.5S12.492 35 20.5 35a14.44 14.44 0 0 0 9.138-3.241l9.801 9.801a1.5 1.5 0 1 0 2.121-2.121l-9.8-9.801A14.44 14.44 0 0 0 35 20.5C35 12.492 28.508 6 20.5 6M9 20.5C9 14.149 14.149 9 20.5 9S32 14.149 32 20.5S26.851 32 20.5 32S9 26.851 9 20.5" />
                  </svg>
                  <input className="input" type="text" name="search" placeholder="Search..." />
                  <div className="filter">
                    <svg className="funnel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" color="#000000" fill="none">
                      <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="pink blob" />
            <div className="blue blob" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background-size: 16px 16px;
    background-image: linear-gradient(to right, #0d0d0c 2px, transparent 1px),
      linear-gradient(to bottom, #0d0d0c 2px, transparent 1px);
    background-color: #000000;
  }
  .radial-cont {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(ellipse, transparent, #000);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input {
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    width: 265px;
    outline: none;
    color: #d6d6d6;
    letter-spacing: 1px;
    z-index: 10;
  }
  .outer {
    position: relative;
  }
  .blob {
    position: absolute;
    width: 130px;
    height: 70px;
    animation: blob 5s ease-in-out infinite alternate;
  }
  @keyframes blob {
    0% {
      width: 130px;
    }
    100% {
      width: 100.2%;
    }
  }
  .pink {
    background-color: #ff98e4;
    left: -1px;
    top: 0px;
    border-radius: 16px;
    transform: rotate(1deg);
    box-shadow: -2px -2px 3px #ff9affc9, -5px -5px 10px #6d0a6dc7,
      -10px -10px 70px #e240e29c;
    filter: blur(1px);
  }
  .blue {
    background-color: #ffbfee;
    right: -1px;
    bottom: -1px;
    border-radius: 16px;
    transform: rotate(0deg);
    box-shadow: 2px 2px 3px #6c19d8a6, 5px 5px 10px #350a6dc7,
      20px 10px 90px 10px #220af7b0;
    filter: blur(3px);
  }

  .inner-cont {
    width: 430px;
    height: 75px;
    background-color: #202121;
    position: relative;
    padding: 2px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .inner-cont::before,
  .inner-cont::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 75px;
    border-radius: 16px;
  }
  .inner-cont::before {
    left: 0;
    background-image: radial-gradient(
      circle 150px at 10% -60%,
      #e240b6,
      transparent
    );
  }
  .inner-cont::after {
    right: 0;
    background-image: radial-gradient(
      circle 150px at 100% 160%,
      #533cde,
      transparent
    );
  }

  .main-block {
    background-color: #000000;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 10px;
    position: relative;
    z-index: 2;
  }
  .elements-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .main-block::before,
  .main-block::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 71px;
    border-radius: 18px;
  }
  .main-block::before {
    left: 0px;
    background-image: radial-gradient(
      circle 150px at 0 -10%,
      #f701f33d,
      transparent
    );
  }
  .main-block::after {
    right: 0px;
    background-image: radial-gradient(
      circle 150px at 100% 150%,
      #1100ac7e,
      transparent
    );
  }

  .svg {
    color: #fff;
    font-size: 2.3rem;
  }
  .funnel {
    font-size: 2.3rem;
    color: #fff;
    width: 55px;
    height: 55px;
    padding: 8px;
    border-radius: 10px;
    margin-top: 7px;
    border: solid 2px #494949;
    position: relative;
    background: radial-gradient(circle 50px at 50% -60%, #6b698f, transparent);
  }`;

export default Input;
