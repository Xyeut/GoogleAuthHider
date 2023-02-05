"use strict";
const headingMessage = "Choose an account";
function hideEmails() {
    const emails = [...document.getElementsByClassName("wLBAL")];
    const filter = (email) => {
        const splitCredentials = email.split("@");
        const credential = splitCredentials[0];
        let credentialArray = credential.split(credential[Math.floor(credential.length / 2.5)]);
        if (credentialArray.length > 2)
            credentialArray = [...credentialArray.slice(0, 1), credentialArray.slice(1).join("")];
        credentialArray[1] = credentialArray[1].replace(/./g, "*");
        return credentialArray.join("");
    };
    for (const email of emails) {
        const filteredEmail = filter(email.innerHTML);
        email.innerHTML = `${filteredEmail}@gmail.com`;
    }
}
function verifyContainer(container) {
    const spans = [...container.getElementsByTagName("span")];
    const headerSpan = spans.find((span) => span.innerText === headingMessage);
    if (!headerSpan)
        return;
    else
        return headerSpan;
}
function onLoad() {
    const container = document.getElementsByClassName("xkfVF")[0];
    if (!container)
        return;
    const headerSpan = verifyContainer(container);
    if (!headerSpan)
        return;
    hideEmails();
}
onLoad();
