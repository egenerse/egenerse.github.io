import React from "react";
import "../index.css";
import { Board } from "./Board";
import { calculateWinner } from "../../utils/gameUtils";

// interface historyObject {
//   squares?: BoxValues[]
// }

// type BoxValues= string | null

// export const Game2 = ()=>{

//   const [history, setHistory] = React.useState<[historyObject]>([{ squares: Array<BoxValues>(9).fill(null)  }])
//   const [stepNumber, setStepNumber] = React.useState(0)
//   const [xIsNext, setXIsNext] = React.useState(true)

//   const jumpTo = (step:number)=> {
//     setStepNumber(step)
//     setXIsNext(step % 2 === 0)
//   }

//  const handleClick=(i:number)=> {
//     const tempHistory = history.slice(0, stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current?.squares?.slice() || [];
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = xIsNext ? "X" : "O";
//     const newHistory = tempHistory.concat({
//       squares: squares
//     })
//     setHistory(tempHistory.concat({
//       squares: squares
//     }))

//     this.setState({
//       history: history.concat({
//         squares: squares,
//       }),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ? `Go to #${move}` : "Go to start";
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = `Winner ${winner}`;
//     } else {
//       status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             handleClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
