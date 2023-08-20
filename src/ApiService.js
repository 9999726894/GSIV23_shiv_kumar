import constant from "./config/constant"


export const getApiData = async () => {
    console.log(constant);
    let myObject = await fetch(constant.APIURL);
    const jsonData = await myObject.json();
    return jsonData;
}