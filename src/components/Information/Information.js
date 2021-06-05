import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Information.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className='information'>
      <p className='trendingCoins_header'>
        Frequently Asked Questions About Cryptocurrency
      </p>

      <Accordion>
        <AccordionSummary
          className='accordian'
          expandIcon={<ExpandMoreIcon className='expand-more' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className='typography'>
            <h5 className='accordian-header'>What Is Cryptocurrency?</h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-details'>
          <Typography>
            Cryptocurrency is decentralized digital money, based on blockchain
            technology. You may be familiar with the most popular versions,
            Bitcoin and Ethereum, but there are more than 5,000 different
            cryptocurrencies in circulation, according to CoinLore. You can use
            crypto to buy regular goods and services, although many people
            invest in cryptocurrencies as they would in other assets, like
            stocks or precious metals. While cryptocurrency is a novel and
            exciting asset class, purchasing it can be risky as you must take on
            a fair amount of research to fully understand how each system works.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className='accordian'
          expandIcon={<ExpandMoreIcon className='expand-more' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            <h5 className='accordian-header'>How Does Cryptocurrency Work?</h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-details'>
          <Typography>
            A cryptocurrency is a medium of exchange that is digital, encrypted
            and decentralized. Unlike the U.S. Dollar or the Euro, there is no
            central authority that manages and maintains the value of a
            cryptocurrency. Instead, these tasks are broadly distributed among a
            cryptocurrency’s users via the internet. Bitcoin was the first
            cryptocurrency, first outlined in principle by Satoshi Nakamoto in a
            2008 paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System.”
            Nakamoto described the project as “an electronic payment system
            based on cryptographic proof instead of trust.” That cryptographic
            proof comes in the form of transactions that are verified and
            recorded in a form of program called a blockchain.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className='accordian'
          expandIcon={<ExpandMoreIcon className='expand-more' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            <h5 className='accordian-header'>What Is a Blockchain?</h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-details'>
          <Typography>
            A blockchain is an open, distributed ledger that records
            transactions in code. In practice, it’s a little like a checkbook
            that’s distributed across countless computers around the world.
            Transactions are recorded in “blocks” that are then linked together
            on a “chain” of previous cryptocurrency transactions. “Imagine a
            book where you write down everything you spend money on each day,”
            says Buchi Okoro, CEO and co-founder of African cryptocurrency
            exchange Quidax. “Each page is similar to a block, and the entire
            book, a group of pages, is a blockchain.” With a blockchain,
            everyone who uses a cryptocurrency has their own copy of this book
            to create a unified transaction record. Software logs each new
            transaction as it happens, and every copy of the blockchain is
            updated simultaneously with the new information, keeping all records
            identical and accurate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='main-accordian'>
        <AccordionSummary
          className='accordian'
          expandIcon={<ExpandMoreIcon className='expand-more' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            <h5 className='accordian-header'>
              Why Are Cryptocurrencies So Popular?
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-details'>
          <Typography>
            Cryptocurrencies are becoming more popular today as a way to buy and
            sell goods and/or services on the internet. With the world becoming
            more interconnected every day, it’s commonplace for people in one
            country to do business with people in another. The old way of doing
            international business or purchasing goods/services internationally
            was to use third-party sites to conduct the transactions. That’s
            because many financial institutions would block transactions that
            were occurring overseas. Today, though, with the advent and
            popularity of cryptocurrencies, this process has become much easier.
            Now, it’s very easy for people to buy and sell goods to or from
            international customers, and to fund their accounts at a crypto
            casino website, for example.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='main-accordian'>
        <AccordionSummary
          className='accordian'
          expandIcon={<ExpandMoreIcon className='expand-more' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            <h5 className='accordian-header'>Are Cryptocurrencies Legal?</h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-details'>
          <Typography>
            There’s no question that they’re legal in the United States, though
            China has essentially banned their use, and ultimately whether
            they’re legal depends on each individual country. Also be sure to
            consider how to protect yourself from fraudsters who see
            cryptocurrencies as an opportunity to bilk investors. As always,
            buyer beware.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
