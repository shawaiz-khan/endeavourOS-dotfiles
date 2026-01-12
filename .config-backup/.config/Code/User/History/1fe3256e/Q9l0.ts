import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL!,
    realm: "testRealm",
    clientId: "nextjs-clientId"
});

export default keycloak;