
function App() {
  return (
  <div className="wrapper clear">

  <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img className="m-r-15"
      src="/img/logo.png"
      alt="logo"
      height={40}
      width={40} />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex ">
      <li className="mr-30"><img
      src="/img/cart.svg"
      alt="cart"
      height={18}
      width={18} /><span>1205 руб.</span></li>
      <li><img
      src="/img/user.svg"
      alt="user"
      height={18}
      width={18} /></li>
    </ul>


  </header>
  <div className="content p-40">
    <h1 className="mb-30">Все кроссовки</h1>
    <div className="sneakers-wrapper d-flex">
      <div className="card">
        <img className="top" width={133} height={112} src="/img/sneakers/sneakers1.svg" alt="sneakers" />
        <h5>Мужские кроссовки Nice Bazzar Pozhar</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"> 
            <span>Price: </span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img className="top" width={133} height={112} src="/img/sneakers/sneakers2.svg" alt="sneakers" />
        <h5>Мужские кроссовки Nice Bazzar Pozhar</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"> 
            <span>Price: </span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img className="top" width={133} height={112} src="/img/sneakers/sneakers3.svg" alt="sneakers" />
        <h5>Мужские кроссовки Nice Bazzar Pozhar</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"> 
            <span>Price: </span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img className="top" width={133} height={112} src="/img/sneakers/sneakers4.svg" alt="sneakers" />
        <h5>Мужские кроссовки Nice Bazzar Pozhar</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"> 
            <span>Price: </span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img className="top" width={133} height={112} src="/img/sneakers/sneakers5.svg" alt="sneakers" />
        <h5>Мужские кроссовки Nice Bazzar Pozhar</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column"> 
            <span>Price: </span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      
    </div>
  </div>
</div>
  );
}

export default App;
