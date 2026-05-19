import { NAV } from "../data/site";

type Props = {
  active: string;
  onJump: (id: string) => void;
};

export default function Rail({ active, onJump }: Props) {
  return (
    <nav className="rail" aria-label="Section progress">
      {NAV.map((n) => (
        <a
          key={n.id}
          href={"#" + n.id}
          className={active === n.id ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onJump(n.id);
          }}
        >
          <span className="lbl">{n.label}</span>
          <span className="dot" />
        </a>
      ))}
    </nav>
  );
}
