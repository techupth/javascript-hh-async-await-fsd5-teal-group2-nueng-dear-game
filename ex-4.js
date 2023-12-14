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

function display(data) {
  console.log(data);
}

async function getData() {
  const profile = await getJohnProfile();
  display(profile);
}

getData();
