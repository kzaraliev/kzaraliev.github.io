const background = document.querySelector("#site-background");
const bttnEnter = document.querySelector("#bttn-enter");
const main = document.querySelector(".main");
const mainBody = document.querySelector(".main-body");
const body = document.querySelector("body");
const shoppingCart = document.querySelector("#shopping-cart");
const productBlocks = document.querySelectorAll(".open-popup");

slideshowMove();

bttnEnter.addEventListener("click", enterSite);
shoppingCart.addEventListener("click", openShoppingCart);

productBlocks.forEach((product) => {
  product.addEventListener("click", function () {
    showProduct(product);
  });
});

main.classList.add("notDisplay");
let itemsInCart = [];

function enterSite(e) {
  e.preventDefault();

  background.style.transition = "background-size 0.7s ease-in-out";
  background.style.backgroundSize = "5%";
  background.style.filter = "brightness(70%)";

  bttnEnter.innerHTML = "";

  main.style.display = "flex";
  main.classList.add("fadeIn");
}

function createCloseButton(container) {
  const closeBttn = createElement(
    "div",
    null,
    ["close-container"],
    null,
    container
  );
  createElement("div", null, ["leftright"], null, closeBttn);
  createElement("div", null, ["rightleft"], null, closeBttn);

  closeBttn.addEventListener("click", function () {
    main.classList.remove("fadeIn");
    mainBody.classList.remove("disable-scroll");
    main.classList.remove("open-window");
    container.remove();
  });
}

function checkoutSubmit() {
  document.querySelector("#popup-window-cart").remove();
  const container = createElement("div", null, null, "popup-window-cart", body);

  const titleBar = createElement("div", null, ["title-bar"], null, container);
  const titleCheckout = createElement(
    "span",
    "Checkout",
    ["title-cart"],
    null,
    titleBar
  );
  titleCheckout.classList.add("unselectable");
  const closeBttn = createElement(
    "div",
    null,
    ["close-container"],
    null,
    titleBar
  );
  createElement("div", null, ["leftright"], null, closeBttn);
  createElement("div", null, ["rightleft"], null, closeBttn);

  closeBttn.addEventListener("click", function () {
    main.classList.remove("fadeIn");
    mainBody.classList.remove("disable-scroll");
    main.classList.remove("open-window");
    container.remove();
  });

  const closeButton = document.querySelector(".close-container");
  closeButton.style.display = "flex";

  const content = createElement(
    "div",
    null,
    ["content-checkout"],
    null,
    container
  );

  const formContainer = createElement(
    "div",
    null,
    ["form-checkout"],
    null,
    content
  );
  formContainer.innerHTML += `
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label>Full Name</label>
    </div>
    <div class="col-75">
      <input class="inputForm" type="text" id="fname" name="fullname">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Econt Office Address</label>
    </div>
    <div class="col-75">
    <input class="inputForm" type="text" id="econt-office" name="econt-office" placeholder="Econt street name and number..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Town/City</label>
    </div>
    <div class="col-75">
    <input class="inputForm" type="text" id="town" name="town">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Phone</label>
    </div>
    <div class="col-75">
    <input class="inputForm" type="number" id="phone" name="phone">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Email</label>
    </div>
    <div class="col-75">
    <input class="inputForm" type="text" id="email" name="email">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label>Order notes (optional)</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:80px"></textarea>
    </div>
  </div>
  </form>
  `;

  const orderContainer = createElement(
    "div",
    null,
    ["order-checkout-container"],
    null,
    content
  );

  createElement("h1", "Your order:", null, null, orderContainer);
  const productsContainer = createElement(
    "ul",
    null,
    ["products-checkout"],
    null,
    orderContainer
  );

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");

  if (Object.keys(cartItems).length > 2) {
    productsContainer.style.overflowY = "scroll";
  }
  productsContainer.innerHTML = "";
  Object.values(cartItems).map((item) => {
    const li = createElement(
      "li",
      null,
      ["li-checkout"],
      null,
      productsContainer
    );
    createElement(
      "h2",
      `${item.productName} - ${item.size} x ${item.amount}`,
      ["product-desc-checkout"],
      null,
      li
    );
    createElement(
      "p",
      `${item.amount * item.price},00 lv.`,
      ["product-price-checkout"],
      null,
      li
    );
  });

  createElement(
    "h1",
    `Total: ${cartCost},00 lv.`,
    ["total-cost-checkout"],
    null,
    orderContainer
  );

  createElement(
    "label",
    "*Pay with cash upon delivery.",
    null,
    "label-checkout",
    orderContainer
  );

  const placeOrderBttn = createElement(
    "button",
    "Place order",
    ["section-buttons"],
    "place-order-bttn",
    orderContainer
  );

  placeOrderBttn.addEventListener("click", function sendMail() {
    (function () {
      emailjs.init("sXpQ4FTzvcV1tZr9F");
    })();

    const name = document.querySelector("#fname");
    const econt = document.querySelector("#econt-office");
    const town = document.querySelector("#town");
    const phone = document.querySelector("#phone");
    const to = document.querySelector("#email");
    const notes = document.querySelector("#subject");

    const items = JSON.parse(localStorage.getItem("productsInCart"));
    let products = [];

    Object.values(items).map((item) => {
      products.push(`${item.productName} - ${item.size} x ${item.amount}`);
    });

    let params = {
      sender: "Voam Clothing",
      name: name.value,
      econtOffice: econt.value,
      town: town.value,
      phone: phone.value,
      to: to.value,
      notes: notes.value,
      orderNumber: Math.floor(Math.random() * 1000) + 1,
      date: new Date().toISOString().slice(0, 10),
      products: products.join("\r\n"),
      totalPrice: localStorage.getItem("totalCost"),
    };

    let flag = true;

    Object.entries(params).forEach((parameter) => {
      const [key, value] = parameter;
      if (key != "notes") {
        if (value == "") {
          switch (key) {
            case "name":
              name.classList.add("errors");
              break;
            case "econtOffice":
              econt.classList.add("errors");
              break;
            case "town":
              town.classList.add("errors");
              break;
            case "phone":
              phone.classList.add("errors");
              break;
            case "to":
              to.classList.add("errors");
              break;
          }

          flag = false;
          setTimeout(() => {
            name.classList.remove("errors");
            econt.classList.remove("errors");
            town.classList.remove("errors");
            phone.classList.remove("errors");
            to.classList.remove("errors");
          }, 500);
        }
      }
    });

    if (!flag) {
      return;
    }

    if (!ValidateEmail(params.to)) {
      to.classList.add("errors");
      setTimeout(() => {
        to.classList.remove("errors");
      }, 500);
      return;
    }

    const serviceId = "service_43ymwpo";
    const templateIdToCustomer = "template_gayvref";
    let flagSend = true;
    emailjs
      .send(serviceId, templateIdToCustomer, params)
      .then(() => {
        alert("Your order has been successfully placed");
      })
      .catch(() => {
        flagSend = false;
        alert("Something went wrong :'(");
      });

    const templateIdToBoss = "template_cx1qjkq";
    emailjs.send(serviceId, templateIdToBoss, params).then().catch();

    main.classList.remove("fadeIn");
    mainBody.classList.remove("disable-scroll");
    main.classList.remove("open-window");
    document.querySelector("#popup-window-cart").remove();

    if (flagSend) {
      localStorage.clear();
    }
  });
}

