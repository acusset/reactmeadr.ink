import React, { MouseEvent } from "react";
import Product from "../Class/Product";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_API_KEY || "";
const stripePromise = loadStripe(stripeKey);

const url = process.env.REACT_APP_API_URL + "/session";

class ProductCard extends React.Component<Product, { hover: boolean }> {
  constructor(props: Product) {
    super(props);
    this.state = { hover: false };
  }

  handleClick = async (event: MouseEvent): Promise<any> => {
    const stripe = await stripePromise;
    const session = await this.fetchSession();

    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error);
      }
    }
  };

  fetchSession = async (): Promise<any> => {
    return (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.props),
      })
    ).json();
  };

  toggleHover = (event: MouseEvent): void => {
    this.setState((state) => ({
      hover: !state.hover,
    }));
  };

  render() {
    let background = this.state.hover
      ? "has-background-white-bis"
      : "has-background-white-ter";
    return (
      <div
        className={"card " + background}
        onClick={this.handleClick}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="card-image">
          <figure className="image is-square">
            <img
              className="p-3"
              src={"images/drinks/" + this.props.imageUri}
              alt={this.props.description}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title has-text-grey-darker has-text-centered is-size-6-mobile is-size-5-desktop is-size-5-fullhd">
            {this.props.name}
          </p>
          <p className="subtitle has-text-danger has-text-weight-semibold has-text-centered is-size-6-mobile is-size-5-desktop is-size-5-fullhd">
            S${(this.props.price / 100).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
