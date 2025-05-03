import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import FontStyles from "./FontStyles";
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="250615888269-f55mreufj9du077hv04omuv7asccemht.apps.googleusercontent.com">
        <StrictMode>
            <FontStyles/>
            <App/>
        </StrictMode>
    </GoogleOAuthProvider>,
);