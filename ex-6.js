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

function display(data) {
  console.log(data);
}

async function fetchData() {
  try {
    const profile = await getJohnProfile();
    display(profile);
    const orders = await getJohnOrders();
    display(orders);
  } catch (error) {
    display(error);
  }
}

fetchData();
