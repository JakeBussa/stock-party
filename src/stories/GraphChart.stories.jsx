import React from "react";
import "../App.css";
import StockGraph from "../components/stockgraph/StockGraph.jsx";
import stockData from "../data/processed/StockData.json";
import { getStockSymbols, getStartDate, getEndDate } from "../util/StockUtil";

export default {
  title: "Components/Stock Graph",
  component: StockGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stockData: {
      control: "null"
    },
    stockSymbols: {
      control: "null"
    },
    selectedStockSymbol: {
      control: "select",
      options: [
        "AAPL",
        "AMZN",
        "DIS",
        "FXAIX",
        "GOOG",
        "JNJ",
        "JPM",
        "MSFT",
        "NVDA",
        "XOM"
      ]
    },
    stockAmount: {
      control: "null"
    },
    startDate: {
      control: "date"
    },
    endDate: {
      control: "date"
    }
  }
};

const Template = args => <StockGraph data={args} />

export const StockGraphStory = Template.bind({});

const stockSymbols = getStockSymbols(stockData);
const startDate = getStartDate(stockData, stockSymbols[0]);
const endDate = getEndDate(stockData, stockSymbols[0]);

StockGraphStory.args = {
  stockData,
  stockSymbols,
  selectedStockSymbol: stockSymbols[0],
  stockAmount: 0,
  startDate,
  endDate
};
