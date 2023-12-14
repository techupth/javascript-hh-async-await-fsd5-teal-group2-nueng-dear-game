//const { error } = require("console");

// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
let profile = async function () {
  return getJohnProfile();
};
let order = async function () {
  return getJohnOrders();
};

async function getProfileAndOrder() {
  try {
    const getProfile = await profile();
    console.log(getProfile);
    const getOrder = await order();
    console.log(getOrder);
  } catch (error) {
    console.log(error);
  }
}

getProfileAndOrder();
