import c from './Header.module.css'

const Header = () => {
	return (
		<header className={c.header}>
         <div className={c.container}>
            <div className={c.row}>
               <a href='#s' className={c.logo}>
                  <img src='https://cdn-icons-png.flaticon.com/512/4474/4474196.png' alt="logo"/>
               </ a>
               <a href='#s'>DSN</a>
          </div>
         </div>
      </header>
	)
}

export default Header;