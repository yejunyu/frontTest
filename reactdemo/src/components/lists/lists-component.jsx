const Lists = (props) => {
  const { pokemons } = props;
  const imgCss = {
    border: "1px solid darkorange",
    borderRadius: "10px",
  };
  return (
    <ul className="ul-container">
      {pokemons.map((p, i) => {
        return (
          <div key={p.url}>
            <li>{p.name}</li>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              style={imgCss}
              srcset=""
            />
          </div>
        );
      })}
    </ul>
  );
};

// class Lists extends React.Component {
//   render() {
//     console.log("Lists");
//     const { pokemons } = this.props;
//     // - 得换成驼峰形式
//     const imgCss = {
//       border: "1px solid darkorange",
//       borderRadius: "10px"
//     }
//     return (
//       <ul className="ul-container">
//         {pokemons.map((p, i) => {
//           return (
//             <div key={p.url}>
//               <li>{p.name}</li>
//               <img
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
//                 style={imgCss}
//                 srcset=""
//               />
//             </div>
//           );
//         })}
//       </ul>
//     );
//   }
// }
