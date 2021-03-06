// Note: Sometimes you need to ensure that the libs are exactly the same
//       Exporting the `prosemirror-model` schema from here does the trick.
export { Schema } from 'prosemirror-model';
export * as schemas from './schemas';
export * as Nodes from './nodes';
export * as types from './types';
export { ReferenceKind } from './nodes/types';

export { fromHTML, fromText, fromMarkdown } from './parse';
export { toHTML, toMarkdown, toTex, toText } from './serialize';

export * as server from './server';
export * as process from './process';

export { DEFAULT_FORMAT, DEFAULT_IMAGE_WIDTH } from './defaults';
