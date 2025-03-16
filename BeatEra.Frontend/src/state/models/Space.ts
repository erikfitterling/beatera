enum SpaceStatus {
    Waiting,
    Playing,
    Finished,
  }

export class Space {
    id: string;
    title: string;
    state: SpaceStatus;
    players: string[];
    settings: SpaceSettings;
  
    constructor(
        title: string, 
        state: SpaceStatus = SpaceStatus.Waiting, 
        players: string[] = [], 
        settings: SpaceSettings = new SpaceSettings()) 
    {
        this.id = crypto.randomUUID();
        this.title = title;
        this.state = state;
        this.players = players;
        this.settings = settings;
    }
}

export class SpaceSettings {
    scoreToWin: number;
    timeLimit: number;
  
    constructor(scoreToWin = 100, timeLimit = 60) {
        this.scoreToWin = scoreToWin;
        this.timeLimit = timeLimit;
    }
}
  