export const getAssetsPath = (path: string): string => {
  const basePath = useAppConfig().baseURL || '/';
  return `${basePath}${path}`;
}

export const getImagePath = (imageName: string): string => {
  return getAssetsPath(`images/${imageName}`);
}

export const getFlagPath = (iconName: string): string => {
  return getAssetsPath(`flags/${iconName}`);
}

export const getLogoPath = (logoName: string): string => {
  return getAssetsPath(`logos/${logoName}`);
}