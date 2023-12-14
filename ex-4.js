//const { profile } = require("console");

// Exercise #4
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
// Start coding here

let johnProfile = async () => {
  return getJohnProfile();
};

async function getProfile() {
  const data = await johnProfile();
  console.log(data);
}

getProfile();
