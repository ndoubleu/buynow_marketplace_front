"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
// import Shipping from "./Shipping";
import PaymentMethod from "./PaymentMethod";
// import Coupon from "./Coupon";
import Billing from "./Billing";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { Toaster, toast } from 'react-hot-toast';

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);
  const showError = () => {
    toast.error('Что-то пошло не так! Повторите попытку.');
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb title={"Оплата"} pages={["Оплата"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* <!-- левая часть оформления заказа --> */}
              <div className="lg:max-w-[670px] w-full">
                {/* <!-- окно входа --> */}
                <Login />

                {/* <!-- детали оплаты --> */}
                <Billing />
              </div>

              {/* <!-- правая часть оформления заказа --> */}
              <div className="max-w-[455px] w-full">
                {/* <!-- список товаров --> */}
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">Ваш заказ</h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    {/* <!-- заголовок --> */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <div>
                        <h4 className="font-medium text-dark">Товар</h4>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark text-right">
                          Подитог
                        </h4>
                      </div>
                    </div>

                    {/* <!-- список товаров из cartItems --> */}
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between py-5 border-b border-gray-3"
                      >
                        <div>
                          <p className="text-dark">{item.title}</p>
                        </div>
                        <div>
                          <p className="text-dark text-right">{item.price}</p>
                        </div>
                      </div>
                    ))}

                    {/* <!-- итого --> */}
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="font-medium text-lg text-dark">Итого</p>
                      </div>
                      <div>
                        <p className="font-medium text-lg text-dark text-right">
                          {totalPrice} сум
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- способ оплаты --> */}
                <PaymentMethod />

                {/* <!-- кнопка оформления заказа --> */}
                <div
                  className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5 cursor-pointer"
                  onClick={showError}
                >
                  Перейти к оформлению
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
