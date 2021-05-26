import React, { useState, useToggle } from "react";
import "./Coin.css";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import numeral from "numeral";
function Coin({
  image,
  name,
  current_price,
  symbol,
  price_change_percentage_24h,
  market_cap,
  rank,
  price_change_24h,
}) {
  const [singleCoinDetails, setSingleCoinDetails] = useState([]);
  const [coinDescription, setCoinDescription] = useState("");
  const [coinExtraInfoDisplay, setCoinExtraInfoDisplay] = useState(false);
  function getCoinInfo() {
    fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleCoinDetails(data);
        setCoinDescription(data.description);
      });
    console.log("single coin", singleCoinDetails);

    setCoinExtraInfoDisplay(!coinExtraInfoDisplay);

  }

  return (
    <Accordion onClick={getCoinInfo}>
      <AccordionSummary
        className='accordian'
        expandIcon={<ExpandMoreIcon className='coin__expandIcon' />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className='coin__top'>
          <div className='coin__rank-holder'>
            <p className='coin-p'>Rank</p>
            <p className='coin-p'>{rank}</p>
          </div>
          <div className='coin__name-and-image-holder'>
            <img src={image} alt={name} className='coin__image' />
            <div className='coin__name'>
              <p className='coin-p name'>{name}</p>
              <p className='coin-p coin_symbol'>{symbol}</p>
            </div>
          </div>
          <div className='coin__current-price-holder'>
            <p className='coin-p '>Price</p>
            <p className='coin-p'>${current_price.toFixed(2)}</p>
          </div>
          <div className='coin__price-change-holder'>
            <p className='coin-p'>24h chg</p>
            {price_change_percentage_24h < 0 ? (
              <p className='coin-percent__red coin-p'>
                {!price_change_percentage_24h
                  ? "no data"
                  : price_change_percentage_24h.toFixed(3)}
                %{" "}
              </p>
            ) : (
              <p className='coin-percent__green coin-p'>
                +
                {!price_change_percentage_24h
                  ? "no data"
                  : price_change_percentage_24h.toFixed(3)}
                %{" "}
              </p>
            )}
          </div>
          <div className='coin__market-cap-holder'>
            <p className='coin-p'>Mkt cap</p>
            <p className='coin__market-cap coin-p'>
              ${numeral(market_cap).format("0,0e")}
            </p>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className='accordian-details'>
        <Typography>
        <p className="coin__bottom-display-genesis-date coin__bottom-display-p">
        Genesis Date:{" "}
        {!singleCoinDetails.genesis_date ? "no data" : singleCoinDetails.genesis_date }
      </p>
      <p className="coin__bottom-display-website coin__bottom-display-p">
        Website:
        <a
          className="coin__bottom-display-link"
          href={!coinDescription ? "no data" : singleCoinDetails.links.homepage}
        >
          {" "}
          {name}{" "}
        </a>
      </p>
      <p className="coin__bottom-display-explorers coin__bottom-display-p">
        Explorers:{" "}
        {!coinDescription
          ? "no data"
          : singleCoinDetails.links.blockchain_site.map((site) => (
              <a className="display-link" href={site}>
                {" "}
                <LanguageIcon />{" "}
              </a>
            ))}
      </p>
    
      <p className="coin__bottom-display-genesis-date coin__bottom-display-p">
        Official Forum:{" "}
        <a
          className="display-link"
          href={
            !coinDescription
              ? "no data"
              : singleCoinDetails.links.official_forum_url
          }
        >
          {" "}
          forum
        </a>
      </p>
          <p className='coin__bottom-display-source-code coin__bottom-display-p'>
            Source Code:{" "}
            <a
              href={
                !coinDescription
                  ? "no data"
                  : singleCoinDetails.links.repos_url.github[0]
              }
            >
              {!coinDescription
                ? "no data"
                : singleCoinDetails.links.repos_url.github[0]
                    .split(".")[0]
                    .slice(8)}
            </a>
          </p>

          <p className='coin__bottom-display-decription coin__bottom-display-p'>
            {!coinDescription
              ? "no data"
              : Object.values(coinDescription)[0].replace(/<\/?[^>]+>/gi, "")}
          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Coin;
