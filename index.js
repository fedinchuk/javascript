const userProfile = {
  name: "Vasyl",
  commentsQty: 23,
  hasSingnedAgreement: false,
};

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has co comments`;
  }

  return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile));
