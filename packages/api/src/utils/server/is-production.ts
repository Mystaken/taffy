import { config } from '../../../config';

export const isProduction = () => config.ENV === 'production';
