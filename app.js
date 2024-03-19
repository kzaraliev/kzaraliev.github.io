const background = document.querySelector("#site-background");
const bttnEnter = document.querySelector("#bttn-enter");
const main = document.querySelector(".main");
const mainBody = document.querySelector(".main-body");
const body = document.querySelector("body");
const shoppingCart = document.querySelector("#shopping-cart");
const productBlocks = document.querySelectorAll(".open-popup");
const terms = document.querySelector("#terms");

slideshowMove();

bttnEnter.addEventListener("click", enterSite);
shoppingCart.addEventListener("click", openShoppingCart);
terms.addEventListener("click", openPrivacyPolicy);

productBlocks.forEach((product) => {
  product.addEventListener("click", function () {
    showProduct(product);
  });
});

main.classList.add("notDisplay");

function enterSite(e) {
  e.preventDefault();

  background.style.transition = "background-size 0.7s ease-in-out";
  background.style.backgroundSize = "5%";
  background.style.filter = "brightness(70%)";

  bttnEnter.innerHTML = "";

  main.style.display = "flex";
  main.classList.add("fadeIn");
}

function openPrivacyPolicy() {
  basicPage("Privacy Policy");

  const container = document.querySelector("#popup-window-cart");
  container.classList.add("fadeIn");
  const textContent = createElement(
    "div",
    null,
    ["terms-container"],
    null,
    container
  );

  createElement(
    "h2",
    "Last Updated: 27.09.2023",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "Welcome to Voam Clothing! We value your trust and are committed to protecting your privacy. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you interact with our website, purchase our products, or engage with us in any other way. By using our services, you consent to the practices described in this Privacy Policy.",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "h2",
    "Information We Collect",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "We may collect various types of information, including:",
    ["formal-text"],
    null,
    textContent
  );

  const ul1 = createElement("ul", null, ["info-collect"], null, textContent);

  createElement(
    "li",
    "Personal Information: This includes information such as your name, email address, shipping address, billing information, and phone number, which we collect when you make a purchase.",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "li",
    "Transaction Information: When you make a purchase, we collect information related to your order, including product details, payment information, and shipping information.",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "li",
    "Device Information: We collect information about the device you use to access our website, including browser type and operating system.",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "li",
    "Usage Information: We may collect information about how you use our website, such as the pages you visit, your browsing history, and your interactions with our content and advertisements.",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "li",
    "Communications: We may collect information from your communications with us, including emails, chat messages, and customer support inquiries.",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "li",
    "Cookies and Similar Technologies: We use cookies and similar technologies to collect information about your browsing behavior and preferences. ",
    ["formal-text"],
    null,
    ul1
  );

  createElement(
    "h2",
    "How We Use Your Information",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "We use your information for various purposes, including:",
    ["formal-text"],
    null,
    textContent
  );

  const ul2 = createElement("ul", null, ["info-collect"], null, textContent);

  createElement(
    "li",
    "Fulfillment of Orders: To process and fulfill your orders, including shipping and handling.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "li",
    "Customer Support: To provide customer support and respond to your inquiries.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "li",
    "Marketing and Promotions: To send you promotional materials, newsletters, and updates about our products and services, if you have opted to receive them.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "li",
    "Analytics: To analyze and improve our website, products, and services.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "li",
    "Legal Compliance: To comply with applicable laws, regulations, and legal requests.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "li",
    "Protection: To protect the security and integrity of our website and business.",
    ["formal-text"],
    null,
    ul2
  );

  createElement(
    "h2",
    "Sharing Your Information",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "We may share your information with:",
    ["formal-text"],
    null,
    textContent
  );

  const ul3 = createElement("ul", null, ["info-collect"], null, textContent);

  createElement(
    "li",
    "Service Providers: We may share your information with third-party service providers who help us with various aspects of our business, such as payment processing, shipping, and marketing.",
    ["formal-text"],
    null,
    ul3
  );

  createElement(
    "li",
    "Legal Requirements: We may disclose your information in response to legal requests or to comply with applicable laws and regulations.",
    ["formal-text"],
    null,
    ul3
  );

  createElement(
    "li",
    "Business Transfers: In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the new owner.",
    ["formal-text"],
    null,
    ul3
  );

  createElement("h2", "Security", ["formal-text"], null, textContent);

  createElement(
    "p",
    "We take reasonable measures to protect your personal information, but no online data transmission is completely secure. You are responsible for maintaining the security of your account credentials.",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "h2",
    "Changes to this Privacy Policy",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "We may update this Privacy Policy from time to time. The latest version will always be available on our website, and the date of the last update will be noted at the top of the policy.",
    ["formal-text"],
    null,
    textContent
  );

  createElement("h2", "Contact Us", ["formal-text"], null, textContent);

  createElement(
    "p",
    "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: voaminfo@gmail.com",
    ["formal-text"],
    null,
    textContent
  );

  createElement(
    "p",
    "Thank you for choosing Voam Clothing. Your privacy is important to us, and we are committed to ensuring your personal information is handled with care and in compliance with applicable privacy laws.",
    ["formal-text"],
    null,
    textContent
  );
}

