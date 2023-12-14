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

function display(data) {
  console.log(data);
}

async function fetchData() {
  try {
    const profile = await getJohnProfile();
    display(profile);
  } catch (error) {
    display(error);
  }
}

fetchData();
