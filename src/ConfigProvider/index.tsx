import React, { createContext, ReactNode } from 'react';

interface Config {
  prefix?: string;
}

interface ConfigProviderProps extends Config {
  children?: ReactNode;
}
const defaultConfig: Config = {
  prefix: 'heima-ui',
};

export const ConfigContext = createContext(defaultConfig);
