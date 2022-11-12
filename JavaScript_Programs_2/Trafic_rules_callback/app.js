//Users phone a message will show if they break any rule
const userPhoneRulesBreak = function (fine, speedInfo, userName) {
  console.log(
    `Hey ${userName} your fine is ${fine} $ because your speed was ${speedInfo} , you broke the rule of speed limit`,
  );
};
const serverSideRulesInfo = function (name, speed, callback) {
  let fine;
  let userName = name;
  let speedInfo = speed;
  if (speed >= 100 && speed < 150) {
    fine = 120;
  } else if (speed >= 150 && speed < 200) {
    fine = 150;
  } else if (speed >= 200) {
    fine = 200;
  }
  callback(fine, speedInfo, userName);
};
serverSideRulesInfo("saurab", 120, userPhoneRulesBreak, "sd");
