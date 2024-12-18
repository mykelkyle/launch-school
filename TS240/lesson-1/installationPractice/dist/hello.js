"use strict";
const userSettings = {
    colorScheme: "dark",
    notifications: ["email", "push"],
};
userSettings.colorScheme = "light";
userSettings.notifications.push("sms");
console.log(userSettings.colorScheme); // "light"
console.log(userSettings.notifications); // ["email", "push", "sms"]
