interface Experiment {
  iframe: () => React.JSX.Element;
}

const experiments: readonly Experiment[] = [
  {
    iframe: () => (
      <iframe
        height="300"
        style={{ width: "100%" }}
        title="Word Clock Experiment"
        src="https://codepen.io/sebastianinman/embed/gvdZGG?default-tab=result"
        loading="lazy"
      />
    ),
  },
] as const;

export default experiments;
