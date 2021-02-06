import * as fs from 'fs';

import { Config, Manipulator } from './karabinarElementsTypes';

type ArrowMapping = {
  alphabet: string;
  arrow: 'up_arrow' | 'down_arrow' | 'left_arrow' | 'right_arrow';
};

const arrowMappings: Array<ArrowMapping> = [
  {
    alphabet: 'p',
    arrow: 'up_arrow',
  },
  {
    alphabet: 'n',
    arrow: 'down_arrow',
  },
  {
    alphabet: 'b',
    arrow: 'left_arrow',
  },
  {
    alphabet: 'f',
    arrow: 'right_arrow',
  },
];

const config: Config = {
  title: 'wbydo configuration.',
  rules: [
    {
      description: 'Emacs Like Moves. 1',
      manipulators: [
        ...arrowMappings.map(
          (i): Manipulator => {
            return {
              type: 'basic',
              from: {
                key_code: i.alphabet,
                modifiers: {
                  mandatory: ['control'],
                },
              },
              to: {
                key_code: i.arrow,
              },
            };
          }
        ),
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: {
            key_code: 'delete_or_backspace',
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: {
            key_code: 'return_or_enter',
          },
        },
      ],
    },
    {
      description: 'Emacs Like Moves. 2',
      manipulators: [
        ...arrowMappings.map(
          (i): Manipulator => {
            return {
              type: 'basic',
              from: {
                key_code: i.alphabet,
                modifiers: {
                  mandatory: ['command', 'shift'],
                },
              },
              to: {
                key_code: i.arrow,
                modifiers: ['shift'],
              },
            };
          }
        ),
        ...arrowMappings.map(
          (i): Manipulator => {
            return {
              type: 'basic',
              from: {
                key_code: i.alphabet,
                modifiers: {
                  mandatory: ['command', 'control'],
                },
              },
              to: {
                key_code: i.arrow,
                modifiers: ['command'],
              },
            };
          }
        ),
      ],
    },
  ],
};

const fileName = '1234.json';
fs.writeFileSync(`./dist/${fileName}`, JSON.stringify(config));
