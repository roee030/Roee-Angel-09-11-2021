import { useSnackbar } from "notistack";

const useAlerts = () => {
    const { enqueueSnackbar } = useSnackbar();
    const generalError = message => enqueueSnackbar(message || 'An Error Has Occured', { variant: 'error' });
    const inputError = message => enqueueSnackbar(message ?? 'An Error Has Occured, please search only on English letters', { variant: 'error' });
    const zeroResultError = message => enqueueSnackbar(message ?? 'No result for this search, please try again', { variant: 'error' });
    const updateSuccessAlert = message => enqueueSnackbar(message ?? 'Successfully Updated!', { variant: 'success' });
    return {
        generalError,
        inputError,
        updateSuccessAlert,
        zeroResultError
    };
};

export default useAlerts;