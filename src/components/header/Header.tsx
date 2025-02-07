const Header: React.FC = () => {
  return (
    <header className='mt-6 mb-6 w-11/12'>
      <div className='header_info flex flex-row justify-between'>
        <div className='logo flex flex-row items-center'>
          <img
            src='/logo.svg'
            alt='logo'
          />
          <div className='logo_text text-2xl font-black'>From USA Delivery</div>
        </div>
        <div className='header_right flex flex-row text-right'>
          <div
            className='header_right_price pr-3 border-r'
            style={{ borderColor: "rgba(167, 139, 250, 0.4)" }}>
            <ul>
              <li>We deliver goods from abroad to Poland</li>
              <li>Cost from PLN 55 per order</li>
              <li>1$ = 4.1 zł | 1€ = 4.3 zł</li>
            </ul>
          </div>
          <div className='header_rightcontacts pl-3'>
            <ul className='flex flex-col h-full justify-between'>
              <li className='text-4xl font-black'>+48 785 569 699</li>
              <li className='text-2xl text-center'>
                Calls within Poland are free
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
