import { Component } from "react";

class CardList extends Component {
  constructor() {
    console.log("constructor CardList");
    super();
  }

  componentWillMount() {
    console.log("componentWillMount CardList");
  }
  componentDidMount() {
    console.log("componentDidMount CardList");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps CardList");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate CardList");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate CardList");
  }

  render() {
    console.log("render CardList");
    console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
