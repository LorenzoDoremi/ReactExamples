import "./List.css";

export default function List({ l, length }) {
  return (
    <ul>
    
      { l.map((x, i) => (
        <li>{x}</li>
      ))
    
      }

    </ul>
  );
}
