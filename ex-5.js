// Exercise #5
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

let getProfile = async function () {
  return getJohnProfile();
};
async function johnProfile() {
  try {
    const data = await getProfile();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

johnProfile();
