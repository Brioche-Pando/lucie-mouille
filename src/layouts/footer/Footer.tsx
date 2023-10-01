import React from 'react'
import Button from '../../components/button/Button'

function Footer () {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>Copyright · Lucie Mouillé 2023</p>
      <ul className='footer__buttons'>
        <li className='footer__button'>
          <Button
            url='mailto:luciemouille@hotmail.fr'
            target='_blank'
            content='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_938_837)"><path d="M22.1525 3.55322L11.1772 21.0044L9.50683 12.4078L1.99999 7.89796L22.1525 3.55322Z" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.45566 12.4436L22.1525 3.55317" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g> <defs> <clipPath id="clip0_938_837"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>'
            additionnal_class='button--square'
          />
        </li>
        <li className='footer__button'>
          <Button
            url={'https://www.linkedin.com/in/lucie-mouill%C3%A9-57593b1b7/'}
            target='_blank'
            content='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M21 8.5V16.5C21 19.2614 18.7614 21.5 16 21.5H8C5.23858 21.5 3 19.2614 3 16.5V8.5C3 5.73858 5.23858 3.5 8 3.5H16C18.7614 3.5 21 5.73858 21 8.5Z" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17.5V14V10.5" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5V14.25M11 10.5V14.25M11 14.25C11 10.5 17 10.5 17 14.25V17.5" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7.51L7.01 7.49889" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            additionnal_class='button--square'
          />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
