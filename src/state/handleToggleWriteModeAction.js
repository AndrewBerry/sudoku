export function handleToggleWriteModeAction({ isInsertingValue, ...state }) {
  return {
    ...state,
    isInsertingValue: !isInsertingValue
  };
}
