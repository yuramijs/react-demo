const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

const runtime = ({name, value}) => ({
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
});

export default runtime;