function openShoppingCart(reload) {
  const container = createElement("div", null, null, "popup-window-cart", body);

  const titleBar = createElement("div", null, ["title-bar"], null, container);
  const titleShopping = createElement(
    "span",
    "Shopping cart",
    ["title-cart"],
    null,
    titleBar
  );
  titleShopping.classList.add("unselectable");
  const closeBttn = createElement(
    "div",
    null,
    ["close-container"],
    null,
    titleBar
  );
  createElement("div", null, ["leftright"], null, closeBttn);
  createElement("div", null, ["rightleft"], null, closeBttn);

  closeBttn.addEventListener("click", function () {
    main.classList.remove("fadeIn");
    mainBody.classList.remove("disable-scroll");
    main.classList.remove("open-window");
    container.remove();
  });

  const closeButton = document.querySelector(".close-container");
  closeButton.style.display = "flex";

  const productsContainer = createElement(
    "div",
    null,
    ["products"],
    null,
    container
  );

  mainBody.classList.add("disable-scroll");
  main.classList.add("open-window");

  if (reload) {
    container.classList.add("fadeIn");
  }

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && Object.keys(cartItems).length > 0) {
    productsContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      const product = createElement(
        "div",
        null,
        ["product"],
        null,
        productsContainer
      );

      const removeItem = createElement(
        "i",
        null,
        ["fa-solid", "fa-xmark", "remove-item", `${item.tag}`],
        null,
        product
      );

      const img = createElement("img", null, null, null, product);
      img.src = item.img;

      const contentContainer = createElement(
        "div",
        null,
        ["content-cart-container"],
        null,
        product
      );

      createElement(
        "p",
        item.productName,
        ["name-cart"],
        null,
        contentContainer
      );
      createElement(
        "p",
        `Size ${item.size}`,
        ["size-cart"],
        null,
        contentContainer
      );
      createElement(
        "p",
        `${item.price},00 lv.`,
        ["price-cart"],
        null,
        contentContainer
      );

      const amountSelector = createElement(
        "div",
        null,
        ["quantity-cart"],
        null,
        contentContainer
      );
      createElement(
        "i",
        null,
        ["fa-solid", "fa-circle-arrow-left", "decrease"],
        null,
        amountSelector
      );
      createElement(
        "span",
        `${item.amount}`,
        ["quantity-number"],
        null,
        amountSelector
      );
      createElement(
        "i",
        null,
        ["fa-solid", "fa-circle-arrow-right", "increase"],
        null,
        amountSelector
      );
      createElement(
        "div",
        `${item.amount * item.price},00 lv.`,
        ["total-one-product"],
        null,
        contentContainer
      );
    });

    const proceedToCheckout = createElement(
      "button",
      `PROCEED TO CHECKOUT (${cartCost},00 lv.)`,
      ["checkout-button"],
      null,
      container
    );
    proceedToCheckout.addEventListener("click", checkoutSubmit);
  } else {
    productsContainer.remove();
    const emptyContainer = createElement(
      "div",
      null,
      ["empty-shopping-cart"],
      null,
      container
    );
    const emptyCart = createElement(
      "img",
      null,
      null,
      "empty-shopping-cart-img",
      emptyContainer
    );
    emptyCart.src = "img/empty_cart.png";
    createElement(
      "h1",
      "Your cart is empty",
      null,
      "empty-shopping-cart-text",
      emptyContainer
    );
    createElement(
      "p",
      "Looks like you haven't added anything to your cart. Go ahead & explore.",
      null,
      "empty-shopping-cart-subtext",
      emptyContainer
    );
  }

  if (Object.keys(cartItems).length > 2) {
    productsContainer.style.overflowY = "scroll";
  }

  deleteButtons();
  manageQuantity();
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          ".total-one-product"
        ).textContent;
      currentProduct =
        decreaseButtons[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          ".remove-item"
        ).classList[3];

      if (cartItems[currentProduct].amount > 1) {
        cartItems[currentProduct].amount -= 1;
        cartNumber(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        document.querySelector("#popup-window-cart").remove();
        openShoppingCart(false);
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          ".total-one-product"
        ).textContent;
      currentProduct =
        decreaseButtons[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          ".remove-item"
        ).classList[3];

      cartItems[currentProduct].amount += 1;
      cartNumber(cartItems[currentProduct], "increase");
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      document.querySelector("#popup-window-cart").remove();
      openShoppingCart(false);
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".remove-item");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (e) => {
      productName = e.target.classList[3];

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].amount
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].amount
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      document.querySelector("#popup-window-cart").remove();
      openShoppingCart(false);
    });
  }
}

