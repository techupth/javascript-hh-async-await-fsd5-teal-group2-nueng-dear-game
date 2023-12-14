//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
// getJohnProfile().then(display).catch(display);

// function display(data) {
//   console.log(data);
// }

getJohnProfile()
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
