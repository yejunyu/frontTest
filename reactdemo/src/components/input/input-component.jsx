const Input = (props) => {
  const { onChangeHandler } = props;
  return <input type="search" onChange={onChangeHandler}></input>;
};

// class Input extends React.Component {
//   render() {
//     const { onChangeHandler } = this.props;
//     return <input type="search" onChange={onChangeHandler}></input>;
//   }
// }
