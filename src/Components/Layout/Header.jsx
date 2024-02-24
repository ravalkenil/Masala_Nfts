import React, { useRef, useState, useEffect } from "react";
import "./Css/Header.css";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
// import { ethers } from "ethers";
// import { Web3Button } from '@web3modal/react'

// import { useNFtmarketplaceContext } from "../Contract_functions/index"

const LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Details",
    url: "/details",
  },
  {
    display: "Market Nfts",
    url: "/market",
  },
];

const Header = ({  }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

//   const [address, setaddress] = useState();
//   const connectWallet = async () => {
//     const connectedAddress = await checkEthereumProvider();
//     setaddress(connectedAddress);
//   };
//   const fetchaddress = async () => {
//     try {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const address = await signer.getAddress();
//       setaddress(address);
//     } catch (error) {
//       alert("Please connected Wallet");
//     }
//   }
//   useEffect(() => {
    
//     fetchaddress()
//   }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");
    const address = "dsdse";
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2  align-items-right">
              <span></span>
              NFT
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
          <div>
            <div className="btn d-flex gap-2 align-items-center">
              <span>
                <i className="ri-wallet-line"></i>
              </span>
              
                {address === undefined ? (
                  <button
                    // onClick={connectWallet}
                    className="d-flex align-items-center gap-1 btn btn-primary"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button className="d-flex align-items-center gap-1 btn btn-primary">
                    {address && address.slice(0, 6)}...
                    {address && address.slice(-4)}
                  </button>
                )}
            
            </div>
            </div>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