function basicPage(title) {
  const container = createElement("div", null, null, "popup-window-cart", body);

  const titleBar = createElement("div", null, ["title-bar"], null, container);
  createElement("span", title, ["title-cart", "unselectable"], null, titleBar);

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

  mainBody.classList.add("disable-scroll");
  main.classList.add("open-window");
}

function checkoutSubmit() {
  document.querySelector("#popup-window-cart").remove();
  basicPage("Checkout");
  const container = document.querySelector("#popup-window-cart");

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
      emailjs.init("qcyeQ2ud7IRr-5jxS");
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
      orderNumber: Math.floor(Math.random() * 10000) + 1,
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

    const serviceId = "service_1ku2u34";
    const templateIdToCustomer = "template_e9863s2";
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

    const templateIdToBoss = "template_7bmzsml";
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
  basicPage("Shopping Cart");
  const container = document.querySelector("#popup-window-cart");

  const productsContainer = createElement(
    "div",
    null,
    ["products"],
    null,
    container
  );

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

      createElement(
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

  basicPage("Product preview");

  const container = document.querySelector("#popup-window-cart");
  container.classList.add("fadeIn");

  const productContainer = createElement(
    "div",
    null,
    ["preview-product-content"],
    null,
    container
  );

  productContainer.style.display = "flex";

  const slideshow = product.firstElementChild.cloneNode(true);
  slideshow.setAttribute("id", "popup-slideshow");
  productContainer.appendChild(slideshow);

  const contentContainer = createElement(
    "div",
    null,
    null,
    "popup-content",
    productContainer
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

  console.log(product.childNodes[3].childNodes[3].textContent);

  let sSize;
  let mSize;
  let lSize;

  if (
    product.childNodes[3].childNodes[3].textContent === "“DEVOTION” T-SHIRT" ||
    product.childNodes[3].childNodes[3].textContent === "“DEVOTION” COMBO" ||
    product.childNodes[3].childNodes[3].textContent ===
      "MIDNIGHT GREEN TRACKSUIT" ||
    product.childNodes[3].childNodes[3].textContent ===
      "MIDNIGHT GREEN HOODIE" ||
    product.childNodes[3].childNodes[3].textContent === "MIDNIGHT GREEN SWEATPANTS"
  ) {
    sSize = createElement("option", "S", null, null, sizeSelector);
    mSize = createElement("option", "M", null, null, sizeSelector);
    lSize = createElement("option", "L", null, null, sizeSelector);

    sSize.value = "S";
    mSize.value = "M";
    lSize.value = "L";
  }

  if (product.childNodes[3].childNodes[3].textContent === "“DEVOTION” BEANIE") {
    mSize = createElement("option", "M", null, null, sizeSelector);
    mSize.value = "M";
  }

  if (
    product.childNodes[3].childNodes[3].textContent === "“BLACK SHEEP” HOODIE"
  ) {
    mSize = createElement("option", "M", null, null, sizeSelector);
    mSize.value = "M";
  }

  if (
    product.childNodes[3].childNodes[3].textContent ===
    "“VOAM*” EMBROIDERY HOODIE"
  ) {
    mSize = createElement("option", "M", null, null, sizeSelector);
    lSize = createElement("option", "L", null, null, sizeSelector);
  }

  //const sSize = createElement("option", "S", null, null, sizeSelector);
  //mSize = createElement("option", "M", null, null, sizeSelector);
  //lSize = createElement("option", "L", null, null, sizeSelector);
  //mSize.value = "M";
  //lSize.value = "L";

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

  links = document.querySelectorAll(".slideshow-container a");

  slideshowMove();

  const done = document.querySelector(".done");
  addToCartBttn.addEventListener("click", () => {
    addToCartBttn.disabled = true;
    const isInStock = document.querySelector("#popup-content-container")
      .childNodes[1];

    if (isInStock.textContent == "Out of Stock") {
      isInStock.style.color = "red";
      setTimeout(function () {
        isInStock.style.color = "black";
        addToCartBttn.disabled = false;
      }, 500);
      return;
    } else if (sizeSelector.value == "") {
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
