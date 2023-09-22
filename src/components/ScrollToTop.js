import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TbSquareRoundedArrowUp } from "react-icons/tb";

function ScrollToTop() {

    const { pathname } = useLocation();
    useEffect(() => {
        navigateToTop();
    }, [pathname]);

    function navigateToTop() {
        window.scrollTo(0, 0);
    }

    let styleObj = {
        height: "30px",
        position: "fixed",
        maxWidth: "100%",
        width: "30px",
        top: "87%",
        right: "0%",
        maxHeight: "100%",
    }

    
    return (
        <TbSquareRoundedArrowUp style={styleObj} onClick={navigateToTop}/>
    );
}

export default ScrollToTop;
