import { initialize } from 'monaco-editor/esm/vs/editor/editor.worker';

import { createYAMLWorker, ICreateData } from './yamlWorker';

self.onmessage = () => {
  initialize((ctx, createData: ICreateData) => Object.create(createYAMLWorker(ctx, createData)));
};
