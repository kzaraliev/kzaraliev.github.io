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

main.style.display = "none";
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

function openShoppingCart() {
  const container = createElement("div", null, null, "popup-window-cart", body);

  const titleBar = createElement("div", null, ["title-bar"], null, container);
  createElement("span", "Shopping cart", ["title-cart"], null, titleBar);

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
  container.classList.add("fadeIn");

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems) {
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
        ["fa-solid", "fa-xmark", "remove-item"],
        null,
        product
      );
      const img = createElement("img", null, null, null, product);
      img.src = item.img;
      createElement("p", item.productName, ["name-cart"], null, product);
      createElement("p", `Size ${item.size}`, ["size-cart"], null, product);
      createElement("p", `${item.price},00 lv.`, ["price-cart"], null, product);

      const amountSelector = createElement(
        "div",
        null,
        ["quantity-cart"],
        null,
        product
      );
      createElement(
        "i",
        null,
        ["fa-solid", "fa-circle-arrow-left", "quantity-selector"],
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
        ["fa-solid", "fa-circle-arrow-right", "quantity-selector"],
        null,
        amountSelector
      );
      createElement(
        "div",
        `${item.amount * item.price},00 lv.`,
        ["total-one-product"],
        null,
        product
      );
    });
  }
  if (Object.keys(cartItems).length > 2) {
    productsContainer.style.overflowY = "scroll";
  }

  const proceedToCheckout = createElement(
    "button",
    `PROCEED TO CHECKOUT (${cartCost},00 lv.)`,
    ["checkout-button"],
    null,
    container
  );
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

    const itemForCart = {
      img: slideshow.childNodes[1].childNodes[3].src.split(),
      productName: content.childNodes[3].textContent,
      price: content.childNodes[5].textContent.match(/(\d+)/)[0],
      size: sizeSelector.value,
      amount: parseInt(document.querySelector(".quantity").value),
      tag: content.childNodes[3].textContent + " " + sizeSelector.value,
    };

    cartNumber(itemForCart);
    totalCost(itemForCart);

    setTimeout(function () {
      done.style.transform = "translate(-110%) skew(-40deg)";
      addToCartBttn.disabled = false;
    }, 1000);
  });
}

function totalCost(item) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem(
      "totalCost",
      cartCost + parseInt(item.price) * parseInt(item.amount)
    );
  } else {
    localStorage.setItem(
      "totalCost",
      parseInt(item.price) * parseInt(item.amount)
    );
  }
}

function cartNumber(item) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + item.amount);
  } else {
    localStorage.setItem("cartNumbers", item.amount);
  }

  setItems(item);
}

function setItems(item) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[item.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [item.tag]: item,
      };
    } else {
      cartItems[item.tag].amount += item.amount;
    }
  } else {
    cartItems = {
      [item.tag]: item,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
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
