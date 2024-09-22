import { E } from "./euclid.ts";

interface CycleState {
  /** The `k` in `E(k, n)` */
  k: number;
  /** The `n` in `E(k, n)` */
  n: number;
  /** The phase of (i.e. the offset into) the current E(k, n) */
  p: number;
}

export const initialCycleState: CycleState = {
  k: 3,
  n: 4,
  p: 0,
};

export const cycleTick = ({ k, n, p }: CycleState) => {
  p = p + 1;
  if (p === n) {
    p = 0;
    k = k + 1;
    if (k === n) {
      k = n < 5 ? 1 : 3;
      n = n + 1;
      if (n === 13) {
        n = 4;
      }
    }
  }
  return { k, n, p };
};

// export const Everything: React.FC = () => {
//   const getAudioContext = useAudioContext();
//   const [state, dispatch] = React.useReducer(cycleReducer, initialCycleState);
//   const [intervalID, setIntervalID] = useState<number | undefined>();

//   const { k, n, p } = state;
//   const seq = E(k, n);

//   const n8 = 8;
//   const seq38 = E(3, 8);
//   const seq78 = E(7, 8);

//   const handleClick = () => {
//     if (intervalID) {
//       clearInterval(intervalID);
//       setIntervalID(undefined);
//     } else {
//       setIntervalID(
//         window.setInterval(() => dispatch({ type: "tick" }), 1000 / 7)
//       );
//     }
//   };

//   useEffect(() => {
//     if (intervalID) {
//       if (seq38[p % n8]) {
//         beep(getAudioContext(), 0.01, 0.001, 0.1, 660);
//       }
//       if (seq[p]) {
//         beep(getAudioContext(), 0.01);
//         beep(getAudioContext(), 0.005, 0.001, 0.02, 660);
//       }
//       if (seq78[p % n8]) {
//         beep(getAudioContext(), 0.1, 0.001, 0.1, 110);
//       }
//     }
//   }, [intervalID, p]);

//   return (
//     <BeatBox>
//       <Beats>
//         {seq38.map((v, i) => (
//           <div
//             key={i}
//             className={intervalID && v && i === p % n8 ? "on" : ""}
//           />
//         ))}
//       </Beats>
//       <Beats>
//         {seq.map((v, i) => (
//           <div key={i} className={intervalID && v && i === p ? "on" : ""} />
//         ))}
//       </Beats>
//       <Beats>
//         {seq78.map((v, i) => (
//           <div
//             key={i}
//             className={intervalID && v && i === p % n8 ? "on" : ""}
//           />
//         ))}
//       </Beats>
//       <button onClick={handleClick}>{intervalID ? "Pause" : "Play"}</button>
//     </BeatBox>
//   );
// };
