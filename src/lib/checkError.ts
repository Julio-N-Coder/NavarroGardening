// gets passed Error state updater to update ui based on inputs
export function checkMessageOrEmail(
  checker: string,
  stateUpdater: (setMessageOrEmail: {
    showError: boolean;
    message: string;
  }) => void,
  error: string
) {
  if (error.startsWith(checker)) {
    stateUpdater({
      showError: true,
      message: error,
    });
  } else {
    stateUpdater({
      showError: false,
      message: "",
    });
  }
}
