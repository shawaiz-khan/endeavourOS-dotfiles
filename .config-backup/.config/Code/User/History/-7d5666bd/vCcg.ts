import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "testRealm",
    clientId: "nextjs-clientId"
});

export default keycloak;