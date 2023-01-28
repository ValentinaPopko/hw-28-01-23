import './Header.css'
function Header() {
    return (
    <div>

            <nav>
                <div class="navContainer">
                    <div class="logo">
                        <h3><a href="#">Кофейня</a></h3>
                    </div>
                    <div class="menu">
                        <ul>
                            <li> <a href="#">Главная</a></li>
                            <li> <a href="#aboutCofe">О кофе</a></li>
                            <li> <a href="#products">Меню</a></li>
                            <li> <a href="#blog">Блог</a></li>
                            <li> <a href="#contact">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
  
    </div>
    );
  }
  
  export default Header;