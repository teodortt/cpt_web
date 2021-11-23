import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Layout = ({ children, title }) => {
    return (
        <>
            {/* <GlobalStyles /> */}
            {/* <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> */}
            <Elements stripe={stripePromise}>{children}</Elements>
        </>
    );
};

export default Layout;