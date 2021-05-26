import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className='footer'>
      <div className='footer-wrapper'>
        <div className='footer_one'>
          <p>
            This site is for information purposes only and not to be used as financial
            advise/guide.
          </p>
        </div>
        <div className='footer_two'>
          <p>
            Coin gecko API: <a href='https://www.coingecko.com/en/api '>API </a>
          </p>
          <p>
            Information sources:
            <a className='info__link' href='https://www.forbes.com/advisor/investing/what-is-cryptocurrency/'>
              source 1
            </a>
          </p>
          <p>
            Information sources: 
            <a className='info__link' href='https://www.forbes.com/advisor/investing/what-is-cryptocurrency/'>
              source 2
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
