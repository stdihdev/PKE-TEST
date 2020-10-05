import {MainLayout} from "../components/MainLayout";
import {ShirtList} from "../components/shirt/ShirtList";
import React from "react";

export default function Home (props){
    return (
    <MainLayout>
        <ShirtList/>
    </MainLayout>
    )
}
