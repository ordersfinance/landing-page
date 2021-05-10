import React from 'react';
import classNames from 'classnames';
import { FaTwitter, FaTelegramPlane, FaGithub, FaCode } from 'react-icons/fa'

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://t.me/OrdersFinance" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size="2em" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ordersfinance" target="_blank" rel="noopener noreferrer">
            <FaTwitter size="2em" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ordersfinance" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2em" />
          </a>
        </li>
        <li>
          <a href="https://bscscan.com/address/0xe3a17577a7ef4f73ecc61851181c6d78f657509e" target="_blank" rel="noopener noreferrer">
            <FaCode size="2em" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;