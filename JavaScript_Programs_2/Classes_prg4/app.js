//Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static price = "$8.99";
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 2;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = false;
  static price = "$12.99";
}

class PremiumPlan extends StandardPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 4;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = true;
  static price = "$15.99";
}

console.log(BasicPlan.hasSD);
console.log(BasicPlan.price);
console.log(PremiumPlan.numOfDevices);
