export type CharacterType = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  series: {
    items: [
      {
        available: number;
        name: string;
        resourceURI: string;
        returned: number;
      }
    ];
  };
  events: {
    items: [
      {
        available: number;
        name: string;
        resourceURI: string;
      }
    ];
  };
};
