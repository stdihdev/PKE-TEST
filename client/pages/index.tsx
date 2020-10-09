import React from "react";
import { MainLayout } from "../components/MainLayout";
import { ShirtList } from "../components/shirt/ShirtList";
import { PantsList } from "../components/pants/PantsList";

export default function Home() {
	return (
		<MainLayout>
			<a href="/add-items" className="btn btn--primary">Add Item</a>
			<ShirtList />
			<PantsList />
		</MainLayout>
	)
}
