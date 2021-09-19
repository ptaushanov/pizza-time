import classNames from "classnames";
import { formatCurrency } from "./utils";
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render({price, type}) {
    const isHawaiian = type === Notification.types.HAWAIIAN;
    const template = `
<div class="notification type-${type} ${classNames({"is-danger": isHawaiian})}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.container.querySelector(".delete").addEventListener("click", ()=>{
      document.querySelector(".notifications").removeChild(this.container);
    })
  }

  empty(){
    this.container.innerHTML = "";
  }
}
