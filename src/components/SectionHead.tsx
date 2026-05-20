type Props = {
  num: string;
  /** HTML allowed (use <em> for italic accents). */
  title: string;
  blurb: string;
};

export default function SectionHead({ num, title, blurb }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="section-num">{num}</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <p className="section-blurb">{blurb}</p>
    </div>
  );
}