function showProduct(product) {
  while (product.classList[0] != "product-block") {
    product = product.parentElement;
  }

  const container = createElement("div", null, null, "popup-window", body);
  const slideshow = product.firstElementChild.cloneNode(true);
  slideshow.setAttribute("id", "popup-slideshow");
  container.appendChild(slideshow);

  const contentContainer = createElement(
    "div",
    null,
    null,
    "popup-content",
    container
  );

  const content = product.childNodes[3].cloneNode(true);
  content.classList.remove("product-content");
  content.setAttribute("id", "popup-content-container");
  contentContainer.appendChild(content);

  const sizeContainer = createElement(
    "div",
    null,
    null,
    "size-container",
    contentContainer
  );

  createElement("p", "Size", null, "size-text", sizeContainer);

  const sizeSelector = createElement(
    "select",
    null,
    null,
    "size",
    sizeContainer
  );

  const defaultText = createElement(
    "option",
    "Choose an option",
    null,
    null,
    sizeSelector
  );
  const sSize = createElement("option", "S", null, null, sizeSelector);
  const mSize = createElement("option", "M", null, null, sizeSelector);
  const lSize = createElement("option", "L", null, null, sizeSelector);

  sSize.value = "S";
  mSize.value = "M";
  lSize.value = "L";

  defaultText.value = "";
  defaultText.disabled = true;
  defaultText.selected = true;

  const orderContainer = createElement(
    "div",
    null,
    null,
    "popup-order",
    contentContainer
  );

  createAmountSelector(orderContainer);

  const addToCartBttn = createElement(
    "button",
    null,
    ["addtocart"],
    null,
    orderContainer
  );

  const pretext = createElement("div", null, ["pretext"], null, addToCartBttn);
  pretext.innerHTML = '<i class="fas fa-cart-plus"></i> ADD TO CART';

  const pretextDone = createElement(
    "div",
    null,
    ["pretext", "done"],
    null,
    addToCartBttn
  );
  const postText = createElement("div", null, ["posttext"], null, pretextDone);
  postText.innerHTML = '<i class="fas fa-check"></i> ADDED';

  createCloseButton(container);

  mainBody.classList.add("disable-scroll");
  main.classList.add("open-window");
  container.classList.add("fadeIn");

  links = document.querySelectorAll(".slideshow-container a");

  slideshowMove();

  const done = document.querySelector(".done");
  addToCartBttn.addEventListener("click", () => {
    addToCartBttn.disabled = true;
    if (sizeSelector.value == "") {
      sizeSelector.classList.add("errors");
      setTimeout(function () {
        sizeSelector.classList.remove("errors");
        addToCartBttn.disabled = false;
      }, 500);
      return;
    }

    done.style.transform = "translate(0px)";
    const tag = (
      content.childNodes[3].textContent + sizeSelector.value
    ).replace(/\s/g, "");



    const itemForCart = {
      img: slideshow.childNodes[1].childNodes[3].src.split(),
      productName: content.childNodes[3].textContent,
      price: content.childNodes[5].textContent.match(/(\d+)/)[0],
      size: sizeSelector.value,
      amount: parseInt(document.querySelector(".quantity").value),
      tag: tag,
    };

    cartNumber(itemForCart);
    totalCost(itemForCart);

    setTimeout(function () {
      done.style.transform = "translate(-110%) skew(-40deg)";
      addToCartBttn.disabled = false;
    }, 1000);
  });
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let totalPrice = 0;

  Object.values(cartItems).map((item) => {
    totalPrice += parseInt(item.amount) * parseInt(item.price);
  });

  localStorage.setItem("totalCost", totalPrice);
  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - parseInt(product.price));
  }
}

