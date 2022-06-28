import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Users/guoyiwei/Documents/projects/nuxt-template/public","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
