import React, { Component, useEffect, useState } from "react";
import "./all.scss";
import {
  DetailsCompAll,
  BorderBlock,
  ImgIco,
  CoinsBlock,
  Button,
  BetBlock,
  GoBack,
  Table,
  coinsArrFlip as coinsArr,
} from "../components/subComponent";
import coinIco from "../assets/coins.svg";
import balanceIco from "../assets/wallet.svg";
import coinsideA from "../assets/Clover.svg";

const headers = [
  { header: "player", param: "player" },
  { header: "bet", param: "bet" },
  { header: "result", param: "result" },
  { header: "jackpot", param: "jackpot" },
];

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
  tableDetails: [
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
      resultArr: [1],
      betArr: [1],
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
      resultArr: [2],
      betArr: [2],
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
      resultArr: [1],
      betArr: [2],
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
      resultArr: [1],
      betArr: [2],
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x4fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
    {
      player: "0x3fder",
      bet: "1.00",
      result: "33",
      jackpot: "778",
    },
  ],
};

const buttonList = ["0.1", "0.25", "0.5", "max"];

const CoinFlip = () => {
  const [flipDetails, setFlipDetails] = useState(data.flipDetails);
  const [coins, setCoins] = useState(coinsArr);
  const [id, setId] = useState("0x3fder");
  const [onlyMeSelected, setOnlyMeSelected] = useState(false);
  const [selectedVal, setSelectedVal] = useState(0);
  const [historyView, setHistoryView] = useState(true);
  const [tableData, setTableData] = useState(data.tableDetails);

  const setSelectedValCheck = (val) => {
    console.log(val);
    if (+val >= 0) {
      console.log("sd");
    }
    setSelectedVal(val);
  };

  const setOpened = (k, i) => {
    let dummy = tableData;
    dummy[k] = i;
    console.log(dummy);
    setTableData([...dummy]);
  };

  useEffect(() => {
    if (onlyMeSelected) {
      setTableData([...data.tableDetails.filter((i, k) => i.player == id)]);
    } else setTableData([...data.tableDetails]);
  }, [onlyMeSelected]);

  return (
    <div className="wrapper">
      <GoBack
        onClick={() => setHistoryView(!historyView)}
        historyView={historyView}
      />
      <div className="coin-flip flex">
        <BorderBlock
          className="a"
          style={{
            marginLeft: historyView ? "0" : "20%",
          }}
        >
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
            <CoinsBlock coins={coins} setCoins={setCoins} />

            <div className="description-text1">Choose coin side to bet on</div>

            <div className="button-list flex-x">
              {buttonList.map((i, k) => (
                <Button
                  key={k}
                  value={i}
                  onClick={(val) => setSelectedValCheck(+val)}
                ></Button>
              ))}
            </div>
            <div
              className="description-text"
              style={{
                textAlign: "left",
                margin: "0 10px",
                position: "relative",
                bottom: "-10px",
              }}
            >
              Your bet
            </div>
            <BetBlock
              value={selectedVal}
              onClick={(val) => setSelectedValCheck(val)}
            />
          </div>
        </BorderBlock>
        <DetailsCompAll
          items={data.coinDeatils}
          style={{
            // marginLeft: historyView ? "0" : "8%",
            margin: historyView ? "auto" : "auto 8%",
          }}
        />
        {historyView && (
          <BorderBlock className="b">
            <div className="header flex-x-between">
              <div>Game History</div>
              <div
                onClick={() => setOnlyMeSelected(!onlyMeSelected)}
                className={onlyMeSelected ? "only-me active" : "only-me"}
              >
                Only me
              </div>
            </div>
            <div className="body">
              <Table
                headers={headers}
                data={tableData}
                setOpened={setOpened}
                page="CoinFlip"
              />
            </div>
          </BorderBlock>
        )}
      </div>
    </div>
  );
};

export default CoinFlip;
