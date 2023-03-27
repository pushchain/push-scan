export interface ThemeType {
    scheme: string;
    defaultBG: string;
    headerIconsBg: string;
    background: {
      default: string;
      secondary: string;
      tooltip: string;
      timeFilter: string;
      card: string;
      border: string;
      headerIcon: string;
      optionlist: string;
    };
    text: {
      primary: string;
      secondary: string;
      leaderboardHeader: string;
      leaderboardText: string;
      link: string;
    };
    graph: {
      line: string;
      divider: string;
      primaryLabel: string;
      secondaryLabel: string;
      legendText: string;
      axis: string;
      grantsAndPIPColors: Array<string>;
      grantsProposals: Array<string>;
      pgpCategories: Array<string>;
      barchartColorSet: Array<string>;
    };
  }