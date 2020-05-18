const agentStates = {
  NOT_YET: {
    label: "Noch nicht infiziert",
    sort: 0,
    emoji: "😐"
  },
  INFECTED: {
    label: "Infiziert",
    sort: 1,
    emoji: "🤢"
  },
  REASONABLE: {
    label: "Vernünftig",
    sort: 2,
    emoji: "😷"
  },
  Healed: {
    label: "Geheilt",
    sort: 4,
    emoji: "😎"
  },
  DEAD: {
    label: "Verstorben",
    sort: 5,
    emoji: "💀"
  }
};

export default agentStates;
