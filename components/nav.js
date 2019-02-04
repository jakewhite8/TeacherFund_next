import React from 'react'
import Link from 'next/link'
import X from './icons/x'

const links = [
  { href: '/', label: 'Home' },
  { href: '/whyteachers', label: 'Why Teachers?' },
  { href: '/ourwork', label: 'Our Work' },
  { href: '/about', label: 'About us' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const buttons = [
  { href: '/donate', label: 'Donate' },
].map(butt => {
  butt.key = `nav-link-${butt.href}-${butt.label}`
  return butt
})

const Nav = () => (
  <div className="nav">
    <div className="navBarSection">  
      <div className="navItems">
        {links.map(({ key, href, label }) => (
          <div key={key}>
            <Link href={href}>
              <a>{label.toUpperCase()}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="navButtons">
        {buttons.map(({ key, href, label }) => (
          <div key={key}>
            <Link href={href}>
              <a>{label.toUpperCase()}</a>
            </Link>
          </div>
        ))}
      </div>
      <img src="/static/images/Logo.png" className="imageLogo"/> 
      <div className="drawer">
        <div className="drawer-IconsNav">
          <bag className="icon bag" width="22" height="27" />
          <div className="quantity-in-bag"></div>
          <X className="icon x" width="34" height="32"/>
        </div>
        <div className="navigation">
          <ul>
            <li><a onClick="go('shop')">SHOP</a></li>
            <li><a onClick="go('about')">ABOUT</a></li>
          </ul>
        </div><br/>
        <div className="drawer-footer">
          <hr/>
          <div className="checkout-button-drawer" onClick="checkout">
            <p className="checkout-button-drawer__text"><b>CHECKOUT</b></p>
          </div>
        </div>
      </div>
    </div>


    <style jsx>{`
      .navItems {
        display: none;
      }
      .navButtons {
        display: flex;
        flex-direction: row;
      }
      .navButtons > div {
        border: 1px solid white;
        border-radius: 4px;
      }
      .navBarSection {
        position: relative;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-content: flex-end;
        display: flex;
        flex-direction: row-reverse;
        background-color: transparent;
      }
      .nav {
        padding: 10px 0;
        position: absolute;
        width: 100%;
        background-color: white;
      }
      .navBarSection > div, .navBarSection > div > div {
        padding: 10px 10px 0px 10px;
        margin-left: auto;
      }
      .imageLogo {
        width: 100px;
        height: 50px;
        margin-left: 5px;
      }
      .drawer {
        display: none;
      }
      a {
        color: black;
      }

      @media only screen and (min-width: 800px) {
        .navItems {
          flex-grow: 1;
          flex-direction: row;
          display: flex;
        }
        .navBarSection > div, .navBarSection > div > div {
          padding: 10px 10px 0px 10px;
          margin: 0 4px;
        }
        .navBarSection {
          flex-direction: row;
        }
        .drawer {
          display: none;
        }
        .imageLogo {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Nav
