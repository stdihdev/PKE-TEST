import {MainLayout} from "../components/MainLayout";
import {ShirtList} from "../components/shirt/ShirtList";
import React from "react";
import {PantsList} from "../components/pants/PantsList";

export default function Home (props){
    return (
    <MainLayout>
        <ShirtList/>
        <PantsList/>
    </MainLayout>
    )
}
