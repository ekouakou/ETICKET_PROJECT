
const getFullUrl = () => {
    const { protocol, hostname, port } = window.location;
    const portPart = port ? `:${port}` : '';
    // return `http://guineeticket.com/`;
    // return `${protocol}//${hostname}/`;
    return process.env.REACT_APP_API_URL || "http://localhost:8080/"; // PARAMETRE DOCKER
  };

  
  export const rootUrl = getFullUrl() + "eticketbackend/backoffice/webservices/";
  // export const rootUrl = getFullUrl();
  // export const urlBaseImage = getFullUrl() + "eticketbackend/backoffice/";
  export const urlBaseImage = getFullUrl() + "eticketbackend/backoffice/images/product/";

  
  export default getFullUrl;
  