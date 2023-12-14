//Exercise #1

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

// getJohnProfile().then(display);

// function display(data) {
//   console.log(data);
// }

getJohnProfile().then((data) => console.log(data));
