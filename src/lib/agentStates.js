const agentStates = {
  NOT_YET: {
    label: "Noch nicht infiziert",
    sort: 0,
    emoji: "😀"
  },
  INFECTED: {
    label: "Infiziert",
    sort: 1,
    emoji: "🤢"
  },
  Healed: {
    label: "Geheilt",
    sort: 2,
    emoji: "😎"
  },
  DEAD: {
    label: "Verstorben",
    sort: 4,
    emoji: "💀"
  }
};

export default agentStates;
