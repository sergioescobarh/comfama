import { useEffect } from "react";
import { setAnimes, setWanted } from "../actions/index";
import { useDispatch } from "react-redux";

export const UseFetch = (url: string) => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAnimes(data.data));
                dispatch(setWanted(data.data));
            });
    }, []);
};
