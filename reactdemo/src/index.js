const App = () => {
  // 相当于类组件构造函数的功能 第一个是状态值,第二个是设置状态值的方法
  // const [state,setState] = React.useState(初始值)
  const [pokes, setPokes] = React.useState([]);
  const [filterPokes, setFilterPokes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json1) => {
        json1.results.map((v, i) => {
          v.id = i + 1;
        });
        setPokes(json1.results);
        setFilterPokes(json1.results);
      });
      // return ()=>{
      //   console.log("在组件卸载之前执行这个函数");
      // }
  }, []);

  const onChangeHandler = (e) => {
    const comparePokemons = pokes.filter((p) =>
      p.name.includes(e.target.value)
    );
    setFilterPokes(comparePokemons);
    // this.setState(
    //   () => {
    //     return { filterPokes: comparePokemons };
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };
  return (
    <div>
      <h1>宝可梦</h1>
      <Input onChangeHandler={onChangeHandler} />
      <Lists pokemons={filterPokes} />
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { pokes: [], filterPokes: [] };
//   }

//   componentDidMount() {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((res) => res.json())
//       .then((json1) => {
//         json1.results.map((v, i) => {
//           v.id = i + 1;
//         });
//         this.setState(
//           () => {
//             return { pokes: json1.results, filterPokes: json1.results };
//           },
//           () => {
//             console.log(this.state);
//           }
//         );
//       });
//   }
//   onChangeHandler = (e) => {
//     const comparePokemons = this.state.pokes.filter((p) =>
//       p.name.includes(e.target.value)
//     );
//     this.setState(
//       () => {
//         return { filterPokes: comparePokemons };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>宝可梦</h1>
//         <Input onChangeHandler={this.onChangeHandler} />
//         <Lists pokemons={this.state.filterPokes} />
//       </div>
//     );
//   }
// }
