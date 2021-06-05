(this["webpackJsonpcrypto-view"]=this["webpackJsonpcrypto-view"]||[]).push([[0],{60:function(e,a,c){},61:function(e,a,c){},65:function(e,a,c){},66:function(e,a,c){},71:function(e,a,c){},72:function(e,a,c){},73:function(e,a,c){},74:function(e,a,c){},75:function(e,a,c){},76:function(e,a,c){},77:function(e,a,c){"use strict";c.r(a);var t=c(0),n=c.n(t),s=c(10),i=c.n(s),r=(c(60),c(61),c(1));var o=function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{children:"Crypto View"})})},l=c(9),d=(c(36),c(11)),h=c.n(d);c(65);var p=function(){var e=Object(t.useState)([]),a=Object(l.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)(null),i=Object(l.a)(s,2);return i[0],i[1],Object(t.useEffect)((function(){fetch(" https://api.coingecko.com/api/v3/global").then((function(e){return e.json()})).then((function(e){console.log(e),n(e.data)})),console.log("global data",c)}),[]),Object(r.jsxs)("div",{className:"globalData",children:[Object(r.jsx)("div",{className:"globalData__display",children:Object(r.jsxs)("p",{children:[" Active Coins: ",c.active_cryptocurrencies]})}),Object(r.jsx)("div",{className:"globalData__display",children:Object(r.jsxs)("p",{children:["Total Market Cap: $",c.total_market_cap?"".concat(h()(Object.values(c.total_market_cap).reduce((function(e,a){return e+a}),0).toLocaleString()).format("0,0 a").toUpperCase()):"loading"]})}),Object(r.jsxs)("div",{className:"globalData__display",children:["Market Cap Change (24h):",!c.market_cap_change_percentage_24h_usd<0?Object(r.jsxs)("p",{className:"globalData__change-red-globalData",children:["+",c.market_cap_change_percentage_24h_usd?c.market_cap_change_percentage_24h_usd.toFixed(3):"loading","%"]}):Object(r.jsxs)("p",{className:"globalData__change-red-globalData",children:[c.market_cap_change_percentage_24h_usd?c.market_cap_change_percentage_24h_usd.toFixed(3):"loading","%"]})]}),Object(r.jsx)("div",{className:"globalData__display",children:Object(r.jsxs)("p",{children:["Total Volume:",c.total_volume?" $".concat(h()(Object.values(c.total_volume).reduce((function(e,a){return e+a}),0).toLocaleString()).format("0,0 a").toUpperCase()):"loading"]})})]})},j=c(94),m=c(98),b=c(99),u=c(97),_=c(96),g=c(15),x=c.n(g),O=(c(66),Object(j.a)((function(e){return{root:{width:"100%"},heading:{fontWeight:e.typography.fontWeightRegular}}})));function y(){O();return Object(r.jsxs)("div",{className:"information",children:[Object(r.jsx)("p",{className:"trendingCoins_header",children:"Frequently Asked Questions About Cryptocurrency"}),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"expand-more"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)(_.a,{className:"typography",children:Object(r.jsx)("h5",{className:"accordian-header",children:"What Is Cryptocurrency?"})})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsx)(_.a,{children:"Cryptocurrency is decentralized digital money, based on blockchain technology. You may be familiar with the most popular versions, Bitcoin and Ethereum, but there are more than 5,000 different cryptocurrencies in circulation, according to CoinLore. You can use crypto to buy regular goods and services, although many people invest in cryptocurrencies as they would in other assets, like stocks or precious metals. While cryptocurrency is a novel and exciting asset class, purchasing it can be risky as you must take on a fair amount of research to fully understand how each system works."})})]}),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"expand-more"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)(_.a,{children:Object(r.jsx)("h5",{className:"accordian-header",children:"How Does Cryptocurrency Work?"})})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsx)(_.a,{children:"A cryptocurrency is a medium of exchange that is digital, encrypted and decentralized. Unlike the U.S. Dollar or the Euro, there is no central authority that manages and maintains the value of a cryptocurrency. Instead, these tasks are broadly distributed among a cryptocurrency\u2019s users via the internet. Bitcoin was the first cryptocurrency, first outlined in principle by Satoshi Nakamoto in a 2008 paper titled \u201cBitcoin: A Peer-to-Peer Electronic Cash System.\u201d Nakamoto described the project as \u201can electronic payment system based on cryptographic proof instead of trust.\u201d That cryptographic proof comes in the form of transactions that are verified and recorded in a form of program called a blockchain."})})]}),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"expand-more"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)(_.a,{children:Object(r.jsx)("h5",{className:"accordian-header",children:"What Is a Blockchain?"})})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsx)(_.a,{children:"A blockchain is an open, distributed ledger that records transactions in code. In practice, it\u2019s a little like a checkbook that\u2019s distributed across countless computers around the world. Transactions are recorded in \u201cblocks\u201d that are then linked together on a \u201cchain\u201d of previous cryptocurrency transactions. \u201cImagine a book where you write down everything you spend money on each day,\u201d says Buchi Okoro, CEO and co-founder of African cryptocurrency exchange Quidax. \u201cEach page is similar to a block, and the entire book, a group of pages, is a blockchain.\u201d With a blockchain, everyone who uses a cryptocurrency has their own copy of this book to create a unified transaction record. Software logs each new transaction as it happens, and every copy of the blockchain is updated simultaneously with the new information, keeping all records identical and accurate."})})]}),Object(r.jsxs)(m.a,{className:"main-accordian",children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"expand-more"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)(_.a,{children:Object(r.jsx)("h5",{className:"accordian-header",children:"Why Are Cryptocurrencies So Popular?"})})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsx)(_.a,{children:"Cryptocurrencies are becoming more popular today as a way to buy and sell goods and/or services on the internet. With the world becoming more interconnected every day, it\u2019s commonplace for people in one country to do business with people in another. The old way of doing international business or purchasing goods/services internationally was to use third-party sites to conduct the transactions. That\u2019s because many financial institutions would block transactions that were occurring overseas. Today, though, with the advent and popularity of cryptocurrencies, this process has become much easier. Now, it\u2019s very easy for people to buy and sell goods to or from international customers, and to fund their accounts at a crypto casino website, for example."})})]}),Object(r.jsxs)(m.a,{className:"main-accordian",children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"expand-more"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)(_.a,{children:Object(r.jsx)("h5",{className:"accordian-header",children:"Are Cryptocurrencies Legal?"})})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsx)(_.a,{children:"There\u2019s no question that they\u2019re legal in the United States, though China has essentially banned their use, and ultimately whether they\u2019re legal depends on each individual country. Also be sure to consider how to protect yourself from fraudsters who see cryptocurrencies as an opportunity to bilk investors. As always, buyer beware."})})]})]})}c(71);var f=c(46),N=c.n(f);var k=function(e){var a=e.image,c=e.name,n=e.current_price,s=e.symbol,i=e.price_change_percentage_24h,o=e.market_cap,d=e.rank,p=(e.price_change_24h,Object(t.useState)([])),j=Object(l.a)(p,2),g=j[0],O=j[1],y=Object(t.useState)(""),f=Object(l.a)(y,2),k=f[0],v=f[1],w=Object(t.useState)(!1),C=Object(l.a)(w,2),S=C[0],I=C[1];return Object(r.jsxs)(m.a,{onClick:function(){fetch("https://api.coingecko.com/api/v3/coins/".concat(c)).then((function(e){return e.json()})).then((function(e){console.log(e),O(e),v(e.description)})),console.log("single coin",g),I(!S)},children:[Object(r.jsx)(b.a,{className:"accordian",expandIcon:Object(r.jsx)(x.a,{className:"coin__expandIcon"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsxs)(_.a,{className:"coin__top",children:[Object(r.jsxs)("div",{className:"coin__rank-holder",children:[Object(r.jsx)("p",{className:"coin-p",children:"Rank"}),Object(r.jsx)("p",{className:"coin-p",children:d})]}),Object(r.jsxs)("div",{className:"coin__name-and-image-holder",children:[Object(r.jsx)("img",{src:a,alt:c,className:"coin__image"}),Object(r.jsxs)("div",{className:"coin__name",children:[Object(r.jsx)("p",{className:"coin-p name",children:c}),Object(r.jsx)("p",{className:"coin-p coin_symbol",children:s})]})]}),Object(r.jsxs)("div",{className:"coin__current-price-holder",children:[Object(r.jsx)("p",{className:"coin-p ",children:"Price"}),Object(r.jsxs)("p",{className:"coin-p",children:["$",n.toFixed(2)]})]}),Object(r.jsxs)("div",{className:"coin__price-change-holder",children:[Object(r.jsx)("p",{className:"coin-p",children:"24h chg"}),i<0?Object(r.jsxs)("p",{className:"coin-percent__red coin-p",children:[i?i.toFixed(3):"no data","%"," "]}):Object(r.jsxs)("p",{className:"coin-percent__green coin-p",children:["+",i?i.toFixed(3):"no data","%"," "]})]}),Object(r.jsxs)("div",{className:"coin__market-cap-holder",children:[Object(r.jsx)("p",{className:"coin-p",children:"Mkt cap"}),Object(r.jsxs)("p",{className:"coin__market-cap coin-p",children:["$",h()(o).format("0,0e")]})]})]})}),Object(r.jsx)(u.a,{className:"accordian-details",children:Object(r.jsxs)(_.a,{children:[Object(r.jsxs)("p",{className:"coin__bottom-display-genesis-date coin__bottom-display-p",children:["Genesis Date:"," ",g.genesis_date?g.genesis_date:"no data"]}),Object(r.jsxs)("p",{className:"coin__bottom-display-website coin__bottom-display-p",children:["Website:",Object(r.jsxs)("a",{className:"coin__bottom-display-link",href:k?g.links.homepage:"no data",children:[" ",c," "]})]}),Object(r.jsxs)("p",{className:"coin__bottom-display-explorers coin__bottom-display-p",children:["Explorers:"," ",k?g.links.blockchain_site.map((function(e){return Object(r.jsxs)("a",{className:"display-link",href:e,children:[" ",Object(r.jsx)(N.a,{})," "]})})):"no data"]}),Object(r.jsxs)("p",{className:"coin__bottom-display-genesis-date coin__bottom-display-p",children:["Official Forum:"," ",Object(r.jsxs)("a",{className:"display-link",href:k?g.links.official_forum_url:"no data",children:[" ","forum"]})]}),Object(r.jsxs)("p",{className:"coin__bottom-display-source-code coin__bottom-display-p",children:["Source Code:"," ",Object(r.jsx)("a",{href:k?g.links.repos_url.github[0]:"no data",children:k?g.links.repos_url.github[0].split(".")[0].slice(8):"no data"})]}),Object(r.jsx)("p",{className:"coin__bottom-display-decription coin__bottom-display-p",children:k?Object.values(k)[0].replace(/<\/?[^>]+>/gi,""):"no data"})]})})]})};c(72);c(73);var v=function(){var e=Object(t.useState)([]),a=Object(l.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)(""),i=Object(l.a)(s,2),o=i[0],d=i[1],h=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(t.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})),console.log("allcoins",c)}),[]),Object(r.jsxs)("div",{className:"allCoins",children:[Object(r.jsx)("p",{className:"allCoins_header",children:"Coin Rank By Market Cap"}),Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",placeholder:"Search for a coin",className:"coin__search",onChange:function(e){d(e.target.value)}})}),Object(r.jsx)("div",{className:"allCoins__display",children:h.map((function(e){return Object(r.jsx)(k,{name:e.id,image:e.image,symbol:e.symbol,current_price:e.current_price,price_change_percentage_24h:e.price_change_percentage_24h,price_change_24h:e.price_change_24h,market_cap:e.market_cap,rank:e.market_cap_rank},e.id)}))})]})};c(74);var w=function(e){var a=e.image,c=e.symbol,t=e.name,n=e.current_price,s=(e.price_change_percentage_24h,e.last_updated,e.market_cap_rank);return e.total_supply,e.price_change_24h,Object(r.jsxs)("div",{className:"trendingCoin",children:[Object(r.jsx)("img",{src:a,alt:t,className:"trendingCoin__image"}),Object(r.jsxs)("div",{className:"trendingCoin__display-name",children:[Object(r.jsx)("p",{children:t}),Object(r.jsx)("p",{className:"trendingCoin__symbol",children:c})]}),Object(r.jsxs)("p",{className:"trendingCoin__current-price",children:["Price: BTC ",n.toFixed(10)]}),Object(r.jsxs)("p",{className:"trendingCoin__market_cap_rank",children:["# ",s]})]})};c(75);var C=function(e){e.image,e.symbol,e.name,e.current_price,e.price_change_percentage_24h,e.last_updated,e.market_cap,e.total_supply,e.price_change_24h;var a=Object(t.useState)([]),c=Object(l.a)(a,2),n=c[0],s=c[1];return Object(t.useEffect)((function(){fetch(" https://api.coingecko.com/api/v3/search/trending").then((function(e){return e.json()})).then((function(e){console.log("fff",e),s(e.coins)})),console.log("trending",n)}),[]),Object(r.jsxs)("div",{className:"trendingCoins",children:[Object(r.jsx)("p",{className:"trendingCoins_header",children:"Top 5 Trending Coins"}),Object(r.jsx)("div",{className:"trendingCoins__display",children:n.slice(0,5).map((function(e){return Object(r.jsx)(w,{image:e.item.large,symbol:e.item.symbol,name:e.item.name,current_price:e.item.price_btc,market_cap_rank:e.item.market_cap_rank,price_change_percentage_24h:"k",last_updated:"k",total_supply:"k",price_change_24h:"k"})}))})]})};c(76);var S=function(){return Object(r.jsx)("section",{className:"footer",children:Object(r.jsxs)("div",{className:"footer-wrapper",children:[Object(r.jsx)("div",{className:"footer_one",children:Object(r.jsx)("p",{children:"This site is for information purposes only and not to be used as financial advise/guide."})}),Object(r.jsxs)("div",{className:"footer_two",children:[Object(r.jsxs)("p",{children:["Coin gecko API: ",Object(r.jsx)("a",{href:"https://www.coingecko.com/en/api ",children:"API "})]}),Object(r.jsxs)("p",{children:["Information sources:",Object(r.jsx)("a",{className:"info__link",href:"https://www.forbes.com/advisor/investing/what-is-cryptocurrency/",children:"source 1"})]}),Object(r.jsxs)("p",{children:["Information sources:",Object(r.jsx)("a",{className:"info__link",href:"https://www.forbes.com/advisor/investing/what-is-cryptocurrency/",children:"source 2"})]})]})]})})};var I=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(o,{}),Object(r.jsx)(p,{}),Object(r.jsx)(y,{}),Object(r.jsx)("div",{className:"app_top"}),Object(r.jsxs)("div",{className:"app_bottom",children:[Object(r.jsx)("div",{className:"app_bottom--left",children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{className:"app_bottom--right",children:Object(r.jsx)(C,{})})]}),Object(r.jsx)(S,{})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(a){var c=a.getCLS,t=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;c(e),t(e),n(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),T()}},[[77,1,2]]]);
//# sourceMappingURL=main.a93dfef4.chunk.js.map