class App extends React.Component {
  constructor() {
    super();
    this.state = { pokes: [], filterPokes: [] };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json1) => {
        json1.results.map((v, i) => {
          v.id = i + 1;
        });
        this.setState(
          () => {
            return { pokes: json1.results, filterPokes: json1.results };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }
  onChangeHandler = (e) => {
    const comparePokemons = this.state.pokes.filter((p) =>
      p.name.includes(e.target.value)
    );
    this.setState(
      () => {
        return { filterPokes: comparePokemons };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>宝可梦</h1>
        <Input onChangeHandler={this.onChangeHandler} />
        <Lists pokemons={this.state.filterPokes} />
      </div>
    );
  }
}

root.render(<App />);
