class Lists extends React.Component {
  render() {
    console.log(this.props);
    const { pokemons } = this.props;
    return (
      <ul>
        {pokemons.map((i) => (
          <li key={i.url}>{i.name}</li>
        ))}
      </ul>
    );
  }
}