function cartNumber(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action == "decrease") {
    localStorage.setItem("cartNumbers", productNumbers - 1);
  } else if (productNumbers) {
    if (action == "increase") {
      localStorage.setItem("cartNumbers", productNumbers + 1);
    } else {
      localStorage.setItem("cartNumbers", productNumbers + product.amount);
    }
  } else {
    localStorage.setItem("cartNumbers", product.amount);
  }
  setItems(product, action);
}

function setItems(item, action) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[item.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [item.tag]: item,
      };
    } else {
      if (action == "increase") {
        cartItems[item.tag].amount += 1;
      } else {
        cartItems[item.tag].amount += item.amount;
      }
    }
  } else {
    cartItems = {
      [item.tag]: item,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function createAmountSelector(orderContainer) {
  const amountContainer = createElement(
    "div",
    null,
    ["number"],
    null,
    orderContainer
  );
  createElement("span", "-", ["minus", "unselectable"], null, amountContainer);

  const amountSelector = createElement(
    "input",
    null,
    ["quantity"],
    null,
    amountContainer
  );
  createElement("span", "+", ["plus", "unselectable"], null, amountContainer);

  amountSelector.value = "1";
  amountSelector.type = "number";
  amountSelector.min = "1";

  manipulateAmount();
}

function manipulateAmount() {
  document.querySelector(".minus").addEventListener("click", function () {
    let input = document.querySelector("input");
    let count = Number(input.value) - 1;
    if (count < 1) {
      return;
    }
    input.value = count.toString();
    input.textContent = input.value;
  });
  document.querySelector(".plus").addEventListener("click", function () {
    let input = document.querySelector("input");
    let count = Number(input.value) + 1;
    input.value = count.toString();
    input.textContent = input.value;
  });
}

function slideshowMove() {
  init();

  function init() {
    parents = document.querySelectorAll(
      ".slideshow-container:not(.initialized-container)"
    );

    for (j = 0; j < parents.length; j++) {
      var slides = parents[j].getElementsByClassName("mySlides");
      slides[0].classList.add("active-slide");
    }

    parents.forEach((parent) => {
      parent.classList.add("initialized-container");
    });
  }

  let links = document.querySelectorAll(".slideshow-container a");

  for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      current = this.parentNode;

      var slides = current.getElementsByClassName("mySlides");
      curr_slide = current.getElementsByClassName("active-slide")[0];
      curr_slide.classList.remove("active-slide");
      if (this.className == "next") {
        if (curr_slide.nextElementSibling.classList.contains("mySlides")) {
          curr_slide.nextElementSibling.classList.add("active-slide");
        } else {
          slides[0].classList.add("active-slide");
        }
      }

      if (this.className == "prev") {
        if (curr_slide.previousElementSibling) {
          curr_slide.previousElementSibling.classList.add("active-slide");
        } else {
          slides[slides.length - 1].classList.add("active-slide");
        }
      }
    };
  }
}

function createElement(type, textContent, classes, id, parent) {
  const element = document.createElement(type);

  if (textContent) {
    element.textContent = textContent;
  }

  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }

  if (id) {
    element.setAttribute("id", id);
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}
