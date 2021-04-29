import React, { MouseEvent } from "react";
import Product from "../Class/Product";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51IaZU2BRHl8hMc3AsA6YnHkmEqW3vlIqaz3AfwRhEFohyhCuyIKg1Wu66pVJGReMiFuGv9hL09LMMKzeD9fh0SK900WQ4KhMpI');
const url = 'http://localhost:8080/session'

class ProductCard extends React.Component<Product, {hover: boolean}> {
  constructor(props: Product) {
    super(props);
    this.state = {hover: false};
  }

  handleClick = async (event: MouseEvent) => {
    const stripe = await stripePromise;
    const session = await this.fetchSession()

    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error)
      }
    }    
  };

  fetchSession = async () => {
    return (await fetch(url, {method: "POST"})).json();
  }

  toggleHover = (event: MouseEvent) => {
    this.setState(state => ({
      hover: !state.hover
    }))
  };

  render() {
    let classes = this.state.hover ? "card has-background-white-bis" : "card has-background-white-ter"
    return (
      <div
        className={classes}
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
          <p className="title has-text-grey-darker has-text-centered is-size-5-mobile is-size-4-desktop is-size-4-fullhd">
            {this.props.name}
          </p>
          <p className="subtitle has-text-danger has-text-weight-semibold has-text-centered is-size-6-mobile is-size-5-desktop is-size-5-fullhd">
            ${(this.props.price / 100).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
