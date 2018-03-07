import * as Webpack from 'webpack'
export type PreprocessorData = [RegExp, Webpack.NewLoader[]]

// Try to find an installed preprocessor (loader) and return associated data (undefined otherwise).
export function scanLoaders(preprocessorDataList: PreprocessorData[]) {
  return preprocessorDataList
    .map(([test, loader]): PreprocessorData | void => {
      try {
        loader.forEach(({ loader }) => require.resolve(loader))
      } catch {
        return
      }
      return [test, loader]
    })
    .filter(Boolean)
    .pop()
}
