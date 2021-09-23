/**
 * @discuss Which is better?
 * FriendlyFormatter.format(value);    // Class static methods
 * FriendlyFormatter.getInstance().format(value);    // Too long
 * friendlyFormatter.format(value);    // Simple instance
 */

export * from './Formatter';
export * from './DateFormatter';
export * from './NumberFormatter';
export * from './PlaceholderFormatter';

export * from './formatterParser';
