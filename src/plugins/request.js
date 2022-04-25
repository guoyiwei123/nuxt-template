import models from "../models";
export default ({ app }, inject) => {
    const modelObjs = {};
    Object.keys(models).forEach(key => {
        const modelObj = {};
        const funcs = models[key];
        Object.keys(funcs).forEach(key => {
            modelObj[key] = funcs[key].bind(app);
        })
        modelObjs[key] = modelObj;
    })
    inject("models", modelObjs);
}