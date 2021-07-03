import { isTerminatorless } from "@babel/types";
import React, { Component } from "react";
import arrowIco from "../assets/arrow.svg";

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

export const DetailsCompAll = ({ items }) => {
  return (
    <div className="details-comp-all">
      {items.map((i, k) => (
        <DetailsComp index={k} key={k} item={i} />
      ))}
    </div>
  );
};

export const goBack = () => {
  return (
    <div className="history">
      <img src={arrowIco} /> <span>history</span>
    </div>
  );
};

export const Table = ({ headers, data }) => {
  return (
    <div className="table">
      <div className="header">
        {headers.map((i, k) => (
          <div key={k}>{i.header}</div>
        ))}
      </div>
      <div className="body">
        {data.map((i, k) => (
          <div key={k}>
            {headers.map((j, l) => (
              <div key={j}>{i[j.param]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const BorderBlock = ({ children, className }) => {
  return <div className={"border-block " + className}>{children}</div>;
};
