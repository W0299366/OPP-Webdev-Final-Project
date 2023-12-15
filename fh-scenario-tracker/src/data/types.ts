export interface ScenarioObject {
  id: string;
  index: string;
  name: string;
  complexity: number;
  unlocks?: Array<string>;
  requirements?: Array<RequirementObject>;
  blocks?: Array<string>;
  links?: Array<string>;
  forcedLinks?: Array<string>;
  revealed?: boolean;
  xPos: number;
  yPos: number;
}

export interface RequirementObject {
  buildings?: Array<string>;
  campaignSticker?: Array<string>;
}

export interface IndexPath {
  index: number;
  xPos: number;
  yPos: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
  revealedScenarios: Array<string>;
  killedSnowdancer: boolean;
  killedIcefist: boolean;
}
