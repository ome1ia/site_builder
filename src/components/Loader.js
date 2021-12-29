import { useContext } from "react";
import { LoaderContext } from "../core/context/Loader/LoaderContext";

export default function Loader() {
    const { loading } = useContext(LoaderContext);

    if (!loading) {
        return null;
    } else {
        return (
            <div className="preloader page-loader" />
        )
    }  
}
