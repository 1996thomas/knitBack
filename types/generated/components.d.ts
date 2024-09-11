import type { Schema, Attribute } from '@strapi/strapi';

export interface DialogDialog extends Schema.Component {
  collectionName: 'components_dialog_dialogs';
  info: {
    displayName: 'dialog';
    icon: 'alien';
    description: '';
  };
  attributes: {
    question: Attribute.Blocks;
    reponse: Attribute.Blocks;
    LargeHeading: Attribute.Blocks;
  };
}

export interface TextParagraph extends Schema.Component {
  collectionName: 'components_text_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'layer';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    heading: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dialog.dialog': DialogDialog;
      'text.paragraph': TextParagraph;
    }
  }
}
