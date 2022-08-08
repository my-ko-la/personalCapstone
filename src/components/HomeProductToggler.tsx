import { useState } from "react";
import HomeProductSection from "./HomeProductSection";

const HomeProductToggler: React.FunctionComponent = () => {

    const [categoryShown, setCategoryShown] = useState("MSI GS Series");



    return (
        <section>
            <ul className="flex flex-row gap-3 text-gray-600 text-sm">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </section>
    )

}

export default HomeProductToggler;