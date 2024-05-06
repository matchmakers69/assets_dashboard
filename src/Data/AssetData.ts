import { Asset, AssetType } from "./defs";

export const AssetsMockData: Asset[] = [
  {
    id: 100000,
    name: "Asset 1",
    type: AssetType.A,
    description: "This is a type A asset",
    attributes: [
      {
        key: "isMonitored", // TODO double check if only spelling mistake
        value: true,
      },
      {
        key: "OS Version",
        value: "1.2.3",
      },
      {
        key: "Voltage",
        // value: "855.23",
        vlaue: "855.23", // TODO double check if only spelling mistake
      },
    ],
    children: [
      {
        id: 100004,
        name: "Asset 4",
        type: AssetType.B,
        children: [
          {
            id: 100020,
            name: "Asset 20",
            type: AssetType.C,
            children: [
              {
                id: 100030,
                name: "Asset 30",
                type: AssetType.D,
                attributes: [
                  {
                    key: "power",
                    value: "40",
                  },
                  {
                    key: "material",
                    //value: "plastic",
                    vavlue: "plastic", // TODO double check if only spelling mistake
                  },
                ],
              },
            ],
          },
          {
            id: 100031,
            name: "Asset 31",
            type: AssetType.D,
            description: "this is asset of type D",
          },
        ],
      },
    ],
  },
  {
    id: 100002,
    name: "Asset 2",
    type: AssetType.A,
  },
  {
    id: 100003,
    name: "Asset 3",
    type: AssetType.B,
    children: [
      {
        id: 100050,
        name: "Asset 50",
        type: AssetType.C,
      },
      {
        id: 100051,
        name: "Asset 51",
        type: AssetType.C,
        attributes: [
          {
            key: "isMonitored",
            value: true,
          },
        ],
      },
      {
        id: 100052,
        name: "Asset 52",
        type: AssetType.C,
        children: {
          id: 100055,
          name: "Asset 55",
          type: AssetType.E,
        },
      },
    ],
  },
];
