import React, { Component, useState } from "react";
import "./all.scss";
import { DetailsCompAll, BorderBlock } from "../components/subComponent";
import coinIco from "../assets/coins.svg";
import balanceIco from "../assets/coins.svg";
import coinsideA from "../assets/5.svg";
import coinsideB from "../assets/Clover.svg";

const data = {
  flipDetails: { coinside: 1, value: "", betValue: "" },
  coinDeatils: [
    {
      heading: "Winning chance",
      value: "50.00",
      des: "You will win 0.196 ETH",
      param: "%",
    },
    {
      heading: "Winning bet pays",
      value: "1.96",
      des: "1% fee, 0.001 ETH to jackpot",
      param: "x",
    },
    {
      heading: "Jackpot contains",
      value: "0.597",
      des: "Lucky number is 888!",
      param: "ETH",
    },
  ],
};

const buttonList = [];

const CoinFlip = () => {
  const [flipDetails, setFlipDetails] = useState(data.flipDetails);
  return (
    <div className="coin-flip flex-x">
      <BorderBlock className="a">
        <div className="header flex-x-between">
          <div>
            <img src={coinIco} />
            <span>COIN FLIP</span>
          </div>
          <div>
            <img src={balanceIco} />
            <span>
              100 <span style={{ fontSize: "80%", opacity: "1" }}>ETH</span>
            </span>
          </div>
        </div>
        <div className="body">
          <div className="coin-sides">
            <img src={coinsideA} />
            <img src={coinsideB} />
            <div>Choose coin side to bet on</div>
          </div>
          {/* <div>
            {buttonList.map((i, k) => (
              <Button key={k}></Button>
            ))}
          </div> */}
        </div>
      </BorderBlock>
      <DetailsCompAll items={data.coinDeatils} />
    </div>
  );
};

export default CoinFlip;
