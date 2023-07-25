export interface LobbyDto {
    id: string;
    name: string;
    maxPlayers: number;
    currentPlayers: string[];
    isPrivate: boolean;
    isStarted: boolean;
}