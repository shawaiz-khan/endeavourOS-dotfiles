import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL!,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
    clientId: "nextjs-clientId"
});

export default keycloak;