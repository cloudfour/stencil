import * as d from '../../../declarations';
import { getAbsolutePath } from '../config-utils';
import { isBoolean } from '@utils';
import { isOutputTargetDistCustomElementsBundle } from '../../output-targets/output-utils';

export const validateCustomElementBundle = (config: d.Config, userOutputs: d.OutputTarget[]) => {
  return userOutputs.filter(isOutputTargetDistCustomElementsBundle).map(o => {
    const outputTarget = {
      ...o,
      dir: getAbsolutePath(config, o.dir || 'dist/custom-elements'),
    };
    if (!isBoolean(outputTarget.empty)) {
      outputTarget.empty = true;
    }
    if (!isBoolean(outputTarget.externalRuntime)) {
      outputTarget.externalRuntime = true;
    }
    return outputTarget;
  });
};
