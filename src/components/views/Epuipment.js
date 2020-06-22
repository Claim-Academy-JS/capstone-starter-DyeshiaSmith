import React from "react";

export class equipment extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/products/products");
    try {
      this.setState({
        posts: await res.json(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderProducts = () =>
    this.state.posts.map(({ equipment, location }, index) => (
      <section key={index}>
        <h2>{equipment}</h2>
        <p>{location}</p>
      </section>
    ));

  render() {
    return (
      <main>
        <h1>Blog</h1>
        {this.renderProducts()}
      </main>
    );
  }
}
