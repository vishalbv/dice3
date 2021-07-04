import { isTerminatorless } from "@babel/types";
import React, { Component, useState } from "react";
import arrowIco from "../assets/arrow.svg";
import { ReactComponent as Img5 } from "../assets/Coin.svg";
import arrowDown from "../assets/arrow.svg";

import "./subComponent.scss";
export const DetailsComp = ({ item, index }) => {
  const classes = ["a", "b", "c", "d"];
  return (
    <div className={"details-comp " + classes[index]}>
      <div>{item.heading}</div>
      <div>
        <span>{item.value}</span> {item.param}
      </div>
      <div>{item.des}</div>
    </div>
  );
};

export const DetailsCompAll = ({ items, style }) => {
  return (
    <div className="details-comp-all" style={style} data-aos="fade-in">
      {items.map((i, k) => (
        <DetailsComp index={k} key={k} item={i} />
      ))}
    </div>
  );
};

export const GoBack = ({ onClick, historyView }) => {
  return (
    <div className="history">
      <span onClick={onClick}>
        <img
          src={arrowIco}
          style={{ transform: historyView ? "rotate(180deg)" : "" }}
        />
        <span>history</span>
      </span>
    </div>
  );
};

const rowData = {
  address: "0x475d06485090172f8374fb4edf45735f9d394993",
  bet: "1.000ETH",
  betOn: 6,
  betTrx: "0x06bdc2d6740cc63bf8540d13543b888ac99f69809c075sdj",
};

export const Table = ({ headers, data, setOpened }) => {
  return (
    <div className="table-class">
      <div className="header">
        {headers.map((i, k) => (
          <div key={k}>{i.header}</div>
        ))}
      </div>
      <div className="body">
        {data.map((i, k) => (
          <>
            <div
              className="item"
              key={k}
              onClick={() => setOpened(k, { ...i, opened: !i.opened })}
            >
              {headers.map((j, l) => (
                <div key={j}>{i[j.param]}</div>
              ))}
              <img
                src={arrowDown}
                style={{ transform: i.opened ? "rotate(180deg)" : "" }}
              />
            </div>
            {i.opened && (
              <div
                className="details"
                onClick={() => setOpened(k, { ...i, opened: !i.opened })}
              >
                {Object.keys(rowData).map((m, n) => (
                  <div className="block flex">
                    <div>{m}</div>
                    <div>{rowData[m]}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export const BorderBlock = ({ children, className, style }) => {
  return (
    <div
      className={"border-block " + className}
      style={style}
      // data-aos="fade-in"
    >
      {children}
    </div>
  );
};

export const ImgIco = () => {
  return (
    <div>
      <Img5 />
    </div>
  );
};

export const DiceIco = ({ value }) => {
  const Elements = [];
  for (var i = 0; i < value; i++) {
    Elements.push(
      <>
        <svg width={8} height={8}>
          <circle cx="50%" cy="50%" r="4" fill={"white"} />
        </svg>

        {value == 5 && (
          <svg width={8} height={8}>
            <circle cx="50%" cy="50%" r="4" fill={"transparent"} />
          </svg>
        )}
      </>
    );
  }
  return <div className={"dice dice" + value}>{Elements}</div>;
};

export const Button = ({ value, onClick }) => {
  return (
    <div className="value-button" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export const BetBlock = ({ value, onClick }) => {
  const increment = (val) => {
    onClick(+(+value + +val).toFixed(2));
  };
  return (
    <div className="bet-block">
      <div></div>
      <div className="bet-buttons flex-x">
        <div className="bet-input flex-x">
          <div className="flex-x">
            <span onClick={() => increment(-0.01)}>-</span>
            <input
              value={value}
              onChange={(e) => {
                var regexp = /^[0-9]*(\.[0-9]{0,2})?$/;
                if (regexp.test(e.target.value)) onClick(e.target.value);
              }}
            />
            <span onClick={() => increment(0.01)}>+</span>
          </div>
        </div>
        <div className="bet-submit flex-x">BET</div>
      </div>
    </div>
  );
};

export const CoinsBlock = ({ coins, className, setCoins }) => {
  const setSelectedCoins = (index) => {
    let dummy = coins;
    const selected = coins.filter((i, k) => i.selected);

    if (selected.length == 1 && selected[0].index == index) return;
    dummy = dummy.map((i, k) => {
      return index == k ? { ...i, selected: !i.selected } : i;
    });

    if (dummy.filter((i, k) => i.selected).length == coins.length) {
      if (index == 0)
        dummy = dummy.map((i, k) => {
          return k == dummy.length - 1 ? { ...i, selected: false } : i;
        });
      else
        dummy = dummy.map((i, k) => {
          return k == 0 ? { ...i, selected: false } : i;
        });
    }

    setCoins(dummy);
  };

  return (
    <div className={"coins-block " + className}>
      {coins.map((i, k) => (
        <div
          className={i.selected ? "selected" : "disabled"}
          key={k}
          onClick={() => {
            setSelectedCoins(k);
          }}
        >
          {i.element}
        </div>
      ))}
    </div>
  );
};
