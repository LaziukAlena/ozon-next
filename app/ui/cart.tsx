export default function Cart() {
    return (
        <div className="cart">
            <div className="cart-body">
                <div className="cart-title">Корзина</div>
                <div className="cart-total">Общая сумма: <span>0</span> руб</div>

                <div className="cart-wrapper"></div>
                <button className="btn btn-primary cart-confirm">Оформить заказ</button>
                <div className="cart-close"></div>
            </div>
        </div>
    )
}