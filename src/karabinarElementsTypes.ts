// https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/from/modifiers/
type Modifiers = 'command' | 'control' | 'option' | 'shift';

// Karabinar-EventViewerで見る
type KeyCode = string;

export type Manipulator = {
  type: 'basic' | 'mouse_motion_to_scroll';
  from: {
    key_code: KeyCode;
    modifiers: {
      mandatory: Array<Modifiers>;
    };
  };
  to: {
    key_code: KeyCode;
    modifiers?: Array<Modifiers>;
  };
};

export type Config = {
  title: string;
  rules: Array<{
    description: string;
    manipulators: Array<Manipulator>;
  }>;
};
