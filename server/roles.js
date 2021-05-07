const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")

ac.grant("admin")
 .extend("basic")
 .readAny("profile")
 .updateAny("profile")
 .updateAny("service")
 .deleteAny("profile")

return ac;
})();