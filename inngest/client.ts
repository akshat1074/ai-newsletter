import { Inngest } from "inngest";

export const inngest = new Inngest({
    id:"personalised-newsletter",
    name:"Personalized Newsletter Generator",
    signingKey:process.env.INNGEST_SIGNING_KEY,
});